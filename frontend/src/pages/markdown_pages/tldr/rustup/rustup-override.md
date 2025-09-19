---
title: "Rustup Override - Manage Toolchains | Online Free DevTools by Hexmos"
name: rustup-override
path: /freedevtools/tldr/rustup/rustup-override
canonical: "https://hexmos.com/freedevtools/tldr/rustup/rustup-override/"
description: "Manage Rust toolchains with Rustup Override. Control toolchain versions for specific directories to ensure consistent builds. Free online tool, no registration required."
category: common
keywords:
- rust toolchain manager
- rustup override command
- rust version control
- rust directory toolchain
- rustup version override
- rust multi-version support
- rust stable channel
- rust nightly channel
- rust beta channel
- rust cross-compilation
features:
- List directory toolchain overrides
- Set toolchain override for the current directory
- Remove toolchain override for the current directory
- Remove toolchain overrides for nonexistent directories
- Configure rust versions per project
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustup override

> Modify directory toolchain overrides.
> See `rustup help toolchain` for more information about toolchains.
> More information: <https://rust-lang.github.io/rustup>.

- List directiory toolchain overrides:

`rustup override list`

- Set the override toolchain for the current directory (i.e. tell `rustup` to run `cargo`, `rustc`, etc. from a specific toolchain when in that directory):

`rustup override set {{toolchain}}`

- Remove the toolchain override for the current directory:

`rustup override unset`

- Remove all toolchain overrides for directories that no longer exist:

`rustup override unset --nonexistent`
