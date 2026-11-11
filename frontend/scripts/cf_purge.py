#!/usr/bin/env python3
"""Purge specific URLs from the Cloudflare cache (not the whole zone).

Usage (from frontend/):  make purge-cf-urls URLS="https://example.com/a/ https://example.com/b/"
Credentials: CF_API_TOKEN / CF_ZONE_ID env vars, else cloudflare_api_token /
cloudflare_zone_id from fdt-dev.toml (gitignored). The token only needs the
"Cache Purge" permission on the zone.
"""
import json
import os
import sys
import tomllib
import urllib.error
import urllib.request

TOML_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "fdt-dev.toml")
MAX_FILES_PER_CALL = 30  # Cloudflare limit for purge-by-URL


def _find(obj, key):
    """Find a key anywhere in a parsed TOML document."""
    if isinstance(obj, dict):
        if key in obj and isinstance(obj[key], str):
            return obj[key]
        for v in obj.values():
            found = _find(v, key)
            if found:
                return found
    return ""


def load_creds():
    token = os.environ.get("CF_API_TOKEN", "").strip()
    zone = os.environ.get("CF_ZONE_ID", "").strip()
    if (not token or not zone) and os.path.exists(TOML_PATH):
        with open(TOML_PATH, "rb") as f:
            cfg = tomllib.load(f)
        token = token or _find(cfg, "cloudflare_api_token").strip()
        zone = zone or _find(cfg, "cloudflare_zone_id").strip()
    return token, zone


def purge(urls):
    """Purge the given URLs. Returns (ok, message)."""
    urls = [u.strip() for u in urls if u.strip()]
    if not urls:
        return False, "no URLs given"
    bad = [u for u in urls if not u.startswith(("http://", "https://"))]
    if bad:
        return False, f"URLs must start with http:// or https:// (got: {bad[0]})"

    token, zone = load_creds()
    if not token or not zone:
        return False, "Cloudflare credentials not found (set CF_API_TOKEN/CF_ZONE_ID or add them to fdt-dev.toml)"

    for i in range(0, len(urls), MAX_FILES_PER_CALL):
        batch = urls[i:i + MAX_FILES_PER_CALL]
        req = urllib.request.Request(
            f"https://api.cloudflare.com/client/v4/zones/{zone}/purge_cache",
            data=json.dumps({"files": batch}).encode(),
            method="POST",
        )
        req.add_header("Authorization", f"Bearer {token}")
        req.add_header("Content-Type", "application/json")
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                body = json.loads(resp.read().decode() or "{}")
        except urllib.error.HTTPError as e:
            return False, f"Cloudflare returned {e.code}: {e.read().decode(errors='replace')[:300]}"
        except Exception as e:  # network errors
            return False, f"request failed: {e}"
        if not body.get("success"):
            return False, f"Cloudflare error: {body.get('errors')}"
    return True, f"purged {len(urls)} URL(s)"


def main():
    urls = sys.argv[1:]
    if not urls:
        print('Usage: make purge-cf-urls URLS="<url> [<url> ...]"')
        return 1
    ok, msg = purge(urls)
    print(("OK: " if ok else "FAILED: ") + msg)
    if ok:
        for u in urls:
            print("  " + u)
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
