---
title: "UV Init - Create Python Projects | Free DevTools"
name: uv-init
path: /freedevtools/tldr/uv/uv-init
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-init/"
description: "Create Python projects quickly with UV Init. Easily initialize projects, manage build systems, and generate pyproject.toml files. Free online tool, no registration required."
category: common
keywords:
- python project initialization
- uv project creation
- python build backend
- pyproject.toml generator
- uv init command
- python package manager
- project initialization tool
- python library creation
- venv management
- uv virtual environment
features:
- Initialize Python projects in specified directories
- Specify build systems like setuptools or flit
- Generate pyproject.toml files with minimal configuration
- Create Python libraries with library support
- Set project descriptions during initialization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv init

> Create a new Python project.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-init>.

- Initialize a project in the current directory:

`uv init`

- Initialize a project with a certain name:

`uv init {{project_name}}`

- Create a project in a given directory:

`uv init --directory {{path/to/directory}} {{project_name}}`

- Create a project for a Python library:

`uv init {{[--lib|--library]}} {{project_name}}`

- Specify the build system:

`uv init --build-backend {{build_backend}} {{project_name}}`

- Only create a `pyproject.toml`:

`uv init --bare {{project_name}}`

- Set the project description:

`uv init --description "{{description}}" {{project_name}}`
