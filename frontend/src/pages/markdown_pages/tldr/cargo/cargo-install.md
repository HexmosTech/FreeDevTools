---
title: "Cargo Install - Build Rust Binaries | Online Free DevTools by Hexmos"
name: cargo-install
path: /freedevtools/tldr/cargo/cargo-install
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-install/"
description: "Build Rust binaries effortlessly with Cargo Install. Install crates from crates.io, Git repositories, or local paths. Free online tool, no registration required."
category: common
keywords:
- Rust package installer
- Cargo install crate
- Cargo install git
- Cargo install local package
- Rust binary builder
- crates.io installer
- Rust dependency manager
- Cargo install version
- Cargo command-line tool
- Rust development
features:
- Install Rust packages from crates.io
- Install Rust packages from Git repositories
- Install Rust packages from local directories
- List installed Rust packages and versions
- Specify branch, tag, or commit for Git installs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo install

> Build and install a Rust binary.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-install.html>.

- Install a package from <https://crates.io> (the version is optional - latest by default):

`cargo install {{package}}@{{version}}`

- Install a package from the specified Git repository:

`cargo install --git {{repo_url}}`

- Build from the specified branch/tag/commit when installing from a Git repository:

`cargo install --git {{repo_url}} --{{branch|tag|rev}} {{branch_name|tag|commit_hash}}`

- Install a package from a local directory:

`cargo install --path {{path/to/package}}`

- List all installed packages and their versions:

`cargo install --list`
