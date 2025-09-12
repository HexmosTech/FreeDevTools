---
title: "Create Python Projects - UV Package Manager | Free DevTools"
name: uv
path: /freedevtools/tldr/common/uv
canonical: "https://hexmos.com/freedevtools/tldr/common/uv/"
description: "Create Python projects with UV Package Manager. Manage dependencies, lockfiles, and environments with this fast and efficient tool. Free online tool, no registration required."
category: common
keywords:
- python package manager
- uv package manager
- python project manager
- uv dependency manager
- python environment manager
- uv lockfile generator
- python package installer
- uv project initializer
- python toml manager
- uv python
features:
- Initialize new Python projects
- Add and remove project dependencies
- Run scripts within a project environment
- Update environments from pyproject.toml
- Generate lock files for reproducible builds
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv

> A fast Python package and project manager.
> Some subcommands such as `tool` and `python` have their own usage documentation.
> More information: <https://docs.astral.sh/uv/reference/cli>.

- Create a new Python project in the current directory:

`uv init`

- Create a new Python project at the specified path:

`uv init {{path/to/directory}}`

- Add a new dependency to the project:

`uv add {{package}}`

- Remove a dependency from the project:

`uv remove {{package}}`

- Run a script in the project's environment:

`uv run {{path/to/script.py}}`

- Run a command in the project's environment:

`uv run {{command}}`

- Update a project's environment from `pyproject.toml`:

`uv sync`

- Create a lock file for the project's dependencies:

`uv lock`
