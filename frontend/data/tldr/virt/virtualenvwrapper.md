---
title: "Create Virtual Environments - Control Python Environments | Online Free DevTools by Hexmos"
name: virtualenvwrapper
path: "/freedevtools/tldr/virt/virtualenvwrapper/"
canonical: "https://hexmos.com/freedevtools/tldr/virt/virtualenvwrapper/"
description: "Create Python virtual environments with Virtualenvwrapper. Manage multiple Python versions and dependencies. Free online tool, no registration required."
category: common
keywords:
- python virtual environment
- virtual environment manager
- python dependency management
- virtualenvwrapper commands
- python virtualenv creation
- python virtualenv activation
- linux virtual environment
- macos virtual environment
- python environment isolation
- virtual environment removal
features:
- Create new Python virtual environments
- Activate and switch between virtual environments
- Deactivate virtual environments
- List available virtual environments
- Remove existing virtual environments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# virtualenvwrapper

> Group of simple wrapper commands for Python's `virtualenv` tool.
> More information: <https://virtualenvwrapper.readthedocs.org>.

- Create a new Python `virtualenv` in `$WORKON_HOME`:

`mkvirtualenv {{virtualenv_name}}`

- Create a `virtualenv` for a specific Python version:

`mkvirtualenv --python {{/usr/local/bin/python3.8}} {{virtualenv_name}}`

- Activate or use a different `virtualenv`:

`workon {{virtualenv_name}}`

- Stop the `virtualenv`:

`deactivate`

- List all virtual environments:

`lsvirtualenv`

- Remove a `virtualenv`:

`rmvirtualenv {{virtualenv_name}}`

- Get summary of all virtualenvwrapper commands:

`virtualenvwrapper`
