---
title: "Ruff Format - Format Python Code | Free DevTools"
name: ruff-format
path: /freedevtools/tldr/common/ruff-format
canonical: "https://hexmos.com/freedevtools/tldr/common/ruff-format/"
description: "Format Python code with Ruff Format. Quickly reformat files or check for formatting issues.  Free online tool, no registration required."
category: common
keywords:
- python code formatter
- ruff formatter
- python formatting
- linting tool
- code style guide
- pep8 compliance
- ruff linter
- code beautifier
- command line formatter
- python auto formatter
features:
- Format Python files in-place
- Check for formatting changes without applying them
- Display a diff of changes that would be made
- Reformat code to adhere to style conventions
- Integrate with command-line workflows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ruff format

> An extremely fast Python code formatter.
> If no files or directories are specified, the current working directory is used by default.
> More information: <https://docs.astral.sh/ruff/formatter>.

- Format given files or directories in-place:

`ruff format {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Print which files would have been modified and return a non-zero exit code if there are files to reformat, and zero otherwise:

`ruff format --check`

- Print what changes would be made without modifying the files:

`ruff format --diff`
