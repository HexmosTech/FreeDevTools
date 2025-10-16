---
title: "Format Python Code - autopep8 | Online Free DevTools by Hexmos"
name: autopep8
path: "/freedevtools/tldr/common/autopep8/"
canonical: "https://hexmos.com/freedevtools/tldr/common/autopep8/"
description: "Format Python code automatically with autopep8. Ensure PEP 8 compliance and improve code readability using command line. Free online tool, no registration required."
category: common
keywords:
- python code formatter
- pep8 code formatting
- autopep8 python
- python code style guide
- autopep8 command line
- python formatting tools
- automated python linting
- python style checker
- python autoformatter
- python pep8 compliance
features:
- Format Python code to PEP 8 standards
- Automatically correct code style violations
- Generate diffs of code changes
- Format files in-place with modifications
- Recursively format entire directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# autopep8

> Format Python code according to the PEP 8 style guide.
> More information: <https://github.com/hhatto/autopep8>.

- Format a file to `stdout`, with a custom maximum line length:

`autopep8 {{path/to/file.py}} --max-line-length {{length}}`

- Format a file, displaying a diff of the changes:

`autopep8 --diff {{path/to/file}}`

- Format a file in-place and save the changes:

`autopep8 --in-place {{path/to/file.py}}`

- Recursively format all files in a directory in-place and save changes:

`autopep8 --in-place --recursive {{path/to/directory}}`
