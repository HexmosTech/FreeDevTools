---
title: "Rust Toolchain Installer - Install Rust with rustup | Online Free DevTools by Hexmos"
name: rustup-init.sh
path: /freedevtools/tldr/rustup/rustup-init.sh
canonical: "https://hexmos.com/freedevtools/tldr/rustup/rustup-init.sh/"
description: "Install Rust toolchains easily with rustup-init. Manage Rust versions, components, and targets. Quick rustup installer. Free online tool, no registration required."
category: common
keywords:
- rust installer
- rust toolchain manager
- rust version manager
- rustup install script
- rust component installer
- cross-compilation rust
- rust target specification
- rust environment configuration
- rustup command line
- rustup installation profile
features:
- Installs Rust toolchain using rustup.
- Configures default Rust toolchain.
- Installs specific components and targets.
- Supports installation profiles (minimal, default, complete).
- Enables unattended installation with confirmation bypass.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustup-init.sh

> Script to install `rustup` and the Rust toolchain.
> More information: <https://forge.rust-lang.org/infra/other-installation-methods.html#rustup>.

- Download and run `rustup-init` to install `rustup` and the default Rust toolchain:

`curl https://sh.rustup.rs -sSf | sh -s`

- Download and run `rustup-init` and pass arguments to it:

`curl https://sh.rustup.rs -sSf | sh -s -- {{arguments}}`

- Run `rustup-init` and specify additional components or targets to install:

`rustup-init.sh --target {{target}} --component {{component}}`

- Run `rustup-init` and specify the default toolchain to install:

`rustup-init.sh --default-toolchain {{toolchain}}`

- Run `rustup-init` and do not install any toolchain:

`rustup-init.sh --default-toolchain {{none}}`

- Run `rustup-init` and specify an installation profile:

`rustup-init.sh --profile {{minimal|default|complete}}`

- Run `rustup-init` without asking for confirmation:

`rustup-init.sh -y`
