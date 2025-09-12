---
title: "Validate Python Code - Pylint Code Linter | Free DevTools"
name: pylint
path: /freedevtools/tldr/common/pylint
canonical: "https://hexmos.com/freedevtools/tldr/common/pylint/"
description: "Validate Python code with Pylint, a powerful code linter. Improve code quality and catch errors early. Free online tool, no registration required."
category: common
keywords:
- Python code linting
- Python static analysis
- Python code style check
- Python code quality
- Python error detection
- Python bug finder
- Pylint configuration
- Pylint command line
- Pylint disable errors
- Pylint code metrics
features:
- Check Python code for errors and potential problems
- Enforce coding style standards
- Disable specific error codes
- Use custom configuration files
- Analyze code quality metrics
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pylint

> A Python code linter.
> More information: <https://pylint.pycqa.org/en/latest/>.

- Show lint errors in a file:

`pylint {{path/to/file.py}}`

- Lint a package or module (must be importable; no `.py` suffix):

`pylint {{package_or_module}}`

- Lint a package from a directory path (must contain an `__init__.py` file):

`pylint {{path/to/directory}}`

- Lint a file and use a configuration file (usually named `pylintrc`):

`pylint --rcfile {{path/to/pylintrc}} {{path/to/file.py}}`

- Lint a file and disable a specific error code:

`pylint --disable {{C,W,no-error,design}} {{path/to/file}}`
