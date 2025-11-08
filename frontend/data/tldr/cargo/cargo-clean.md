---
title: "Cargo Clean - Remove Build Artifacts | Online Free DevTools by Hexmos"
name: cargo-clean
path: "/freedevtools/tldr/cargo/cargo-clean/"
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-clean/"
description: "Clean Rust build artifacts with Cargo Clean. Remove target directories, documentation, and release builds for cleaner builds. Free online tool, no registration required."
category: common
keywords:
- rust artifact removal
- cargo build cleaner
- rust target directory
- cargo clean command
- rust project cleaner
- rust build optimization
- cargo documentation clean
- rust release clean
- rust development tools
- cargo build management
features:
- Remove the entire target directory.
- Remove documentation artifacts.
- Remove release build artifacts.
- Remove artifacts for a specific profile.
- Clean rust project dependencies.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo clean

> Remove generated artifacts in the `target` directory.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-clean.html>.

- Remove the entire `target` directory:

`cargo clean`

- Remove documentation artifacts (the `target/doc` directory):

`cargo clean --doc`

- Remove release artifacts (the `target/release` directory):

`cargo clean {{[-r|--release]}}`

- Remove artifacts in the directory of the given profile (in this case, `target/debug`):

`cargo clean --profile {{dev}}`
