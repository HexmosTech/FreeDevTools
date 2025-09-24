---
title: "Rubocop - Lint Ruby Code | Online Free DevTools by Hexmos"
name: rubocop
path: /freedevtools/tldr/common/rubocop
canonical: "https://hexmos.com/freedevtools/tldr/common/rubocop/"
description: "Lint Ruby code effortlessly with Rubocop. Analyze code quality, enforce coding standards, and automatically correct style issues. Free online tool, no registration required."
category: common
keywords:
- Ruby code linter
- Ruby code style checker
- Ruby static analysis
- Ruby code quality tool
- Ruby coding standards
- Rubocop Ruby linting
- Ruby code formatter
- Ruby auto-correction
- Code linting command line
- Code analysis tool
features:
- Analyze Ruby code for style violations
- Enforce consistent coding standards
- Automatically correct code style issues
- Integrate with editors and CI systems
- Customize linting rules and configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rubocop

> Lint Ruby files.
> More information: <https://docs.rubocop.org/rubocop/usage/basic_usage.html>.

- Check all files in the current directory (including subdirectories):

`rubocop`

- Check one or more specific files or directories:

`rubocop {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Write output to file:

`rubocop --out {{path/to/file}}`

- View list of cops (linter rules):

`rubocop --show-cops`

- Exclude a cop:

`rubocop --except {{cop1 cop2 ...}}`

- Run only specified cops:

`rubocop --only {{cop1 cop2 ...}}`

- Auto-correct files (experimental):

`rubocop --auto-correct`
