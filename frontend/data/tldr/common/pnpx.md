---
title: "PNPX Executor - Execute npm Binaries with pnpm | Online Free DevTools by Hexmos"
name: pnpx
path: "/freedevtools/tldr/common/pnpx/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pnpx/"
description: "Execute npm package binaries swiftly with PNpx Executor, leveraging pnpm for faster and more efficient execution. Free online tool, no registration required."
category: common
keywords:
- npm package executor
- pnpm binary executor
- node package runner
- command-line executor
- npm command runner
- pnpm command runner
- node binary execution
- package binary launcher
- npm package invoker
- pnpm package invoker
features:
- Execute binaries directly from npm packages using pnpm
- Specify a specific binary to execute within a package
- Run commands without globally installing npm packages
- Utilize pnpm's efficient package management for faster execution
- Access command help and usage information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnpx

> Directly execute binaries from npm packages, using `pnpm` instead of `npm`.
> Note: This command is deprecated! Use `pnpm exec` and `pnpm dlx` instead.
> More information: <https://cuyl.github.io/pnpm.github.io/pnpx-cli>.

- Execute the binary from a given `npm` module:

`pnpx {{module_name}}`

- Execute a specific binary from a given `npm` module, in case the module has multiple binaries:

`pnpx --package {{package_name}} {{module_name}}`

- Display help:

`pnpx --help`
