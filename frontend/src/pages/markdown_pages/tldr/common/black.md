---
title: "Format Python Code - Black Formatter | Online Free DevTools by Hexmos"
name: black
path: /freedevtools/tldr/common/black
canonical: "https://hexmos.com/freedevtools/tldr/common/black/"
description: "Format Python code efficiently with Black, the uncompromising code formatter. Ensure consistent style and improve code readability. Free online tool, no registration required."
category: common
keywords:
- python code formatter
- black python formatter
- auto format python
- python style guide
- python linting
- code style checker
- code formatting tool
- black command line
- consistent code style
- python code beautifier
features:
- Auto-formats Python files and directories.
- Formats code from a string input.
- Checks for formatting changes without applying them.
- Displays a diff of proposed formatting changes.
- Silently formats, emitting only error messages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# black

> Format Python code automatically.
> More information: <https://black.readthedocs.io/en/stable/usage_and_configuration/the_basics.html>.

- Auto-format a file or entire directory:

`black {{path/to/file_or_directory}}`

- Format the code passed in as a string:

`black {{[-c|--code]}} "{{code}}"`

- Show whether a file or a directory would have changes made to them if they were to be formatted:

`black --check {{path/to/file_or_directory}}`

- Show changes that would be made to a file or a directory without performing them (dry-run):

`black --diff {{path/to/file_or_directory}}`

- Auto-format a file or directory, emitting exclusively error messages to `stderr`:

`black {{[-q|--quiet]}} {{path/to/file_or_directory}}`

- Auto-format a file or directory without replacing single quotes with double quotes (adoption helper, avoid using this for new projects):

`black {{[-S|--skip-string-normalization]}} {{path/to/file_or_directory}}`
