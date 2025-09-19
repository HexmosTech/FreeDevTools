---
title: "Format Python Code - YAPF Style Guide | Online Free DevTools by Hexmos"
name: yapf
path: /freedevtools/tldr/common/yapf
canonical: "https://hexmos.com/freedevtools/tldr/common/yapf/"
description: "Format Python code automatically with YAPF. Ensure consistent style and readability across your projects. Free online tool, no registration required."
category: common
keywords:
- python code formatter
- yapf python style guide
- python code style checker
- python auto formatter
- pep8 code formatter
- python code beautifier
- google yapf
- python code linter
- python formatting tool
- command line code formatter
features:
- Display code formatting diffs
- Recursively format directory contents
- Support pep8 code style
- Concurrently format multiple files
- Format code in place
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# yapf

> Python style guide checker.
> More information: <https://github.com/google/yapf>.

- Display a diff of the changes that would be made, without making them (dry-run):

`yapf {{[-d|--diff]}} {{path/to/file}}`

- Recursively format all Python files in a directory, concurrently:

`yapf {{[-ri|--recursive --in-place]}} --style {{pep8}} {{[-p|--parallel]}} {{path/to/directory}}`
