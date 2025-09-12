---
title: "Install Python Applications - Control Environments with pipx | Free DevTools"
name: pipx
path: /freedevtools/tldr/common/pipx
canonical: "https://hexmos.com/freedevtools/tldr/common/pipx/"
description: "Install Python applications in isolated environments with pipx. Manage dependencies and execute Python tools. Free online tool, no registration required."
category: common
keywords:
- Python application installer
- Python virtual environment manager
- pipx command line tool
- Python package installer
- Isolated environment installer
- pipx dependency management
- pipx environment control
- Python command runner
- Python environment manager linux
- Python environment manager macos
features:
- Install Python applications in isolated virtual environments
- Execute Python applications without environment conflicts
- Inject dependencies into existing virtual environments
- Manage Python packages and dependencies efficiently
- Run Python applications with custom pip arguments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pipx

> Install and run Python applications in isolated environments.
> More information: <https://github.com/pypa/pipx>.

- Run an app in a temporary virtual environment:

`pipx run {{pycowsay}} {{moo}}`

- Install a package in a virtual environment and add entry points to path:

`pipx install {{package}}`

- List installed packages:

`pipx list`

- Run an app in a temporary virtual environment with a package name different from the executable:

`pipx run --spec {{httpx-cli}} {{httpx}} {{http://www.github.com}}`

- Inject dependencies into an existing virtual environment:

`pipx inject {{package}} {{dependency1 dependency2 ...}}`

- Install a package in a virtual environment with pip arguments:

`pipx install --pip-args='{{pip-args}}' {{package}}`

- Upgrade/reinstall/uninstall all installed packages:

`pipx {{upgrade-all|uninstall-all|reinstall-all}}`
