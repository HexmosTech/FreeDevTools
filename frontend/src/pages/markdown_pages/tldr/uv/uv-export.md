---
title: "UV Export - Generate Lockfiles | Online Free DevTools by Hexmos"
name: uv-export
path: /freedevtools/tldr/uv/uv-export
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-export/"
description: "Generate project lockfiles with UV, converting dependencies to requirements.txt or pylock.toml. Exclude dev dependencies and manage groups. Free online tool, no registration required."
category: common
keywords:
- lockfile generator
- python dependency management
- uv export lockfile
- requirements.txt generator
- pylock.toml generator
- python package exporter
- uv package manager
- dependency resolver
- python environment management
- virtual environment tools
features:
- Export project dependencies to various formats
- Exclude development dependencies from the output
- Include specific optional dependency groups
- Generate lockfiles without hashes
- Export dependencies for a specific package
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv export

> Export the project's lockfile to an alternate format.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-export>.

- Export dependencies to a `requirements.txt` file:

`uv export --format requirements-txt {{[-o|--output-file]}} {{requirements.txt}}`

- Export dependencies to `pylock.toml` format:

`uv export --format pylock.toml`

- Export only production dependencies (exclude dev dependencies):

`uv export --no-dev`

- Export including a specific optional dependency group:

`uv export --extra {{group_name}}`

- Export including all optional dependencies:

`uv export --all-extras`

- Export including a specific dependency group:

`uv export --group {{group_name}}`

- Export without hashes:

`uv export --no-hashes`

- Export dependencies for a specific package in the workspace:

`uv export --package {{package_name}}`
