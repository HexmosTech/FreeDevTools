---
title: "Cargo Update - Manage Rust Dependencies | Free DevTools"
name: cargo-update
path: /freedevtools/tldr/common/cargo-update
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-update/"
description: "Manage Rust dependencies efficiently with Cargo Update. Get the latest versions or specify precise versions for your Rust projects. Free online tool, no registration required."
category: common
keywords:
- rust dependency manager
- cargo package update
- rust cargo update
- cargo lockfile manager
- rust dependency versioning
- cargo package version
- rust crate update
- cargo dry run update
- rust package manager
- cargo dependency resolver
features:
- Update dependencies to the latest versions.
- Specify individual dependencies to update.
- Set dependencies to precise versions.
- Perform dry runs to preview updates.
- Manage Cargo.lock file dependencies.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo update

> Update dependencies as recorded in `Cargo.lock`.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-update.html>.

- Update dependencies in `Cargo.lock` to the latest possible version:

`cargo update`

- Display what would be updated, but don't actually write the lockfile:

`cargo update {{[-n|--dry-run]}}`

- Update only the specified dependencies:

`cargo update --package {{dependency1}} --package {{dependency2}} --package {{dependency3}}`

- Set a specific dependency to a specific version:

`cargo update --package {{dependency}} --precise {{1.2.3}}`
