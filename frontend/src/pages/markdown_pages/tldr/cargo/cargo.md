---
title: "Cargo - Manage Rust Projects & Crates | Free DevTools"
name: cargo
path: /freedevtools/tldr/cargo/cargo
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo/"
description: "Manage Rust projects instantly with Cargo, the Rust package manager. Build, install, and manage dependencies effortlessly with this command-line interface. Free online tool, no registration required."
category: common
keywords:
- rust package manager
- cargo build
- cargo install
- rust dependency management
- crate management
- rust projects
- cargo add dependency
- cargo search crates
- rust nightly build
- linux cargo
features:
- Build Rust projects with release profiles
- Install binary crates from the command line
- Manage project dependencies in Cargo.toml
- Search for crates using specified search strings
- Create new Rust binary or library projects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo

> Manage Rust projects and their module dependencies (crates).
> Some subcommands such as `build` have their own usage documentation.
> More information: <https://doc.rust-lang.org/cargo>.

- Search for crates:

`cargo search {{search_string}}`

- Install a binary crate:

`cargo install {{crate_name}}`

- List installed binary crates:

`cargo install --list`

- Create a new binary or library Rust project in the specified directory (or the current working directory by default):

`cargo init --{{bin|lib}} {{path/to/directory}}`

- Add a dependency to `Cargo.toml` in the current directory:

`cargo add {{dependency}}`

- Build the Rust project in the current directory using the release profile:

`cargo {{[b|build]}} {{[-r|--release]}}`

- Build the Rust project in the current directory using the nightly compiler (requires `rustup`):

`cargo +nightly {{[b|build]}}`

- Build using a specific number of threads (default is the number of logical CPUs):

`cargo {{[b|build]}} --jobs {{number_of_threads}}`
