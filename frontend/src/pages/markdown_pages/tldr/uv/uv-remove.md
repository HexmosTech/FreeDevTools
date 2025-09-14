---
title: "UV - Remove Dependencies | Free DevTools"
name: uv-remove
path: "/freedevtools/tldr/uv/uv-remove"
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-remove/"
description: "Remove Python dependencies with UV. Manage project dependencies in pyproject.toml, including development and optional groups. Free online tool, no registration required."
category: common
keywords:
- uv remove dependency
- python dependency management
- pyproject.toml editor
- uv package remover
- virtual environment cleaner
- python package uninstaller
- uv delete package
- python dependency tools
- uv command line interface
- package group remover
features:
- Remove a single dependency
- Remove multiple dependencies simultaneously
- Remove development dependencies
- Remove dependencies from optional groups
- Remove dependencies without syncing virtual environment
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv remove

> Remove dependencies from the project's `pyproject.toml` file.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-remove>.

- Remove a dependency from the project:

`uv remove {{package}}`

- Remove multiple dependencies:

`uv remove {{package1 package2 ...}}`

- Remove a development dependency:

`uv remove --dev {{package}}`

- Remove a dependency from an optional dependency group:

`uv remove --optional {{extra_name}} {{package}}`

- Remove a dependency from a specific dependency group:

`uv remove --group {{group_name}} {{package}}`

- Remove without syncing the virtual environment:

`uv remove --no-sync {{package}}`
