---
title: "Sui Move - Create and Build Move Projects | Free DevTools"
name: sui-move
path: /freedevtools/tldr/common/sui-move
canonical: "https://hexmos.com/freedevtools/tldr/common/sui-move/"
description: "Create Move projects instantly with Sui Move. Build, test, migrate and manage your Sui Move projects using the CLI. Free online tool, no registration required."
category: common
keywords:
- Sui Move project creation
- Sui Move build tool
- Sui Move testing
- Sui Move coverage analysis
- Sui Move migration
- Sui Move 2024 migration
- Sui Move command line
- Sui Move development
- Sui Move package manager
- Sui Move module coverage
features:
- Create new Sui Move projects
- Build Sui Move packages
- Test Sui Move code with coverage reporting
- Migrate Sui Move packages to the latest version
- Analyze Sui Move code coverage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sui move

> Work with Move source code.
> More information: <https://docs.sui.io/references/cli/move>.

- Create a new Move project in the given folder:

`sui move new {{project_name}}`

- Test the Move project in the current directory:

`sui move test`

- Test with coverage and get a summary:

`sui move test --coverage; sui move coverage summary`

- Find which parts of your code are covered from tests (i.e. explain coverage results):

`sui move coverage source --module {{module_name}}`

- Build the Move project in the current directory:

`sui move build`

- Build the Move project from the given path:

`sui move build --path {{path}}`

- Migrate to Move 2024 for the package at the provided path:

`sui move migrate {{path}}`
