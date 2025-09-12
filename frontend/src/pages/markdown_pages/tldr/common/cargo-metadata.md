---
title: "Generate Cargo Metadata - Inspect Rust Packages | Free DevTools"
name: cargo-metadata
path: /freedevtools/tldr/common/cargo-metadata
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-metadata/"
description: "Generate Cargo metadata to inspect Rust packages and dependencies. Analyze workspace members, resolve dependencies, and customize output formats. Free online tool, no registration required."
category: common
keywords:
- cargo metadata generator
- rust package analyzer
- dependency resolver online
- cargo workspace inspector
- rust project metadata
- cargo metadata json
- rust build system information
- cargo dependency graph
- rust package dependency tree
- cargo project analyzer
features:
- Output workspace members in JSON format
- Resolve and list package dependencies
- Customize output format based on version
- Filter dependencies by target platform
- Inspect Rust package metadata
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo metadata

> Output the workspace members and resolved dependencies of current package as JSON.
> Note: The output format is subject to change in future versions of Cargo.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-metadata.html>.

- Print the workspace members and resolved dependencies of the current package:

`cargo metadata`

- Print only the workspace members and do not fetch dependencies:

`cargo metadata --no-deps`

- Print metadata in a specific format based on the specified version:

`cargo metadata --format-version {{version}}`

- Print metadata with the `resolve` field including dependencies only for the given target triple (Note: The `packages` array will still include the dependencies for all targets):

`cargo metadata --filter-platform {{target_triple}}`
