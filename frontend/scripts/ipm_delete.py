#!/usr/bin/env python3
"""Remove an Installerpedia repo from the LIVE server.

Usage (from frontend/):  make ipm-delete owner/name [TAKEDOWN=1]
  default     the page redirects to its category (301)
  TAKEDOWN=1  the page answers 410 Gone; also works on an already removed repo
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
    flag = os.environ.get("IPM_TAKEDOWN", "").strip()
    if not repo or flag not in ("", "0", "1"):
        print("Usage: make ipm-delete owner/name [TAKEDOWN=1]")
        return 1
    takedown = flag == "1"
    if not token:
        print("Set IPM_ADMIN_TOKEN first (e.g. in frontend/.env).")
        return 1

    st, data = call("GET", f"{api}/api/installerpedia/check_ipm_repo?repo=" + urllib.parse.quote(repo))
    if st != 200 or not (data.get("exists") or data.get("removed")):
        print(f"'{repo}' not found on the live server (status {st}). Nothing changed.")
        return 1
    removed = not data.get("exists")
    d = data if removed else data["data"]
    name = d.get("repo", repo)
    slug = name.lower().replace("/", "-")
    if not removed:
        state = "live"
    elif data.get("takedown"):
        state = "already removed (takedown, 410)"
    else:
        state = "already removed (redirect, 301)"
    gone = takedown or bool(data.get("takedown"))
    print("\n-- Repo found --")
    print(f"  Repo        : {name}")
    print(f"  Category    : {d.get('repo_type')}")
    if not removed:
        print(f"  Stars       : {d.get('stars')}")
        print(f"  Description : {(d.get('description') or '')[:100]}")
    print(f"  Page        : /freedevtools/installerpedia/{d.get('repo_type')}/{slug}/")
    print(f"  State       : {state}")
    print(f"  Afterwards  : {'410 Gone' if gone else '301 redirect to the category page'}")
    print("\nThis removes it from the live site, search and static pages, and blocks it from ever being regenerated.")

    if input("Type 'yes' to delete in PRODUCTION: ").strip().lower() != "yes":
        print("Aborted. Nothing changed.")
        return 0

    st, res = call("POST", f"{api}/api/admin/ipm/delete-repo", token, {"repo": name, "takedown": takedown})
    if st != 200:
        print(f"Delete failed (status {st}): {res}")
        return 1
    print(f"\nDone: {res}")
    if not res.get("meili_removed"):
        print("Warning: search index removal failed; check server logs.")
    takedown_missed = takedown and not res.get("takedown")
    if takedown_missed:
        print("WARNING: the server did not apply the takedown (is the new code deployed?). The page will NOT return 410.")
    page_url = f"{api}/installerpedia/{d.get('repo_type')}/{slug}/"
    urls = [page_url, page_url.rstrip("/"), page_url + "metrics/"]
    try:
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        import cf_purge
        ok, msg = cf_purge.purge(urls)
    except Exception as e:
        ok, msg = False, str(e)
    if ok:
        print(f"CDN: {msg} ({page_url})")
    else:
        print(f"CDN purge skipped: {msg}")
        print(f'Purge manually:  make purge-cf-urls URLS="{" ".join(urls)}"')
    print("Sitemap and category listing update on the next regeneration.")
    if gone:
        print(f"Check:  curl -I {page_url}   (expect 410)")
    return 1 if takedown_missed else 0


if __name__ == "__main__":
    sys.exit(main())
