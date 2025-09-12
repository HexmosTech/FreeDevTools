---
title: "Verify Cargo Project - Validate Cargo.toml Manifest | Free DevTools"
name: cargo-verify-project
path: /freedevtools/tldr/common/cargo-verify-project
canonical: "https://hexmos.com/freedevtools/tldr/common/cargo-verify-project/"
description: "Verify Cargo projects accurately with Cargo Verify Project. Validate `Cargo.toml` manifests and ensure project integrity quickly. Free online tool, no registration required."
category: common
keywords:
- cargo project verification
- cargo manifest validation
- toml manifest checker
- rust project integrity
- cargo.toml validator
- cargo build check
- rust manifest analyzer
- cargo dependency validation
- rust project structure
- cargo project correctness
features:
- Checks the correctness of the Cargo.toml manifest
- Validates the project's dependencies
- Identifies errors in the manifest file
- Provides a JSON output of the verification results
- Supports specifying a custom manifest path
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo verify-project

> Check the correctness of the `Cargo.toml` manifest and print the result as a JSON object.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-verify-project.html>.

- Check the correctness of the current project's manifest:

`cargo verify-project`

- Check the correctness of the specified manifest file:

`cargo verify-project --manifest-path {{path/to/Cargo.toml}}`
