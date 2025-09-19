---
title: "Create Python Virtual Environments - venv | Online Free DevTools by Hexmos"
name: venv
path: /freedevtools/tldr/common/venv
canonical: "https://hexmos.com/freedevtools/tldr/common/venv/"
description: "Create virtual environments with venv. Isolate project dependencies and manage Python versions effectively. Free online tool, no registration required."
category: common
keywords:
- python virtual environment
- venv python
- python environment isolation
- python package management
- virtualenv linux
- virtualenv windows
- venv macos
- python dependency management
- python development environment
- python environment creation
features:
- Create isolated Python environments
- Manage project dependencies separately
- Activate and deactivate virtual environments easily
- Specify Python interpreter for each environment
- Ensure reproducible project builds
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# venv

> Create lightweight virtual environments in python.
> More information: <https://docs.python.org/library/venv.html>.

- Create a Python virtual environment:

`python -m venv {{path/to/virtual_environment}}`

- Activate the virtual environment (Linux and macOS):

`source {{path/to/virtual_environment}}/bin/activate`

- Activate the virtual environment (Windows):

`{{path\to\virtual_environment}}\Scripts\activate.bat`

- Deactivate the virtual environment:

`deactivate`

- Create an alias that generates a `venv` folder and automatically activates it:

`alias venv='python -m venv .venv && source {{.venv/bin/activate|.venv\Scripts\activate.bat}}'`
