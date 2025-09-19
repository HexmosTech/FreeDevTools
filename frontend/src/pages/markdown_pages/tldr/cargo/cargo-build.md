---
title: "Cargo Build - Compile Rust Packages Easily | Online Free DevTools by Hexmos"
name: cargo-build
path: /freedevtools/tldr/cargo/cargo-build
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-build/"
description: "Compile Rust packages effortlessly with Cargo Build. Manage dependencies, optimize for release, and target specific binaries. Free online tool, no registration required."
category: common
keywords:
- rust package build
- cargo build command
- rust release build
- rust dependency management
- cargo workspace build
- rust binary compilation
- cargo test target build
- rust locked build
- rust command line
- rust package manager
features:
- Compile local Rust packages and dependencies
- Build Rust artifacts in release mode with optimizations
- Enforce Cargo.lock file consistency during builds
- Build all packages within a Rust workspace
- Target specific binaries or test targets for compilation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo build

> Compile a local package and all of its dependencies.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-build.html>.

- Build the package or packages defined by the `Cargo.toml` manifest file in the local path:

`cargo {{[b|build]}}`

- Build artifacts in release mode, with optimizations:

`cargo {{[b|build]}} {{[-r|--release]}}`

- Require that `Cargo.lock` is up to date:

`cargo {{[b|build]}} --locked`

- Build all packages in the workspace:

`cargo {{[b|build]}} --workspace`

- Build a specific package:

`cargo {{[b|build]}} {{[-p|--package]}} {{package}}`

- Build only the specified binary:

`cargo {{[b|build]}} --bin {{name}}`

- Build only the specified test target:

`cargo {{[b|build]}} --test {{test_name}}`
