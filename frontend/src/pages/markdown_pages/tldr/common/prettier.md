---
title: "Format Code with Prettier - JavaScript, CSS, YAML | Online Free DevTools by Hexmos"
name: prettier
path: /freedevtools/tldr/common/prettier
canonical: "https://hexmos.com/freedevtools/tldr/common/prettier/"
description: "Format code instantly with Prettier. Enhance code quality and maintain consistency across JavaScript, CSS, and YAML files. Free online tool, no registration required."
category: common
keywords:
- javascript formatter
- code formatting tool
- css formatter
- yaml formatter
- json formatter
- prettier cli
- code beautifier
- javascript code style
- automatic code formatting
- prettier code style
features:
- Format code files and output to stdout
- Check if code files are already formatted
- Format files recursively and replace the originals
- Use configuration files for customized formatting rules
- Format JavaScript, TypeScript, CSS, JSON, and YAML files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# prettier

> An opinionated code formatter for JavaScript, JSON, CSS, YAML, and more.
> More information: <https://prettier.io/docs/cli>.

- Format a file and print the result to `stdout`:

`prettier {{path/to/file}}`

- Check if a specific file has been formatted:

`prettier --check {{path/to/file}}`

- Run with a specific configuration file:

`prettier --config {{path/to/config_file}} {{path/to/file}}`

- Format a file or directory, replacing the original:

`prettier --write {{path/to/file_or_directory}}`

- Format files or directories recursively using single quotes and no trailing commas:

`prettier --single-quote --trailing-comma {{none}} --write {{path/to/file_or_directory}}`

- Format JavaScript and TypeScript files recursively, replacing the original:

`prettier --write "**/*.{js,jsx,ts,tsx}"`
