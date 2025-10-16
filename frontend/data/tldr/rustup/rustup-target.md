---
title: "Rustup Target - Modify Rust Toolchain Targets | Online Free DevTools by Hexmos"
name: rustup-target
path: "/freedevtools/tldr/rustup/rustup-target/"
canonical: "https://hexmos.com/freedevtools/tldr/rustup/rustup-target/"
description: "Modify Rust toolchain targets instantly with Rustup Target. Add, remove, and list targets to customize your Rust development environment. Free online tool, no registration required."
category: common
keywords:
- rustup target add
- rustup target remove
- rustup target list
- rust toolchain manager
- rust cross-compilation
- rust platform target
- rust development environment
- rust multi-platform build
- rustup platform support
- rust supported targets
features:
- Add new targets to a specific Rust toolchain
- Remove existing targets from a Rust toolchain
- List available targets for a Rust toolchain
- List installed targets for a specific Rust toolchain
- Manage target platforms for Rust development
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rustup target

> Modify a toolchain's supported targets.
> Without the `--toolchain` option `rustup` will use the default toolchain. See `rustup help toolchain` for more information about toolchains.
> More information: <https://rust-lang.github.io/rustup>.

- Add a target to a toolchain:

`rustup target add --toolchain {{toolchain}} {{target}}`

- Remove a target from a toolchain:

`rustup target remove --toolchain {{toolchain}} {{target}}`

- List available and installed targets for a toolchain:

`rustup target list --toolchain {{toolchain}}`

- List installed targets for a toolchain:

`rustup target list --toolchain {{toolchain}} --installed`
