---
title: "Create Rust Package - Cargo Init Tool | Online Free DevTools by Hexmos"
name: cargo-init
path: /freedevtools/tldr/cargo/cargo-init
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-init/"
description: "Create Rust package instantly with Cargo Init, a versatile Rust package manager. Easily initialize new projects, manage dependencies, and build applications. Free online tool, no registration required."
category: common
keywords:
- rust package creation
- cargo init command
- rust project initialization
- rust dependency management
- rust binary package
- rust library package
- cargo package manager
- rust development tool
- rust project structure
- rust build system
features:
- Initialize Rust projects with binary targets
- Initialize Rust projects with library targets
- Specify a directory for the new project
- Integrate with version control systems (git, hg, pijul, fossil)
- Set the package name for the project
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo init

> Create a new Cargo package.
> Equivalent of `cargo new`, but specifying a directory is optional.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-init.html>.

- Initialize a Rust project with a binary target in the current directory:

`cargo init`

- Initialize a Rust project with a binary target in the specified directory:

`cargo init {{path/to/directory}}`

- Initialize a Rust project with a library target in the current directory:

`cargo init --lib`

- Initialize a version control system repository in the project directory (default: `git`):

`cargo init --vcs {{git|hg|pijul|fossil|none}}`

- Set the package name (default: directory name):

`cargo init --name {{name}}`
