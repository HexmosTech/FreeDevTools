---
title: "Validate Python Code - Flake8 Code Linter | Online Free DevTools by Hexmos"
name: flake8
path: /freedevtools/tldr/common/flake8
canonical: "https://hexmos.com/freedevtools/tldr/common/flake8/"
description: "Validate Python code style with Flake8. Ensure code quality and consistency effortlessly using command-line options. Free online tool, no registration required."
category: common
keywords:
- python code linter
- flake8 code quality
- python style checker
- code linting python
- flake8 rules
- python code validation
- flake8 linting tool
- python static analysis
- command line linting
- python coding standards
features:
- Lint Python files and directories recursively
- Show the exact line where errors occur
- Ignore specific linting rules
- Exclude files based on globs or substrings
- Check code against PEP 8 standards
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flake8

> Check the style and quality of Python code.
> More information: <https://flake8.pycqa.org/en/latest/user/options.html>.

- Lint a file or directory recursively:

`flake8 {{path/to/file_or_directory}}`

- Lint a file or directory recursively and show the line on which each error occurred:

`flake8 --show-source {{path/to/file_or_directory}}`

- Lint a file or directory recursively and ignore a list of rules. (All available rules can be found at <https://www.flake8rules.com/>):

`flake8 --ignore {{rule1,rule2,...}} {{path/to/file_or_directory}}`

- Lint a file or directory recursively but exclude files matching the given globs or substrings:

`flake8 --exclude {{substring1,glob2}} {{path/to/file_or_directory}}`
