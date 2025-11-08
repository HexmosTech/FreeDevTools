---
title: "Validate Python Docstrings - Using pydocstyle | Online Free DevTools by Hexmos"
name: pydocstyle
path: "/freedevtools/tldr/common/pydocstyle/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pydocstyle/"
description: "Validate Python docstring conventions with pydocstyle. Ensure code documentation quality and consistency with this static analysis tool. Free online tool, no registration required."
category: common
keywords:
- Python docstring validation
- pydocstyle linter
- Python code quality
- Python style checker
- PEP 257 validation
- Python documentation standards
- Static analysis tool
- Command-line linter
- Python error checking
- Code convention compliance
features:
- Analyze Python scripts for docstring errors
- Explain error messages in detail
- Display the total number of docstring errors
- Ignore specific docstring errors
- Check for errors from a specific convention (PEP257, numpy, google)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pydocstyle

> Statically check Python scripts for compliance with Python docstring conventions.
> More information: <https://www.pydocstyle.org/en/latest/>.

- Analyze a Python script or all the Python scripts in a specific directory:

`pydocstyle {{file.py|path/to/directory}}`

- Show an explanation of each error:

`pydocstyle {{[-e|--explain]}} {{file.py|path/to/directory}}`

- Show debug information:

`pydocstyle {{[-d|--debug]}} {{file.py|path/to/directory}}`

- Display the total number of errors:

`pydocstyle --count {{file.py|path/to/directory}}`

- Use a specific configuration file:

`pydocstyle --config {{path/to/config_file}} {{file.py|path/to/directory}}`

- Ignore one or more errors:

`pydocstyle --ignore {{D101,D2,D107,...}} {{file.py|path/to/directory}}`

- Check for errors from a specific convention:

`pydocstyle --convention {{pep257|numpy|google}} {{file.py|path/to/directory}}`
