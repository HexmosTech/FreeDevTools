#!/usr/bin/env python3
"""Remove an Installerpedia repo from the LIVE server.

Usage (from frontend/):  make ipm-delete owner/name
Needs env: IPM_ADMIN_TOKEN. IPM_API_URL is optional (default: https://hexmos.com/freedevtools).
Shows the repo, asks for 'yes', then deletes it permanently (blocked from regeneration).
"""
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request

DEFAULT_API_URL = "https://hexmos.com/freedevtools"


def call(method, url, token=None, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method)
    req.add_header("Content-Type", "application/json")
    if token:
        req.add_header("X-Admin-Token", token)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status, json.loads(resp.read().decode() or "{}")
    except urllib.error.HTTPError as e:
        return e.code, {"error": e.read().decode(errors="replace")[:300]}


def main():
    repo = os.environ.get("IPM_REPO", "").strip()
    api = (os.environ.get("IPM_API_URL", "").strip() or DEFAULT_API_URL).rstrip("/")
    token = os.environ.get("IPM_ADMIN_TOKEN", "").strip()
    if not repo:
        print("Usage: make ipm-delete owner/name")
        return 1
    if not token:
        print("Set IPM_ADMIN_TOKEN first (e.g. in frontend/.env).")
        return 1

    st, data = call("GET", f"{api}/api/installerpedia/check_ipm_repo?repo=" + urllib.parse.quote(repo))
    if st != 200 or not data.get("exists"):
        print(f"'{repo}' not found on the live server (status {st}). Nothing changed.")
        return 1
    d = data["data"]
    slug = d.get("repo", repo).lower().replace("/", "-")
    print("\n-- Repo found --")
    print(f"  Repo        : {d.get('repo')}")
    print(f"  Category    : {d.get('repo_type')}")
    print(f"  Stars       : {d.get('stars')}")
    print(f"  Description : {(d.get('description') or '')[:100]}")
    print(f"  Page        : /freedevtools/installerpedia/{d.get('repo_type')}/{slug}/")
    print("\nThis removes it from the live site, search and static pages, and blocks it from ever being regenerated.")

    if input("Type 'yes' to delete in PRODUCTION: ").strip().lower() != "yes":
        print("Aborted. Nothing changed.")
        return 0

    st, res = call("POST", f"{api}/api/admin/ipm/delete-repo", token, {"repo": d.get("repo", repo)})
    if st != 200:
        print(f"Delete failed (status {st}): {res}")
        return 1
    print(f"\nDone: {res}")
    if not res.get("meili_removed"):
        print("Warning: search index removal failed; check server logs.")
    page_url = f"{api}/installerpedia/{d.get('repo_type')}/{slug}/"
    try:
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        import cf_purge
        ok, msg = cf_purge.purge([page_url])
    except Exception as e:
        ok, msg = False, str(e)
    if ok:
        print(f"CDN: {msg} ({page_url})")
    else:
        print(f"CDN purge skipped: {msg}")
        print(f'Purge it manually:  make purge-cf-urls URLS="{page_url}"')
    print("Sitemap and category listing update on the next regeneration.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
