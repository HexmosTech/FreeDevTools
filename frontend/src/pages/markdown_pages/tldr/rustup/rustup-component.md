---
title: "Rust Component Manager - Control Toolchain Components | Free DevTools"
name: rustup-component
path: /freedevtools/tldr/common/rustup-component
canonical: "https://hexmos.com/freedevtools/tldr/common/rustup-component/"
description: "Control Rust toolchain components with Rustup Component Manager. Add, remove, and list components for specific toolchains. Free online tool, no registration required."
category: common
keywords:
- rust component manager
- rustup component add
- rustup component remove
- rustup component list
- rust toolchain management
- rust development environment
- rust programming language
- rust dependency management
- rust compiler components
- rust standard library components
features:
- Add components to a specified Rust toolchain
- Remove components from a specified Rust toolchain
- List installed and available components for a toolchain
- List only installed components for a toolchain
- Manage the Rust development environment through component modification
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustup component

> Modify a toolchain's installed components.
> Without the `--toolchain` option `rustup` will use the default toolchain. See `rustup help toolchain` for more information about toolchains.
> More information: <https://rust-lang.github.io/rustup>.

- Add a component to a toolchain:

`rustup component add --toolchain {{toolchain}} {{component}}`

- Remove a component from a toolchain:

`rustup component remove --toolchain {{toolchain}} {{component}}`

- List installed and available components for a toolchain:

`rustup component list --toolchain {{toolchain}}`

- List installed components for a toolchain:

`rustup component list --toolchain {{toolchain}} --installed`
