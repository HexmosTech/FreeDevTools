---
title: "Fetch Rust Dependencies - Manage Packages | Online Free DevTools by Hexmos"
name: cargo-fetch
path: /freedevtools/tldr/cargo/cargo-fetch
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-fetch/"
description: "Fetch Rust dependencies instantly with Cargo Fetch. Download packages and manage your Rust projects efficiently. Free online tool, no registration required."
category: common
keywords:
- rust dependencies fetch
- cargo package manager
- rust package download
- cargo offline build
- rust dependency resolver
- cargo target specific fetch
- rust package installer
- linux rust dependencies
- macos rust dependencies
- windows rust dependencies
features:
- Fetch dependencies from Cargo.lock
- Download packages for offline builds
- Support specific target architectures
- Manage Rust project dependencies
- Resolve and download required packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo fetch

> Fetch dependencies of a package from the network.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-fetch.html>.

- Fetch dependencies specified in `Cargo.lock` (for all targets):

`cargo fetch`

- Fetch dependencies for the specified target:

`cargo fetch --target {{target_triple}}`
