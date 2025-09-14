---
title: "Cargo Publish - Upload Rust Packages | Free DevTools"
name: cargo-publish
path: /freedevtools/tldr/cargo/cargo-publish
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-publish/"
description: "Publish Rust packages with Cargo Publish. Upload your crate to a registry and share your code. Free online tool, no registration required."
category: common
keywords:
- rust package manager
- cargo publish command
- rust crate publishing
- rust package upload
- rust package registry
- cargo registry publish
- rust package distribution
- cargo package version
- rust package dependencies
- cargo dry run publish
features:
- Upload a crate to a registry
- Perform checks before publishing
- Create a `.crate` file
- Simulate publishing with a dry run
- Specify a custom registry
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo publish

> Upload a package to a registry.
> Note: You have to add an authentication token using `cargo login` before publishing a package.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-publish.html>.

- Perform checks, create a `.crate` file and upload it to the registry:

`cargo publish`

- Perform checks, create a `.crate` file but don't upload it (equivalent of `cargo package`):

`cargo publish {{[-n|--dry-run]}}`

- Use the specified registry (registry names can be defined in the configuration - the default is <https://crates.io>):

`cargo publish --registry {{name}}`
