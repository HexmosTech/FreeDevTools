---
title: "Add Rust Dependencies - Manage Crates with Cargo Add | Online Free DevTools by Hexmos"
name: cargo-add
path: /freedevtools/tldr/cargo/cargo-add
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-add/"
description: "Add Rust dependencies effortlessly with Cargo Add. Manage crate versions, features, and paths for seamless project builds. Free online tool, no registration required."
category: common
keywords:
- rust dependency manager
- cargo crate adder
- rust package installer
- rust add dependency command
- cargo add tool
- rust dependency versioning
- rust feature management
- cargo add local crate
- rust build dependency
- rust development dependency
features:
- Add latest crate versions
- Specify exact crate versions
- Enable specific crate features
- Add optional dependencies
- Include local crate paths
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo add

> Add dependencies to a Rust project's `Cargo.toml` manifest.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-add.html>.

- Add the latest version of a dependency to the current project:

`cargo add {{dependency}}`

- Add a specific version of a dependency:

`cargo add {{dependency}}@{{version}}`

- Add a dependency and enable one or more specific features:

`cargo add {{dependency}} {{[-F|--features]}} {{feature_1}},{{feature_2}}`

- Add an optional dependency, which then gets exposed as a feature of the crate:

`cargo add {{dependency}} --optional`

- Add a local crate as a dependency:

`cargo add --path {{path/to/crate_directory}}`

- Add a development or build dependency:

`cargo add {{dependency}} --{{dev|build}}`

- Add a dependency with all default features disabled:

`cargo add {{dependency}} --no-default-features`
