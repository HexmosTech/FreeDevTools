---
title: "UV Sync - Update Project Dependencies | Online Free DevTools by Hexmos"
name: uv-sync
path: /freedevtools/tldr/uv/uv-sync
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-sync/"
description: "Sync dependencies effortlessly with UV. Update your project environment to match the lockfile, resolving conflicts quickly. Free online tool, no registration required."
category: common
keywords:
- uv sync dependencies
- uv package manager
- python environment sync
- lockfile synchronization
- python dependency management
- uv project update
- venv synchronization
- uv optional dependencies
- uv dependency groups
- uv sync check
features:
- Synchronizes project environment with the lockfile.
- Includes all optional dependencies with a single command.
- Syncs specific dependency groups.
- Checks environment synchronization without making changes.
- Previews changes before applying them.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uv sync

> Update the project's environment to match the lockfile.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-sync>.

- Sync the project environment with the lockfile:

`uv sync`

- Sync and include all optional dependencies:

`uv sync --all-extras`

- Sync with specific optional dependencies:

`uv sync --extra {{extra_name}}`

- Sync only development dependencies:

`uv sync --only-dev`

- Sync excluding development dependencies:

`uv sync --no-dev`

- Sync specific dependency groups:

`uv sync --group {{group_name}}`

- Check if environment is already synchronized (no changes):

`uv sync --check`

- Preview what would be synced without making changes:

`uv sync --dry-run`
