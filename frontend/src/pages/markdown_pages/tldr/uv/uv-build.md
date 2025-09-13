---
title: "Build Python Packages - Create Wheels & SDists | Free DevTools"
name: uv-build
path: /freedevtools/tldr/uv/uv-build
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-build/"
description: "Build Python packages efficiently with uv-build. Create source distributions (SDists) and wheels from your Python projects. Free online tool, no registration required."
category: common
keywords:
- Python package builder
- Python wheel generator
- Python sdist creator
- uv package build
- Python build tool
- Python package distribution
- Python package workspace
- Pyproject.toml build
- uv build command
- Python isolated build
features:
- Build Python wheels from source
- Create source distributions (SDists)
- Build from a specific directory or workspace
- Output builds to a designated directory
- Build with a specific Python interpreter version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv build

> Build Python packages into source distributions and wheels.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-build>.

- Build a package in the current directory:

`uv build`

- Build a package from a specific directory:

`uv build {{path/to/directory}}`

- Build only a wheel (skip source distribution):

`uv build --wheel`

- Build only a source distribution (skip wheel):

`uv build --sdist`

- Build and output to a specific directory:

`uv build {{[-o|--out-dir]}} {{path/to/output}}`

- Build a specific package in a workspace:

`uv build --package {{package_name}}`

- Build all packages in the workspace:

`uv build {{[--all|--all-packages]}}`

- Build with a specific Python interpreter:

`uv build {{[-p|--python]}} {{python3.11}}`
