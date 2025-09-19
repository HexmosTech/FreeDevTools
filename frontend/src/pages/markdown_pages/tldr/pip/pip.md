---
title: "Manage Python Packages - Control pip Commands | Online Free DevTools by Hexmos"
name: pip
path: /freedevtools/tldr/pip/pip
canonical: "https://hexmos.com/freedevtools/tldr/pip/pip/"
description: "Manage Python packages effortlessly with pip. Install, upgrade, and uninstall packages using command line. Free online tool, no registration required."
category: common
keywords:
- Python package manager
- pip install package
- pip upgrade package
- pip uninstall package
- Python requirements.txt
- pip show package info
- install Python packages
- manage Python dependencies
- Python development tools
- command line package manager
features:
- Install Python packages easily
- Upgrade existing packages quickly
- Uninstall unwanted packages cleanly
- List installed packages into a file
- Display detailed package information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pip

> Python package manager.
> Some subcommands such as `install` have their own usage documentation.
> More information: <https://pip.pypa.io>.

- Install a package (see `pip install` for more install examples):

`pip install {{package}}`

- Install a package to the user's directory instead of the system-wide default location:

`pip install --user {{package}}`

- Upgrade a package:

`pip install {{[-U|--upgrade]}} {{package}}`

- Uninstall a package:

`pip uninstall {{package}}`

- Save installed packages to file:

`pip freeze > {{requirements.txt}}`

- Show installed package info:

`pip show {{package}}`

- Install packages from a file:

`pip install {{[-r|--requirement]}} {{requirements.txt}}`
