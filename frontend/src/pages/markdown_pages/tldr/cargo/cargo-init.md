---
title: "Create Rust Packages - Cargo Init Command | Online Free DevTools by Hexmos"
name: cargo-init
path: /freedevtools/tldr/cargo/cargo-init
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-init/"
description: "Create Rust packages instantly with the Cargo init command.  Easily initialize new projects, manage dependencies, and build applications.  Free online tool, no registration required."
category: cargo
keywords:
- rust cargo init
- create rust project
- cargo new project
- rust package manager
- rust dependency management
- rust binary creation
- rust library creation
- cargo init command examples
- initialize rust project
- build rust application
features:
- Initialize new Rust projects with binary or library targets.
- Specify custom project names and locations.
- Integrate with Git, Mercurial, Pijul, or Fossil for version control.
- Create projects with predefined package names.
- Manage project dependencies using Cargo's built-in features.
ogImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
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
