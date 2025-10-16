---
title: "Wapm Package Manager - Manage WebAssembly Packages | Online Free DevTools by Hexmos"
name: wapm
path: "/freedevtools/tldr/common/wapm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/wapm/"
description: "Manage WebAssembly packages efficiently with Wapm package manager. Install, uninstall, and list dependencies for streamlined development. Free online tool, no registration required."
category: common
keywords:
- WebAssembly package manager
- wapm package management
- wapm install packages
- wapm uninstall packages
- wapm dependency management
- wapm WebAssembly modules
- WebAssembly runtime
- wapm toml
- wapm global packages
- wapm command line
features:
- Initialize a new wapm.toml file interactively
- Install packages and manage dependencies
- Install packages globally for system-wide access
- Uninstall packages and remove dependencies
- Execute package commands using the Wasmer runtime
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wapm

> The WebAssembly package manager.
> More information: <https://wapm.io/help/reference>.

- Interactively create a new `wapm.toml` file:

`wapm init`

- Download all the packages listed as dependencies in `wapm.toml`:

`wapm install`

- Download a specific version of a package and add it to the list of dependencies in `wapm.toml`:

`wapm install {{package}}@{{version}}`

- Download a package and install it globally:

`wapm install --global {{package}}`

- Uninstall a package and remove it from the list of dependencies in `wapm.toml`:

`wapm uninstall {{package}}`

- Print a tree of locally installed dependencies:

`wapm list`

- List top-level globally installed packages:

`wapm list --global`

- Execute a package command using the Wasmer runtime:

`wapm run {{command_name}} {{arguments}}`
