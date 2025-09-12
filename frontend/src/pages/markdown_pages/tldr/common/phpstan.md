---
title: "PHP Static Analysis - Discover Bugs with PHPStan | Free DevTools"
name: phpstan
path: /freedevtools/tldr/common/phpstan
canonical: "https://hexmos.com/freedevtools/tldr/common/phpstan/"
description: "Discover PHP bugs with PHPStan static analysis tool. Analyze code, find errors and improve code quality. Free online tool, no registration required."
category: common
keywords:
- PHP static analysis
- PHP code analysis
- PHP bug detection
- PHP code quality
- PHP code review
- PHP code verification
- PHP linter
- PHPStan analysis
- static analysis tool
- code quality checker
features:
- Analyze PHP code for potential errors
- Detect bugs without executing the code
- Enforce coding standards and best practices
- Integrate with existing development workflows
- Customize analysis rules with configuration files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# phpstan

> A PHP static analysis tool to discover bugs in code.
> More information: <https://phpstan.org/user-guide/command-line-usage>.

- Analyze one or more directories:

`phpstan analyse {{path/to/directory1 path/to/directory2 ...}}`

- Analyze a directory using a configuration file:

`phpstan analyse {{path/to/directory}} {{[-c|--configuration]}} {{path/to/config}}`

- Analyze using a specific rule level (0-10, higher is stricter):

`phpstan analyse {{path/to/directory}} {{[-l|--level]}} {{level}}`

- Specify an autoload file to load before analyzing:

`phpstan analyse {{path/to/directory}} {{[-a|--autoload-file]}} {{path/to/autoload_file}}`

- Specify a memory limit during analysis:

`phpstan analyse {{path/to/directory}} --memory-limit {{memory_limit}}`

- Display available options for analysis:

`phpstan analyse --help`
