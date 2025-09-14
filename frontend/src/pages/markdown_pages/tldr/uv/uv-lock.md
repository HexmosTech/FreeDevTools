---
title: "Create uv Lockfile - Update Projects | Free DevTools"
name: uv-lock
path: /freedevtools/tldr/uv/uv-lock
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-lock/"
description: "Create lockfiles with uv-lock for Python projects. Ensure consistent dependencies and reproducible builds. Free online tool, no registration required."
category: common
keywords:
- python lockfile generator
- uv lockfile update
- dependency lockfile creator
- python dependency management
- uv package manager
- python project lock
- reproducible builds
- uv virtual environment
- python dependency lockfile
- package version pinning
features:
- Generates or updates a project's lockfile.
- Checks if the lockfile is up-to-date.
- Previews what would be locked without writing the lockfile.
- Upgrades all packages to their latest compatible versions.
- Locks a specific Python script instead of the current project.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv lock

> Update the project's lockfile.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-lock>.

- Create or update the project's lockfile:

`uv lock`

- Check if the lockfile is up-to-date without updating it:

`uv lock --check`

- Assert that a lockfile exists without checking if it's current:

`uv lock --check-exists`

- Preview what would be locked without writing the lockfile:

`uv lock --dry-run`

- Lock a specific Python script instead of the current project:

`uv lock --script {{path/to/script.py}}`

- Upgrade all packages to their latest compatible versions:

`uv lock --upgrade`

- Upgrade only specific packages:

`uv lock --upgrade-package {{package1}} --upgrade-package {{package2}}`
