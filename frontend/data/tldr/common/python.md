---
title: "Execute Python Scripts - Interpret Code | Online Free DevTools by Hexmos"
name: python
path: "/freedevtools/tldr/common/python/"
canonical: "https://hexmos.com/freedevtools/tldr/common/python/"
description: "Execute Python scripts quickly with Python interpreter. Run code, debug programs, and manage packages easily using command line. Free online tool, no registration required."
category: common
keywords:
- python script execution
- python code interpreter
- python command line
- python package installation
- python debugging tool
- python repl shell
- python module execution
- execute python expression
- python http server
- cross-platform python
features:
- Execute Python scripts from the command line
- Start an interactive Python REPL session
- Install Python packages using pip
- Debug Python scripts with the pdb module
- Run Python modules as scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# python

> Python language interpreter.
> More information: <https://docs.python.org/using/cmdline.html>.

- Start a REPL (interactive shell):

`python`

- Execute a specific Python file:

`python {{path/to/file.py}}`

- Execute a specific Python file and start a REPL:

`python -i {{path/to/file.py}}`

- Execute a Python expression:

`python -c "{{expression}}"`

- Run the script of the specified library module:

`python -m {{module}} {{arguments}}`

- Install a package using `pip`:

`python -m pip install {{package}}`

- Interactively debug a Python script:

`python -m pdb {{path/to/file.py}}`

- Start the built-in HTTP server on port 8000 in the current directory:

`python -m http.server`
