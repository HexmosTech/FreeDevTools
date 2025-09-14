---
title: "Cargo Search - Find Rust Packages | Free DevTools"
name: cargo-search
path: /freedevtools/tldr/cargo/cargo-search
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-search/"
description: "Find Rust packages easily with Cargo Search. Discover crates and their descriptions in TOML format for seamless Cargo.toml integration. Free online tool, no registration required."
category: common
keywords:
- rust package search
- crates.io search
- cargo crate finder
- rust dependency lookup
- toml package info
- rust command line tools
- cargo package manager
- rust development
- rust library search
- cargo crates search
features:
- Search for packages on crates.io
- Display crate descriptions in TOML format
- Limit the number of search results
- Integrate seamlessly with Cargo.toml
- Find Rust dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo search

> Search for packages on <https://crates.io>.
> The crates are displayed along with descriptions in TOML format suitable for copying into `Cargo.toml`.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-search.html>.

- Search for packages:

`cargo search {{query}}`

- Show `n` results (default: 10, max: 100):

`cargo search --limit {{n}} {{query}}`
