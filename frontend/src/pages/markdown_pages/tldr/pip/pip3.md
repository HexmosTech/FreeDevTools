---
title: "Install Python Packages - Manage with pip3 | Online Free DevTools by Hexmos"
name: pip3
path: /freedevtools/tldr/pip/pip3
canonical: "https://hexmos.com/freedevtools/tldr/pip/pip3/"
description: "Install Python packages easily with pip3, the Python package manager. Manage dependencies, upgrade packages, and create requirements files effortlessly. Free online tool, no registration required."
category: common
keywords:
- python package manager
- pip install package
- pip upgrade package
- pip uninstall package
- python dependency management
- pip freeze requirements
- pip install requirements
- python package info
- python package installation
- command line package manager
features:
- Install Python packages from PyPI
- Upgrade existing Python packages
- Uninstall Python packages from your system
- Generate a list of installed packages for reproducibility
- Install packages from a requirements file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pip3

> Python package manager.
> More information: <https://pip.pypa.io>.

- Install a package:

`pip3 install {{package}}`

- Install a specific version of a package:

`pip3 install {{package}}=={{version}}`

- Upgrade a package:

`pip3 install {{[-U|--upgrade]}} {{package}}`

- Uninstall a package:

`pip3 uninstall {{package}}`

- Save the list of installed packages to a file:

`pip3 freeze > {{requirements.txt}}`

- Install packages from a file:

`pip3 install {{[-r|--requirement]}} {{requirements.txt}}`

- Show installed package info:

`pip3 show {{package}}`
