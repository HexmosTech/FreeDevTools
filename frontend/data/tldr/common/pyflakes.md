---
title: "Pyflakes - Validate Python Code | Online Free DevTools by Hexmos"
name: pyflakes
path: "/freedevtools/tldr/common/pyflakes/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pyflakes/"
description: "Validate Python code with Pyflakes. Find errors and potential problems in your Python source files. Free online tool, no registration required."
category: common
keywords:
- python code validation
- pyflakes linter
- python syntax check
- python error detection
- python static analysis
- python code quality
- python code analyzer
- pyflakes command line
- python file checker
- code analysis tool
features:
- Check single Python files for errors
- Check entire directories for Python errors
- Recursively check Python code within directories
- Analyze multiple directories simultaneously
- Identify syntax errors and potential issues
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pyflakes

> Checks Python source code files for errors.
> More information: <https://pypi.org/project/pyflakes>.

- Check a single Python file:

`pyflakes check {{path/to/file.py}}`

- Check Python files in a specific directory:

`pyflakes checkPath {{path/to/directory}}`

- Check Python files in a directory recursively:

`pyflakes checkRecursive {{path/to/directory}}`

- Check all Python files found in multiple directories:

`pyflakes iterSourceCode {{path/to/directory_1}} {{path/to/directory_2}}`
