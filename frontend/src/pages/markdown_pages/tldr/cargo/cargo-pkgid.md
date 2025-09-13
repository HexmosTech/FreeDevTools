---
title: "Generate Cargo Package ID - Find Package Specifier | Free DevTools"
name: cargo-pkgid
path: /freedevtools/tldr/common/cargo-pkgid
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-pkgid/"
description: "Generate package identifiers with Cargo Pkgid. Get fully qualified package specifications for Rust projects and dependencies. Free online tool, no registration required."
category: common
keywords:
- rust package id
- cargo package specification
- cargo pkgid command
- rust dependency identifier
- generate package specifier
- rust crate identifier
- cargo metadata extraction
- rust project information
- linux cargo command
- macos cargo command
features:
- Print the full package ID for a project.
- Output the package specification of a given dependency.
- Retrieve package information from the command line.
- Resolve package IDs within a Cargo workspace.
- Identify the exact package version and source.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo pkgid

> Print the fully qualified package ID specifier for a package or dependency in the current workspace.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-pkgid.html>.

- Print the fully qualified package specification for the current project:

`cargo pkgid`

- Print the fully qualified package specification for the specified package:

`cargo pkgid {{partial_pkgspec}}`
