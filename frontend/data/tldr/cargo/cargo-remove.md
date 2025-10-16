---
title: "Remove Cargo Dependencies - Manage Rust Crates | Online Free DevTools by Hexmos"
name: cargo-remove
path: "/freedevtools/tldr/cargo/cargo-remove/"
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-remove/"
description: "Remove Cargo dependencies effortlessly with Cargo Remove. Clean up your Rust projects by removing unused crates and manage your Cargo.toml. Free online tool, no registration required."
category: common
keywords:
- rust crate removal
- cargo dependency management
- cargo remove command
- rust package removal
- cargo toml editor
- rust dependency cleaner
- rust crate uninstaller
- cargo crate manager
- cargo build dependency
- cargo development dependency
features:
- Remove specified dependencies from Cargo.toml
- Remove development dependencies using `--dev` flag
- Remove build dependencies using `--build` flag
- Remove dependencies for specific target platforms with `--target`
- Update Cargo.toml manifest file automatically
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo remove

> Remove dependencies from a Rust project's `Cargo.toml` manifest.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-remove.html>.

- Remove a dependency from the current project:

`cargo remove {{dependency}}`

- Remove a development or build dependency:

`cargo remove --{{dev|build}} {{dependency}}`

- Remove a dependency of the given target platform:

`cargo remove --target {{target}} {{dependency}}`
