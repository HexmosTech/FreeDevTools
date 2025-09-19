---
title: "UV Pip - Manage Python Packages | Online Free DevTools by Hexmos"
name: uv-pip
path: /freedevtools/tldr/uv/uv-pip
canonical: "https://hexmos.com/freedevtools/tldr/uv/uv-pip/"
description: "Manage Python packages effectively with UV Pip. Install, uninstall, and freeze dependencies for streamlined project management. Free online tool, no registration required."
category: common
keywords:
- python package manager
- uv pip installer
- dependency management
- python requirements file
- pip alternative
- uv package sync
- python package freeze
- uv install
- uv uninstall
- python package information
features:
- Install Python packages from PyPI.
- Uninstall specified Python packages.
- Freeze installed packages to a requirements file.
- List installed Python packages.
- Sync environment with a requirements file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# uv pip

> Provides pip-like commands for installing, uninstalling, and managing packages.
> More information: <https://docs.astral.sh/uv/reference/cli/#uv-pip>.

- Install a package:

`uv pip install {{package}}`

- Install packages from a requirements file:

`uv pip install {{[-r|--requirements]}} {{requirements.txt}}`

- Install a package with a specific version:

`uv pip install {{package==1.2.3}}`

- Uninstall a package:

`uv pip uninstall {{package}}`

- Save installed packages to file:

`uv pip freeze > {{requirements.txt}}`

- List installed packages:

`uv pip list`

- Show information about an installed package:

`uv pip show {{package}}`

- Sync environment with a requirements file (install/uninstall to match exactly):

`uv pip sync {{requirements.txt}}`
