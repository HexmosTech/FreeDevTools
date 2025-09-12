---
title: "Rust Toolchain Manager - Manage Rust Versions | Free DevTools"
name: rustup
path: /freedevtools/tldr/common/rustup
canonical: "https://hexmos.com/freedevtools/tldr/common/rustup/"
description: "Manage Rust toolchains with Rustup. Install, update, and switch between different Rust versions for your projects. Free online tool, no registration required."
category: common
keywords:
- rust toolchain manager
- rust version manager
- rust compiler manager
- rust nightly install
- rust stable install
- rust update toolchain
- rust multi-version
- rust environment manager
- rust cross-compilation
- rust project toolchain
features:
- Install specific Rust toolchains (stable, beta, nightly)
- Update installed Rust toolchains to the latest versions
- Switch the default Rust toolchain for global use
- Override the default Rust toolchain for specific projects
- Run commands with a specified Rust toolchain version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustup

> Install, manage, and update Rust toolchains.
> Some subcommands, such as `toolchain`, `target`, `update`, etc. have their own usage documentation.
> More information: <https://rust-lang.github.io/rustup>.

- Install the nightly toolchain for your system:

`rustup install nightly`

- Switch the default toolchain to nightly so that the `cargo` and `rustc` commands will use it:

`rustup default nightly`

- Use the nightly toolchain when inside the current project but leave global settings unchanged:

`rustup override set nightly`

- Update all toolchains:

`rustup update`

- List installed toolchains:

`rustup show`

- Run `cargo build` with a certain toolchain:

`rustup run {{toolchain}} cargo build`

- Open the local Rust documentation in the default web browser:

`rustup doc`
