---
title: "Python Launcher - Run Python Versions | Free DevTools"
name: py
path: /freedevtools/tldr/windows/py
canonical: "https://hexmos.com/freedevtools/tldr/windows/py/"
description: "Run Python versions with Python Launcher for Windows. Execute scripts, start REPL sessions, and specify Python versions directly. Free online tool, no registration required."
category: windows
keywords:
- python launcher
- windows python
- python version manager
- py launcher command
- python repl windows
- python script executor
- pylauncher install
- py --list
- python windows command line
- python launcher windows
features:
- Execute Python scripts with specified versions.
- Launch interactive Python REPL sessions.
- List all installed Python versions.
- Auto-install missing Python versions.
- Run Python with custom arguments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# py

> Python Launcher for Windows that runs with specified Python version.
> See also: `python`.
> More information: <https://docs.python.org/using/windows.html#python-launcher-for-windows>.

- Start a REPL (interactive shell), optionally with arguments supported by `python` (like `-c`, `-m`, etc.):

`py {{python_arguments}}`

- Execute a specific Python file:

`py {{path/to/file.py}}`

- Run specific Python version. If the version is missing, and `PYLAUNCHER_ALLOW_INSTALL` environment variable is set, auto-install via Microsoft Store or Winget:

`py {{-2|-3.7|...}}`

- List installed Python versions:

`py --list`
