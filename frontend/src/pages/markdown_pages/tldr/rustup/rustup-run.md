---
title: "Rust Toolchain Run - Execute Commands | Online Free DevTools by Hexmos"
name: rustup-run
path: /freedevtools/tldr/rustup/rustup-run
canonical: "https://hexmos.com/freedevtools/tldr/rustup/rustup-run/"
description: "Execute commands with Rust toolchains using Rustup Run. Manage Rust versions and build environments instantly using command line tools. Free online tool, no registration required."
category: common
keywords:
- rust command execution
- rust toolchain manager
- rust version control
- cargo rust build tool
- linux rust environment
- macos rust toolchain
- windows rust compiler
- rustup toolchain run
- rust version manager
- rust environment configuration
features:
- Execute commands within a specific Rust toolchain environment
- Manage multiple Rust versions and switch between them
- Configure environment variables for different toolchains
- Automate build processes for specific Rust versions
- Run commands using the specified Rust version
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rustup run

> Run a command with an environment configured for a Rust toolchain.
> Note: All commands managed by `rustup` have a shorthand for this: for example, `cargo +nightly build` is equivalent to `rustup run nightly cargo build`.
> More information: <https://rust-lang.github.io/rustup>.

- Run a command using a given Rust toolchain (see `rustup help toolchain` for more information):

`rustup run {{toolchain}} {{command}}`
