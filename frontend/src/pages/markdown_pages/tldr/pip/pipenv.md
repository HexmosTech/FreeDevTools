---
title: "Create Pipenv Project - Manage Python Dependencies | Online Free DevTools by Hexmos"
name: pipenv
path: /freedevtools/tldr/pip/pipenv
canonical: "https://hexmos.com/freedevtools/tldr/pip/pipenv/"
description: "Create Python project environments with Pipenv. Manage dependencies and virtual environments for seamless development. Free online tool, no registration required."
category: common
keywords:
- python dependency manager
- pipenv virtual environment
- python package management
- create python project
- pipenv install package
- pipenv requirements.txt
- python development workflow
- pipenv shell command
- python package installer
- pipenv linux
features:
- Creates isolated virtual environments for Python projects.
- Installs and manages project dependencies efficiently.
- Generates `requirements.txt` files for project portability.
- Simplifies Python development workflow with unified commands.
- Activates a shell within the project's virtual environment.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pipenv

> Simple and unified Python development workflow.
> Manage packages and the virtual environment for a project.
> More information: <https://pypi.org/project/pipenv>.

- Create a new project:

`pipenv`

- Create a new project using Python 3:

`pipenv --three`

- Install a package:

`pipenv install {{package}}`

- Install all the dependencies for a project:

`pipenv install`

- Install all the dependencies for a project (including dev packages):

`pipenv install --dev`

- Uninstall a package:

`pipenv uninstall {{package}}`

- Start a shell within the created virtual environment:

`pipenv shell`

- Generate a `requirements.txt` (list of dependencies) for a project:

`pipenv lock --requirements`
