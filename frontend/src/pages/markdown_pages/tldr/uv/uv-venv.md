---
title: "Create Python Virtual Environments - uv-venv | Online Free DevTools by Hexmos"
name: uv-venv
path: /freedevtools/tldr/uv/uv-venv
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-venv/"
description: "Create isolated Python environments with uv-venv, a modern and fast virtual environment creator. Manage project dependencies and streamline development. Free online tool, no registration required."
category: common
keywords:
- python virtual environment
- uv venv create
- isolated python environment
- python dependency management
- venv manager
- python environment creation
- uv package manager
- python environment tool
- cross-platform venv
- virtual environment builder
features:
- Create isolated Python environments
- Specify a custom Python version
- Define a custom prompt prefix
- Overwrite existing environments
- Create environments at specific paths
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv venv

> Create an isolated Python environment for installing packages.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-venv>.

- Create a virtual environment in the default location (`.venv`):

`uv venv`

- Create a virtual environment at a specific path:

`uv venv {{path/to/venv}}`

- Create using a specific Python version:

`uv venv --python {{3.12}}`

- Create with a custom prompt prefix:

`uv venv --prompt {{my_project}}`

- Create and allow overwriting existing environment:

`uv venv --allow-existing {{venv_name}}`
