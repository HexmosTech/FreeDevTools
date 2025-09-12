---
title: "Install Python Packages - Manage Dependencies | Free DevTools"
name: pip-install
path: /freedevtools/tldr/common/pip-install
canonical: "https://hexmos.com/freedevtools/tldr/common/pip-install/"
description: "Install Python packages effortlessly with pip. Manage dependencies, specify versions, and install from requirements files using this simple command. Free online tool, no registration required."
category: common
keywords:
- python package installer
- pip dependency management
- python package installation
- pip install requirements
- python version control
- pip install url
- python editable install
- pip package manager
- python package command
- pip install package
features:
- Install packages by name
- Install specific package versions
- Install packages from requirements files
- Install packages from URLs or local archives
- Install local packages in editable mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pip install

> Install Python packages.
> More information: <https://pip.pypa.io>.

- Install a package:

`pip install {{package}}`

- Install a specific version of a package:

`pip install {{package}}=={{version}}`

- Install packages listed in a file:

`pip install {{[-r|--requirement]}} {{path/to/requirements.txt}}`

- Install packages from an URL or local file archive (.tar.gz | .whl):

`pip install {{[-f|--find-links]}} {{url|path/to/file}}`

- Install the local package in the current directory in develop (editable) mode:

`pip install {{[-e|--editable]}} {{.}}`
