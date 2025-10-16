---
title: "Run Cargo Package - Execute Rust Code | Online Free DevTools by Hexmos"
name: cargo-run
path: "/freedevtools/tldr/cargo/cargo-run/"
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-run/"
description: "Execute Rust code with Cargo Run. Build and run your Cargo packages quickly. Manage features and profiles with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- cargo package runner
- rust code execution
- cargo build and run
- command line rust
- cargo features management
- cargo profiles configuration
- rust development tool
- cargo project execution
- rust binary execution
- cargo run examples
features:
- Execute Rust binaries directly
- Specify target binaries to run
- Activate or disable Cargo features
- Configure custom profiles for execution
- Run examples defined in the Cargo project
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo run

> Run the current Cargo package.
> Note: The working directory of the executed binary will be set to the current working directory.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-run.html>.

- Run the default binary target:

`cargo {{[r|run]}}`

- Run the specified binary:

`cargo {{[r|run]}} --bin {{name}}`

- Run the specified example:

`cargo {{[r|run]}} --example {{name}}`

- Activate a space or comma separated list of features:

`cargo {{[r|run]}} {{[-F|--features]}} "{{feature1 feature2 ...}}"`

- Disable the default features:

`cargo {{[r|run]}} --no-default-features`

- Activate all available features:

`cargo {{[r|run]}} --all-features`

- Run with the given profile:

`cargo {{[r|run]}} --profile {{name}}`
