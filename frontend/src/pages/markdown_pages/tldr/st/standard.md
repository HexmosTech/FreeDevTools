---
title: "Standard Lint - Validate JavaScript Code Style | Free DevTools"
name: standard
path: /freedevtools/tldr/st/standard
canonical: "https://hexmos.com/freedevtools/tldr/st/standard/"
description: "Validate JavaScript code style with Standard Linter. Automatically fix code inconsistencies and maintain code quality using command line. Free online tool, no registration required."
category: common
keywords:
- javascript linting
- javascript standard style
- code style validation
- javascript code fixer
- eslint configuration
- javascript best practices
- javascript code analysis
- command line linter
- standardjs
- javascript style guide
features:
- Lints JavaScript code based on Standard Style guidelines.
- Automatically fixes common style issues and inconsistencies.
- Allows declaration of global variables to avoid linting errors.
- Supports custom ESLint plugins for extended functionality.
- Enables custom JavaScript parser usage for different code dialects.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# standard

> The JavaScript Standard Style tool for linting and fixing JavaScript code.
> More information: <https://standardjs.com>.

- Lint all JavaScript source files in the current directory:

`standard`

- Lint specific JavaScript file(s):

`standard {{path/to/file1 path/to/file2 ...}}`

- Apply automatic fixes during linting:

`standard --fix`

- Declare any available global variables:

`standard --global {{variable}}`

- Use a custom ESLint plugin when linting:

`standard --plugin {{plugin}}`

- Use a custom JS parser when linting:

`standard --parser {{parser}}`

- Use a custom ESLint environment when linting:

`standard --env {{environment}}`
