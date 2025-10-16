---
title: "PNPM Outdated - Check Package Updates | Online Free DevTools by Hexmos"
name: pnpm-outdated
path: "/freedevtools/tldr/pnpm/pnpm-outdated/"
canonical: "https://hexmos.com/freedevtools/tldr/pnpm/pnpm-outdated/"
description: "Check PNPM package updates with PNPM Outdated. Identify and manage outdated dependencies in your project. Free online tool, no registration required."
category: common
keywords:
- PNPM package updates
- PNPM dependency checker
- Outdated package finder
- Package version manager
- PNPM outdated command
- Node package update
- Dependency management tool
- Software update checker
- JavaScript dependency update
- PNPM global outdated
features:
- Checks for outdated packages in a PNPM project.
- Filters outdated packages using package selectors.
- Lists outdated packages globally.
- Prints details of outdated packages in a specific format.
- Checks only outdated dev dependencies.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnpm outdated

> Check for outdated packages.
> The check can be limited to a subset of the installed packages by providing arguments (patterns are supported).
> More information: <https://pnpm.io/cli/outdated>.

- Check for outdated packages:

`pnpm outdated`

- Check for outdated dependencies found in every workspace package:

`pnpm outdated {{[-r|--recursive]}}`

- Filter outdated packages using a package selector:

`pnpm outdated --filter {{package_selector}}`

- List outdated packages globally:

`pnpm outdated {{[-g|--global]}}`

- Print details of outdated packages:

`pnpm outdated --long`

- Print outdated dependencies in a specific format:

`pnpm outdated --format {{format}}`

- Print only versions that satisfy specifications in `package.json`:

`pnpm outdated --compatible`

- Check only outdated dev dependencies:

`pnpm outdated {{[-D|--dev]}}`
