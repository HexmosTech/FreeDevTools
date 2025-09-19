---
title: "Version Control - Manage Project Versions | Online Free DevTools by Hexmos"
name: uv-version
path: /freedevtools/tldr/uv/uv-version
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-version/"
description: "Manage project versions with Version Control, a command line utility. Bump versions, set specific versions, and preview changes with uv. Free online tool, no registration required."
category: common
keywords:
- project versioning
- semantic versioning
- pyproject.toml update
- uv version control
- package version manager
- command line version tool
- version bumping
- python version management
- version preview
- workspace version update
features:
- Display current project version
- Set project version to a specific value
- Bump project version using semantic versioning
- Preview version changes without writing to pyproject.toml
- Update version for a specific package in a workspace
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv version

> Read or update a project's version.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-version>.

- Display the current project version:

`uv version`

- Set the project version to a specific value:

`uv version {{1.2.3}}`

- Bump the project version using semantic versioning:

`uv version --bump {{major|minor|patch}}`

- Preview version changes without writing to `pyproject.toml`:

`uv version --bump {{patch}} --dry-run`

- Update version for a specific package in a workspace:

`uv version --package {{package_name}} {{1.2.3}}`

- Display version in JSON format:

`uv version --output-format json`
