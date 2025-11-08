---
title: "Poetry - Manage Python Dependencies | Online Free DevTools by Hexmos"
name: poetry
path: "/freedevtools/tldr/common/poetry/"
canonical: "https://hexmos.com/freedevtools/tldr/common/poetry/"
description: "Manage Python dependencies easily with Poetry. Simplify project dependency management, create virtual environments, and publish packages. Free online tool, no registration required."
category: common
keywords:
- python dependency manager
- poetry package manager
- pyproject.toml editor
- python virtual environment
- poetry add command
- poetry install command
- poetry update command
- python package distribution
- poetry versioning tool
- python dependency resolver
features:
- Create new Python projects with dependency management
- Install and manage project dependencies automatically
- Update dependencies and lock versions with `poetry.lock`
- Execute commands within project virtual environments
- Bump project versions following semantic conventions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# poetry

> Manage Python packages and dependencies.
> See also: `asdf`.
> More information: <https://python-poetry.org/docs/cli/>.

- Create a new Poetry project in the directory with a specific name:

`poetry new {{project_name}}`

- Install and add a dependency and its sub-dependencies to the `pyproject.toml` file in the current directory:

`poetry add {{dependency}}`

- Install the project dependencies using the `pyproject.toml` file in the current directory:

`poetry install`

- Interactively (append `-n` for non-interactively) initialize the current directory as a new Poetry project:

`poetry init`

- Get the latest version of all dependencies and update `poetry.lock`:

`poetry update`

- Execute a command inside the project's virtual environment:

`poetry run {{command}}`

- Bump the version of the project in `pyproject.toml`:

`poetry version {{patch|minor|major|prepatch|preminor|premajor|prerelease}}`

- Spawn a shell within the project's virtual environment (for versions below 2.0, use `poetry shell`):

`eval "$(poetry env activate)"`
