---
title: "Refactor PHP Code - Automate Updates with Rector | Online Free DevTools by Hexmos"
name: rector
path: /freedevtools/tldr/common/rector
canonical: "https://hexmos.com/freedevtools/tldr/common/rector/"
description: "Automate PHP code refactoring with Rector. Upgrade legacy PHP applications, enforce coding standards, and improve code quality effortlessly. Free online tool, no registration required."
category: common
keywords:
- PHP code refactoring
- Automated code update
- Rector PHP
- PHP upgrade tool
- PHP coding standards
- Legacy code migration
- PHP static analysis
- PHP refactoring tool
- PHP 7 upgrade
- PHP 8 upgrade
features:
- Automates PHP code upgrades from older versions
- Enforces consistent coding standards across projects
- Detects and fixes common code smells
- Simplifies complex code refactoring tasks
- Provides dry-run mode to preview changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rector

> An automated tool for updating and refactoring PHP 5.3+ code.
> More information: <https://github.com/rectorphp/rector>.

- Process a specific directory:

`rector process {{path/to/directory}}`

- Process a directory without applying changes (dry run):

`rector process {{path/to/directory}} --dry-run`

- Process a directory and apply coding standards:

`rector process {{path/to/directory}} --with-style`

- Display a list of available levels:

`rector levels`

- Process a directory with a specific level:

`rector process {{path/to/directory}} --level {{level_name}}`
