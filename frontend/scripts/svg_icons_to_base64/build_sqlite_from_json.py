#!/usr/bin/env python3
"""
Build a SQLite database from base64 SVG JSON files and verify contents.

- Scans scripts/svg_icons_to_base64/base64_svg_icons/*.json
- Reads data/cluster_svg.json for metadata
- Creates SQLite DB at db/all_dbs/svg-icons-db.db
- Table: icon(id INTEGER PRIMARY KEY AUTOINCREMENT, cluster TEXT, name TEXT, base64 TEXT, ...)
- Table: cluster(name TEXT PRIMARY KEY, count INTEGER, source_folder TEXT, ...)
- Table: overview(id INTEGER PRIMARY KEY CHECK(id = 1), total_count INTEGER)
- Indexes on (cluster) and (cluster, name)
- Verifies by printing counts and sample rows
"""

import json
import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).parent
JSON_DIR = BASE_DIR / "base64_svg_icons"
CLUSTER_SVG_PATH = BASE_DIR.parent.parent / "data" / "cluster_svg.json"
DB_PATH = Path(__file__).parent.parent.parent / "db" / "all_dbs" / "svg-icons-db.db"


def ensure_schema(conn: sqlite3.Connection) -> None:
    cur = conn.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS icon (
            id INTEGER,
            url_hash INTEGER PRIMARY KEY,
            cluster TEXT NOT NULL,
            name TEXT NOT NULL,
            base64 TEXT NOT NULL,
            description TEXT DEFAULT '',
            usecases TEXT DEFAULT '[]',
            synonyms TEXT DEFAULT '[]',
            tags TEXT DEFAULT '[]',
            industry TEXT DEFAULT '',
            emotional_cues TEXT DEFAULT '',
            enhanced INTEGER DEFAULT 0,
            img_alt TEXT DEFAULT '',
            ai_image_alt_generated INTEGER DEFAULT 0,
            url TEXT NOT NULL
        ) WITHOUT ROWID;
        """
    )
    cur.execute("CREATE INDEX IF NOT EXISTS idx_icon_cluster ON icon(cluster);")
    cur.execute(
        "CREATE UNIQUE INDEX IF NOT EXISTS idx_icon_cluster_name ON icon(cluster, name);"
    )

    # Create cluster table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS cluster (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL,
            source_folder TEXT DEFAULT '',
            path TEXT DEFAULT '',
            keywords TEXT DEFAULT '[]',
            features TEXT DEFAULT '[]',
            title TEXT DEFAULT '',
            description TEXT DEFAULT ''
        );
        """
    )

    # Create overview table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS overview (
            id INTEGER PRIMARY KEY,
            total_count INTEGER NOT NULL,
            name TEXT
        );
        """
    )
    try:
        cur.execute("ALTER TABLE overview ADD COLUMN name TEXT;")
    except sqlite3.OperationalError:
        # Column already exists
        pass
    conn.commit()


essql = "INSERT OR IGNORE INTO icon(cluster, name, base64, description, usecases, synonyms, tags, industry, emotional_cues, enhanced) VALUES(?, ?, ?, ?, ?, json(?), json(?), ?, ?, ?)"


def load_cluster_svg_data() -> dict:
    """Load cluster_svg.json metadata."""
    if not CLUSTER_SVG_PATH.exists():
        print(
            f"⚠ cluster_svg.json not found at {CLUSTER_SVG_PATH}, using empty metadata"
        )
        return {}

    try:
        with open(CLUSTER_SVG_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data.get("clusters", {})
    except Exception as e:
        print(f"⚠ Failed to read cluster_svg.json: {e}, using empty metadata")
        return {}


def load_json_files(conn: sqlite3.Connection) -> tuple[int, int]:
    if not JSON_DIR.exists():
        raise SystemExit(f"JSON directory not found: {JSON_DIR}")

    cluster_metadata = load_cluster_svg_data()
    cur = conn.cursor()
    inserted = 0
    files = list(JSON_DIR.glob("*.json"))

    for json_file in files:
        cluster = json_file.stem
        cluster_data = cluster_metadata.get(cluster, {})
        file_names_data = {
            item.get("fileName", ""): item for item in cluster_data.get("fileNames", [])
        }

        try:
            data = json.loads(json_file.read_text("utf-8"))
        except Exception as e:
            print(f"✗ Failed to read {json_file}: {e}")
            continue
        icons = data.get("icons")
        if not isinstance(icons, list):
            print(f"⚠ Skipping {json_file.name}: no 'icons' array")
            continue

        batch = []
        for item in icons:
            filename = item.get("filename", "")
            if not filename or not item.get("base64"):
                continue

            # Get metadata from cluster_svg.json for this specific file
            file_meta = file_names_data.get(filename, {})

            # Prepare data with defaults
            description = file_meta.get("description", "")
            usecases = file_meta.get("usecases", "")
            synonyms = json.dumps(file_meta.get("synonyms", []))
            tags = json.dumps(file_meta.get("tags", []))
            industry = file_meta.get("industry", "")
            emotional_cues = file_meta.get("emotional_cues", "")
            enhanced = 1 if file_meta.get("enhanced", False) else 0

            batch.append(
                (
                    cluster,
                    filename,
                    item.get("base64", ""),
                    description,
                    usecases,
                    synonyms,
                    tags,
                    industry,
                    emotional_cues,
                    enhanced,
                )
            )

        cur.executemany(essql, batch)
        conn.commit()
        print(f"✓ {json_file.name}: inserted {len(batch)} rows")
        inserted += len(batch)
    return inserted, len(files)


def populate_cluster_and_overview(conn: sqlite3.Connection) -> None:
    """Populate cluster and overview tables from icon table and cluster_svg.json."""
    cur = conn.cursor()
    cluster_metadata = load_cluster_svg_data()

    # Populate cluster table
    cur.execute("DELETE FROM cluster;")

    # Get all clusters from icon table
    cur.execute("SELECT DISTINCT cluster FROM icon ORDER BY cluster;")
    clusters = [row[0] for row in cur.fetchall()]

    for cluster_name in clusters:
        # Count icons for this cluster
        cur.execute("SELECT COUNT(*) FROM icon WHERE cluster = ?;", (cluster_name,))
        count = cur.fetchone()[0]

        # Get metadata from cluster_svg.json
        cluster_data = cluster_metadata.get(cluster_name, {})

        # Use display name from cluster_svg.json, fallback to folder name
        display_name = cluster_data.get("name", cluster_name)
        source_folder = cluster_data.get("source_folder", cluster_name)
        path = cluster_data.get("path", "")
        keywords = json.dumps(cluster_data.get("keywords", []))
        features = json.dumps(cluster_data.get("features", []))
        title = cluster_data.get("title", "")
        description = cluster_data.get("description", "")

        cur.execute(
            """
            INSERT INTO cluster (name, count, source_folder, path, keywords, features, title, description)
            VALUES (?, ?, ?, ?, json(?), json(?), ?, ?);
            """,
            (
                display_name,
                count,
                source_folder,
                path,
                keywords,
                features,
                title,
                description,
            ),
        )

    # Get total count and populate overview table
    cur.execute("SELECT COUNT(*) FROM icon;")
    total_count = cur.fetchone()[0]

    # Compute cluster count for overview
    cur.execute("SELECT COUNT(*) FROM cluster;")
    cluster_count = cur.fetchone()[0]

    cur.execute("DELETE FROM overview;")
    cur.execute(
        "INSERT INTO overview (id, total_count, name) VALUES (1, ?, 'icons');",
        (total_count,),
    )
    cur.execute(
        "INSERT INTO overview (id, total_count, name) VALUES (2, ?, 'cluster');",
        (cluster_count,),
    )

    conn.commit()
    print(f"✓ Populated cluster and overview tables")


def verify(conn: sqlite3.Connection) -> None:
    cur = conn.cursor()
    cur.execute("SELECT COUNT(*) FROM icon;")
    total = cur.fetchone()[0]
    print(f"Total rows: {total}")

    cur.execute(
        "SELECT cluster, COUNT(*) FROM icon GROUP BY cluster ORDER BY cluster LIMIT 10;"
    )
    for cluster, count in cur.fetchall():
        print(f"  {cluster}: {count}")

    cur.execute(
        "SELECT cluster, name, length(base64) FROM icon ORDER BY cluster, name LIMIT 5;"
    )
    print("Sample rows:")
    for row in cur.fetchall():
        print("  ", row)

    # Verify cluster table
    cur.execute(
        "SELECT name, count, source_folder FROM cluster ORDER BY name LIMIT 10;"
    )
    print("\nCluster table:")
    for row in cur.fetchall():
        print(f"  {row[0]}: {row[1]} icons, source_folder: {row[2]}")

    # Verify overview table
    cur.execute("SELECT total_count FROM overview WHERE id = 1;")
    overview_row = cur.fetchone()
    if overview_row:
        print(f"\nOverview table: total_count = {overview_row[0]}")


def main() -> None:
    DB_PATH.unlink(missing_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        ensure_schema(conn)
        inserted, files = load_json_files(conn)
        print(f"Inserted {inserted} rows from {files} files into {DB_PATH}")
        populate_cluster_and_overview(conn)
        verify(conn)


if __name__ == "__main__":
    main()
