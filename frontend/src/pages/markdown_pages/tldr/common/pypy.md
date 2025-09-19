---
title: "Execute Python Scripts - Run pypy Commands | Online Free DevTools by Hexmos"
name: pypy
path: /freedevtools/tldr/common/pypy
canonical: "https://hexmos.com/freedevtools/tldr/common/pypy/"
description: "Execute Python scripts instantly with pypy command. Run REPL, debug scripts, and install packages effortlessly. Free online tool, no registration required."
category: common
keywords:
- python script execution
- pypy command line
- python interactive shell
- pypy package installer
- pypy debugger command
- execute python expression
- pypy module runner
- python development tool
- linux pypy
- macos pypy
features:
- Execute Python scripts directly from the command line
- Launch an interactive Python REPL environment
- Install Python packages using the built-in pip module
- Debug Python code using the integrated pdb debugger
- Run specific Python library modules as scripts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pypy

> Fast and compliant alternative implementation of the Python language.
> More information: <https://doc.pypy.org>.

- Start a REPL (interactive shell):

`pypy`

- Execute script in a given Python file:

`pypy {{path/to/file.py}}`

- Execute script as part of an interactive shell:

`pypy -i {{path/to/file.py}}`

- Execute a Python expression:

`pypy -c "{{expression}}"`

- Run library module as a script (terminates option list):

`pypy -m {{module}} {{arguments}}`

- Install a package using pip:

`pypy -m pip install {{package}}`

- Interactively debug a Python script:

`pypy -m pdb {{path/to/file.py}}`
