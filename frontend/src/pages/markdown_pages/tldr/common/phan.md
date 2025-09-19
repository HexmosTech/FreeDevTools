---
title: "Analyze PHP Code - Phan Static Analysis | Online Free DevTools by Hexmos"
name: phan
path: /freedevtools/tldr/common/phan
canonical: "https://hexmos.com/freedevtools/tldr/common/phan/"
description: "Analyze PHP code with Phan static analysis tool. Detect potential errors, improve code quality, and enforce coding standards. Free online tool, no registration required."
category: common
keywords:
- PHP static analysis
- Code analysis tool
- Phan code analyzer
- PHP code quality
- Static code analysis
- PHP error detection
- PHP code review
- PHP coding standards
- PHP code inspection
- PHP bug detection
features:
- Analyze PHP code for potential errors
- Generate configuration files for customized analysis
- Support for multiple output modes (text, json, html, etc.)
- Analyze code in specified directories
- Configure parallel processing for faster analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phan

> A static analysis tool for PHP.
> More information: <https://github.com/phan/phan>.

- Generate a `.phan/config.php` in the current directory:

`phan --init`

- Generate a Phan configuration file using a specific level (1 being strictest to 5 being the least strict):

`phan --init --init-level {{level}}`

- Analyze the current directory:

`phan`

- Analyze one or more directories:

`phan --directory {{path/to/directory}} --directory {{path/to/another_directory}}`

- Specify a configuration file (defaults to `.phan/config.php`):

`phan --config-file {{path/to/config.php}}`

- Specify the output mode:

`phan --output-mode {{text|verbose|json|csv|codeclimate|checkstyle|pylint|html}}`

- Specify the number of parallel processes:

`phan --processes {{number_of_processes}}`
