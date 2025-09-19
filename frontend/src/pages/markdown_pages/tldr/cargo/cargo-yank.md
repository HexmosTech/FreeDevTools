---
title: "Yank Crate - Remove Package Versions with Cargo | Online Free DevTools by Hexmos"
name: cargo-yank
path: /freedevtools/tldr/cargo/cargo-yank
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-yank/"
description: "Remove crate package versions easily with Cargo Yank. Prevent new projects from using a specific version. Free online tool, no registration required."
category: common
keywords:
- rust crate yank
- cargo package removal
- rust package version control
- cargo crate version management
- cargo registry management
- rust crate publishing
- rust dependency management
- cargo command line tool
- rust package rollback
- cargo crate unpublishing
features:
- Remove specified crate versions from the index
- Prevent new projects from using yanked versions
- Undo yanks to allow crate download again
- Specify the registry to yank from
- Manage package versions within a Rust project
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo yank

> Remove a pushed crate from the index. This should only be used when you accidentally release a significantly broken crate.
> Note: This does not remove any data. The crate is still present after a yank - this just prevents new projects from using it.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-yank.html>.

- Yank the specified version of a crate:

`cargo yank {{crate}}@{{version}}`

- Undo a yank (i.e. allow downloading it again):

`cargo yank --undo {{crate}}@{{version}}`

- Use the specified registry (registry names can be defined in the configuration - the default is <https://crates.io>):

`cargo yank --registry {{name}} {{crate}}@{{version}}`
