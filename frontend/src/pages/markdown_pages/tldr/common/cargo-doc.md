---
title: "Generate Rust Documentation - Cargo Doc | Free DevTools"
name: cargo-doc
path: /freedevtools/tldr/common/cargo-doc
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-doc/"
description: "Generate Rust documentation with Cargo Doc.  Build and open project documentation, manage dependencies, and view package-specific docs. Free online tool, no registration required."
category: common
keywords:
- rust documentation generator
- cargo doc command
- rust package documentation
- crate documentation build
- rust cli documentation
- cargo documentation dependencies
- rust project docs
- cargo doc examples
- rust documentation tool
- cargo documentation flags
features:
- Build documentation for Rust projects
- Exclude dependencies from documentation builds
- Open documentation in a web browser
- Target specific packages for documentation
- Customize documentation output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo doc

> Build the documentation of Rust packages.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-doc.html>.

- Build the documentation for the current project and all dependencies:

`cargo {{[d|doc]}}`

- Do not build documentation for dependencies:

`cargo {{[d|doc]}} --no-deps`

- Build and open the documentation in a browser:

`cargo {{[d|doc]}} --open`

- Build and view the documentation of a particular package:

`cargo {{[d|doc]}} --open {{[-p|--package]}} {{package}}`
