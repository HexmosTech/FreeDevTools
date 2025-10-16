---
title: "Cargo Rustc - Compile Rust Packages | Online Free DevTools by Hexmos"
name: cargo-rustc
path: "/freedevtools/tldr/cargo/cargo-rustc/"
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-rustc/"
description: "Compile Rust packages efficiently with Cargo Rustc. Customize build options and optimize for size or speed. Free online tool, no registration required."
category: common
keywords:
- rust package compiler
- cargo build options
- rustc flags
- rust optimization tool
- rust release build
- rust unsafe code check
- rust target cpu native
- rust opt level control
- rust size optimization
- rust binary build
features:
- Compile Rust packages with custom rustc options.
- Optimize Rust builds for release mode.
- Compile Rust code with architecture-specific optimizations.
- Enable size or speed optimizations for Rust projects.
- Check Rust packages for unsafe code usage.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo rustc

> Compile a Rust package. Similar to `cargo build`, but you can pass extra options to the compiler.
> See `rustc --help` for all available options.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-rustc.html>.

- Build the package and pass options to `rustc`:

`cargo rustc -- {{rustc_options}}`

- Build artifacts in release mode, with optimizations:

`cargo rustc {{[-r|--release]}}`

- Compile with architecture-specific optimizations for the current CPU:

`cargo rustc {{[-r|--release]}} -- -C target-cpu=native`

- Compile with speed optimizations:

`cargo rustc -- -C opt-level {{1|2|3}}`

- Compile with [s]ize optimizations (`z` also turns off loop vectorization):

`cargo rustc -- -C opt-level {{s|z}}`

- Check if your package uses unsafe code:

`cargo rustc --lib -- -D unsafe-code`

- Build a specific package:

`cargo rustc {{[-p|--package]}} {{package}}`

- Build only the specified binary:

`cargo rustc --bin {{name}}`
