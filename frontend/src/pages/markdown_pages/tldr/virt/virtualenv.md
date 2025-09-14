---
title: "Create Virtual Environments - Isolate Python Projects | Free DevTools"
name: virtualenv
path: /freedevtools/tldr/virt/virtualenv
canonical: "https://hexmos.com/freedevtools/tldr/virt/virtualenv/"
description: "Create virtual environments with Virtualenv. Isolate Python project dependencies and manage different Python versions. Free online tool, no registration required."
category: common
keywords:
- python virtual environment
- virtualenv command
- python environment isolation
- virtual environment manager
- python dependency management
- create venv
- activate venv
- deactivate venv
- python project setup
- python version control
features:
- Create isolated Python environments.
- Customize the virtual environment prompt prefix.
- Specify a particular Python version to use.
- Activate the virtual environment for use.
- Deactivate the virtual environment.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# virtualenv

> Create virtual isolated Python environments.
> More information: <https://virtualenv.pypa.io/en/latest/cli_interface.html>.

- Create a new environment:

`virtualenv {{path/to/venv}}`

- Customize the prompt prefix:

`virtualenv --prompt {{prompt_prefix}} {{path/to/venv}}`

- Use a different version of Python with virtualenv:

`virtualenv {{[-p|--python]}} {{path/to/pythonbin}} {{path/to/venv}}`

- Start (select) the environment:

`source {{path/to/venv}}/bin/activate`

- Stop the environment:

`deactivate`
