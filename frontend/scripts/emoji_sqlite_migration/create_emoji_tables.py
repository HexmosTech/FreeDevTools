#!/usr/bin/env python3
import sqlite3

DB_PATH = "emoji.db"


def create_emoji_table(cur: sqlite3.Cursor):
    """Creates the main emoji metadata table."""
    cur.execute("DROP TABLE IF EXISTS emojis;")

    cur.execute("""
    CREATE TABLE emojis (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT,
        unicode TEXT,                  -- JSON array of Unicode values
        slug TEXT UNIQUE,
        title TEXT,
        category TEXT,
        description TEXT,
        apple_vendor_description TEXT,
        keywords TEXT,                 -- JSON array
        also_known_as TEXT,            -- JSON array
        version TEXT,                  -- JSON object (emoji/unicode versions)
        senses TEXT,                   -- JSON object (adjectives/verbs/nouns)
        shortcodes TEXT                -- JSON object (github/slack/discord)
    )
    """)

    print("✅ Emoji table created.")


def create_images_table(cur: sqlite3.Cursor):
    """Creates the emoji images table."""
    cur.execute("DROP TABLE IF EXISTS images;")

    cur.execute("""
    CREATE TABLE images (
        emoji_slug TEXT,
        filename TEXT,
        base64_data TEXT,
        PRIMARY KEY (emoji_slug, filename),
        FOREIGN KEY (emoji_slug) REFERENCES emojis(slug) ON DELETE CASCADE
    );
    """)

    print("✅ Images table created.")


def create_tables():
    """Creates both emojis and images tables from scratch."""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("PRAGMA foreign_keys = ON;")

    create_emoji_table(cur)
    # create_images_table(cur)

    conn.commit()
    conn.close()
    print("🎉 All tables created successfully.")


if __name__ == "__main__":
    create_tables()
