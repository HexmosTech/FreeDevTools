---
title: "Mypy - Type Check Python Code | Online Free DevTools by Hexmos"
name: mypy
path: "/freedevtools/tldr/common/mypy/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mypy/"
description: "Type check Python code with Mypy. Improve code quality and catch errors early with static type analysis. Free online tool, no registration required."
category: common
keywords:
- python type checker
- mypy type hints
- static type analysis python
- python code analysis
- mypy command line
- type checking python code
- python static analysis tool
- mypy configuration
- python type annotations
- mypy ignore missing imports
features:
- Type check Python files
- Type check Python modules
- Type check Python packages
- Ignore missing imports in Python code
- Specify custom configuration files for type checking
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mypy

> Type check Python code.
> More information: <https://mypy.readthedocs.io/en/stable/running_mypy.html>.

- Type check a specific file:

`mypy {{path/to/file.py}}`

- Type check a specific module:

`mypy {{[-m|--module]}} {{module_name}}`

- Type check a specific package:

`mypy {{[-p|--package]}} {{package_name}}`

- Type check a string of code:

`mypy {{[-c|--command]}} "{{code}}"`

- Ignore missing imports:

`mypy --ignore-missing-imports {{path/to/file_or_directory}}`

- Show detailed error messages:

`mypy {{[--tb|--show-traceback]}} {{path/to/file_or_directory}}`

- Specify a custom configuration file:

`mypy --config-file {{path/to/config_file}}`

- Display help:

`mypy {{[-h|--help]}}`
