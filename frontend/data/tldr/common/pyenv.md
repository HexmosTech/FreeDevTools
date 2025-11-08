---
title: "Python Version Control - Manage Python Versions | Online Free DevTools by Hexmos"
name: pyenv
path: "/freedevtools/tldr/common/pyenv/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pyenv/"
description: "Manage Python versions effectively with Pyenv. Seamlessly switch between multiple Python environments and control your project dependencies. Free online tool, no registration required."
category: common
keywords:
- Python version manager
- pyenv version control
- Python environment management
- Python version switcher
- Linux pyenv
- MacOS pyenv
- Python version installation
- pyenv commands
- pyenv global
- pyenv local
features:
- Install specific Python versions
- Uninstall unwanted Python versions
- Set global Python version for the system
- Configure local Python version for a directory
- List available and installed Python versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pyenv

> Switch between multiple versions of Python easily.
> See also: `asdf`.
> More information: <https://github.com/pyenv/pyenv>.

- List all available commands:

`pyenv commands`

- List all Python versions under the `${PYENV_ROOT}/versions` directory:

`pyenv versions`

- List all Python versions that can be installed from upstream:

`pyenv install --list`

- Install a Python version under the `${PYENV_ROOT}/versions` directory:

`pyenv install {{2.7.10}}`

- Uninstall a Python version under the `${PYENV_ROOT}/versions` directory:

`pyenv uninstall {{2.7.10}}`

- Set Python version to be used globally in the current machine:

`pyenv global {{2.7.10}}`

- Set Python version to be used in the current directory and all directories below it:

`pyenv local {{2.7.10}}`
