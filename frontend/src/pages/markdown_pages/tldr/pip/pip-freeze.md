---
title: "Generate Package List - pip freeze | Online Free DevTools by Hexmos"
name: pip-freeze
path: /freedevtools/tldr/pip/pip-freeze
canonical: "https://hexmos.com/freedevtools/tldr/pip/pip-freeze/"
description: "Generate a package list with pip freeze. Discover installed Python packages and create requirements files effortlessly. Free online tool, no registration required."
category: common
keywords:
- python package list
- pip requirements file
- python dependency management
- freeze python packages
- pip freeze command
- python virtual environment packages
- python user site packages
- generate requirements.txt
- list installed python packages
- pip list dependencies
features:
- List installed Python packages
- Create requirements.txt file
- Freeze packages in a virtual environment
- List user-site installed packages
- Include pip, distribute, setuptools, and wheel in the list
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pip freeze

> List installed packages in requirements format.
> More information: <https://pip.pypa.io/en/stable/cli/pip_freeze>.

- List installed packages:

`pip freeze`

- List installed packages and write it to the `requirements.txt` file:

`pip freeze > requirements.txt`

- List installed packages in a virtual environment, excluding globally installed packages:

`pip freeze {{[-l|--local]}} > requirements.txt`

- List installed packages in the user-site:

`pip freeze --user > requirements.txt`

- List all packages, including `pip`, `distribute`, `setuptools`, and `wheel` (they are skipped by default):

`pip freeze --all > requirements.txt`
