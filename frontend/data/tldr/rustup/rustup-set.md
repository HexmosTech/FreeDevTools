---
title: "Rustup Settings - Control Rust Installations | Online Free DevTools by Hexmos"
name: rustup-set
path: "/freedevtools/tldr/rustup/rustup-set/"
canonical: "https://hexmos.com/freedevtools/tldr/rustup/rustup-set/"
description: "Control rustup settings easily with Rustup-Set. Manage host triples, profiles, and auto-updates for Rust installations. Free online tool, no registration required."
category: common
keywords:
- rustup configuration
- rust installation manager
- rustup default host
- rustup profile setting
- rustup auto-update control
- rustup command line
- rustup settings management
- rust development environment
- rust toolchain manager
- rustup profile configure
features:
- Set the default host triple for rustup
- Configure the default profile (minimal or default)
- Enable or disable rustup auto-self-update
- Check for rustup updates only
- Modify rustup settings from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rustup set

> Alter `rustup` settings.
> More information: <https://rust-lang.github.io/rustup>.

- Set the default host triple:

`rustup set default-host {{host_triple}}`

- Set the default profile (`minimal` includes only `rustc`, `rust-std` and `cargo`, whereas `default` adds `rust-docs`, `rustfmt` and `clippy`):

`rustup set profile {{minimal|default}}`

- Set whether `rustup` should update itself when running `rustup update`:

`rustup set auto-self-update {{enable|disable|check-only}}`
