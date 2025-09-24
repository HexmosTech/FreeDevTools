---
title: "Vendor Cargo Dependencies - Manage Rust Packages | Online Free DevTools by Hexmos"
name: cargo-vendor
path: /freedevtools/tldr/cargo/cargo-vendor
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-vendor/"
description: "Vendor Cargo dependencies quickly with Cargo Vendor. Isolate dependencies, ensure consistent builds, and manage package versions. Free online tool, no registration required."
category: common
keywords:
- Rust package vendor
- Cargo dependency management
- Rust offline build
- Cargo vendoring
- Cargo dependency isolation
- Rust package mirroring
- Cargo config toml
- Rust vendored sources
- Cargo build configuration
- Rust package download
features:
- Vendor all project dependencies to a directory
- Configure Cargo to use vendored sources
- Isolate project builds from external networks
- Manage specific dependency versions
- Ensure consistent builds across different environments
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo vendor

> Vendor all dependencies of a project into the specified directory (default: `vendor`).
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-vendor.html>.

- Vendor dependencies and configure `cargo` to use the vendored sources in the current project:

`cargo vendor {{path/to/directory}} > .cargo/config.toml`
