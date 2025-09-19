---
title: "Remove Unused Python Imports - Autoflake | Online Free DevTools by Hexmos"
name: autoflake
path: /freedevtools/tldr/common/autoflake
canonical: "https://hexmos.com/freedevtools/tldr/common/autoflake/"
description: "Remove unused Python imports and variables with Autoflake. Clean your code automatically and improve readability for easier maintenance. Free online tool, no registration required."
category: common
keywords:
- python import remover
- python unused variable cleaner
- autoflake python
- python code cleaner
- python linter autoflake
- autoflake cleanup
- python auto format
- remove unused imports python script
- python static analysis
- python refactoring
features:
- Removes unused imports from Python files
- Removes unused variables from Python files
- Applies changes in-place to files
- Operates recursively on directories
- Displays diffs of changes before applying
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# autoflake

> Remove unused imports and variables from Python code.
> More information: <https://github.com/myint/autoflake>.

- Remove unused variables from a single file and display the diff:

`autoflake --remove-unused-variables {{path/to/file.py}}`

- Remove unused imports from multiple files and display the diffs:

`autoflake --remove-all-unused-imports {{path/to/file1.py path/to/file2.py ...}}`

- Remove unused variables from a file, overwriting the file:

`autoflake --remove-unused-variables --in-place {{path/to/file.py}}`

- Remove unused variables recursively from all files in a directory, overwriting each file:

`autoflake --remove-unused-variables --in-place --recursive {{path/to/directory}}`
