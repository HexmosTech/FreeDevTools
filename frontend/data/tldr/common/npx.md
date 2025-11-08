---
title: "Execute NPM Packages - Run Commands with NPX | Online Free DevTools by Hexmos"
name: npx
path: "/freedevtools/tldr/common/npx/"
canonical: "https://hexmos.com/freedevtools/tldr/common/npx/"
description: "Execute NPM packages instantly with NPX. Run commands, specify packages, and suppress output using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- NPM package runner
- Node package executor
- NPX command execution
- Execute command line packages
- NPM command runner
- Javascript package execution
- NPM package manager
- NodeJS package execution
- NPX linux
- NPX macos
features:
- Execute commands from local or remote NPM packages.
- Explicitly specify the package to execute a command from.
- Run a command if it exists in the current path or node_modules/.bin.
- Suppress any output from NPX itself during command execution.
- Execute commands without installing the package globally.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npx

> Execute binaries from `npm` packages.
> More information: <https://github.com/npm/npx>.

- Execute the command from a local or remote `npm` package:

`npx {{command}} {{argument1 argument2 ...}}`

- In case multiple commands with the same name exist, it is possible to explicitly specify the package:

`npx --package {{package}} {{command}}`

- Run a command if it exists in the current path or in `node_modules/.bin`:

`npx --no-install {{command}} {{argument1 argument2 ...}}`

- Execute a specific command suppressing any output from `npx` itself:

`npx --quiet {{command}} {{argument1 argument2 ...}}`

- Display help:

`npx --help`
