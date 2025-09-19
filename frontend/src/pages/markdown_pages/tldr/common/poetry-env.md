---
title: "Poetry Env - Manage Python Virtualenvs | Online Free DevTools by Hexmos"
name: poetry-env
path: /freedevtools/tldr/common/poetry-env
canonical: "https://hexmos.com/freedevtools/tldr/common/poetry-env/"
description: "Manage Python virtual environments with Poetry Env. Activate, list, and remove virtualenvs associated with Poetry projects. Free online tool, no registration required."
category: common
keywords:
- poetry environment manager
- python virtualenv control
- poetry venv management
- python environment activation
- poetry environment list
- python environment removal
- poetry environment use
- poetry virtual environment path
- poetry environment info
- python project environment
features:
- Activate Poetry virtual environments
- Display information about Poetry environments
- List Poetry virtual environments with full paths
- Remove specific or all Poetry environments
- Use a specific Python executable for a Poetry environment
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# poetry-env

> Manage virtualenvs associated with a Poetry project.
> See also: `asdf`.
> More information: <https://python-poetry.org/docs/cli/#env>.

- Print the command to activate a virtualenv:

`poetry env activate`

- Display information about the current environment (-p or -e will display the environment's path or executable):

`poetry env info {{[-p|--path]}} {{[-e|--executable]}}`

- List all virtualenvs associated with the current project (optionally showing the full path):

`poetry env list --full-path`

- Remove specific or all virtualenvs associated with the current project:

`poetry env remove python {{path/to/executable|environment_name}} | poetry env remove --all`

- Activate or create a virtualenv for the project using the specified python executable:

`poetry env use python {{path/to/executable}}`
