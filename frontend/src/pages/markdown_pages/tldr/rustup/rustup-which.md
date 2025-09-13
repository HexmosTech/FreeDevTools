---
title: "Rustup Which - Locate Rust Binaries | Free DevTools"
name: rustup-which
path: /freedevtools/tldr/rustup/rustup-which
canonical: "https://hexmos.com/freedevtools/tldr/rustup/rustup-which/"
description: "Locate Rust binaries quickly with Rustup Which. Find the path of executables managed by Rustup in different toolchains. Free online tool, no registration required."
category: common
keywords:
- rustup which
- rust binary path
- rust toolchain location
- rust executable finder
- rust environment variables
- rust command lookup
- rust development tools
- cargo toolchain
- rustup command-line
- rust compiler path
features:
- Locate Rust binaries within a specified toolchain.
- Determine the exact path of Rust executables.
- Identify the Rust toolchain used for a specific command.
- Integrate with Rustup for managing Rust versions.
- Resolve binary paths in the default Rust toolchain.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustup which

> Display which binary will be run for a command managed by `rustup`.
> Like `which`, but searches a Rust toolchain instead of `$PATH`.
> More information: <https://rust-lang.github.io/rustup>.

- Display the path to the binary in the default toolchain:

`rustup which {{command}}`

- Display the path to the binary in the specified toolchain (see `rustup help toolchain` for more information):

`rustup which --toolchain {{toolchain}} {{command}}`
