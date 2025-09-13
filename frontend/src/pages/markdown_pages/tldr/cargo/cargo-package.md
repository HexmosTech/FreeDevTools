---
title: "Package Rust Code - Create Cargo Package | Free DevTools"
name: cargo-package
path: /freedevtools/tldr/common/cargo-package
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-package/"
description: "Package Rust code with Cargo Package for distribution. Easily create distributable `.crate` files and verify package contents. Free online tool, no registration required."
category: common
keywords:
- rust package
- cargo package
- crate package
- rust crate
- rust distribution
- cargo distribution
- rust packaging
- cargo packaging
- rust project package
- cargo project package
features:
- Create distributable `.crate` files
- Verify package contents before publishing
- List files to be included in the package
- Perform checks before packaging
- Package Rust projects locally
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo package

> Assemble a local package into a distributable tarball (a `.crate` file).
> Similar to `cargo publish --dry-run`, but has more options.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-package.html>.

- Perform checks and create a `.crate` file (equivalent of `cargo publish --dry-run`):

`cargo package`

- Display what files would be included in the tarball without actually creating it:

`cargo package {{[-l|--list]}}`
