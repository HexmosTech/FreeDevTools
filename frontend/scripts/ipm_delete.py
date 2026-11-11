#!/usr/bin/env python3
"""Remove an Installerpedia repo from the LIVE server.

Usage (from frontend/):  make ipm-delete owner/name
Needs env: IPM_API_URL (e.g. https://hexmos.com/freedevtools) and IPM_ADMIN_TOKEN.
Shows the repo, asks for 'yes', then deletes it permanently (blocked from regeneration).
"""
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request


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
    api = os.environ.get("IPM_API_URL", "").strip().rstrip("/")
    token = os.environ.get("IPM_ADMIN_TOKEN", "").strip()
    if not repo:
        print("Usage: make ipm-delete owner/name")
        return 1
    if not api or not token:
        print("Set IPM_API_URL (e.g. https://hexmos.com/freedevtools) and IPM_ADMIN_TOKEN first.")
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
    print("Sitemap and category listing refresh at the next 6pm run.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
