---
title: "Rust Toolchain Manager - Control Rust Versions | Online Free DevTools by Hexmos"
name: rustup-toolchain
path: /freedevtools/tldr/rustup/rustup-toolchain
canonical: "https://hexmos.com/freedevtools/tldr/rustup/rustup-toolchain/"
description: "Control Rust toolchains with Rust Toolchain Manager. Install, uninstall, and list Rust versions using command line. Free online tool, no registration required."
category: common
keywords:
- rust toolchain manager
- rust version management
- rustup toolchain install
- rustup toolchain uninstall
- rust programming language
- rust compiler versions
- cross-compilation toolchain
- rust stable toolchain
- rust nightly toolchain
- rust beta toolchain
features:
- Install specific Rust toolchains
- Uninstall existing Rust toolchains
- List all installed Rust toolchains
- Create custom toolchains via symlinking
- Manage multiple Rust versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustup toolchain

> Manage Rust toolchains.
> See `rustup help toolchain` for more information about toolchains.
> More information: <https://rust-lang.github.io/rustup>.

- Install or update a given toolchain:

`rustup toolchain install {{toolchain}}`

- Uninstall a toolchain:

`rustup toolchain uninstall {{toolchain}}`

- List installed toolchains:

`rustup toolchain list`

- Create a custom toolchain by symlinking to a directory:

`rustup toolchain link {{custom_toolchain_name}} {{path/to/directory}}`
