---
title: "Run Rust Code Checker - Bacon | Online Free DevTools by Hexmos"
name: bacon
path: /freedevtools/tldr/common/bacon
canonical: "https://hexmos.com/freedevtools/tldr/common/bacon/"
description: "Run background code checks with Bacon, a Rust code checker. Detect errors and improve code quality automatically. Free online tool, no registration required."
category: common
keywords:
- rust code checker
- background code checker
- cargo check automation
- rust linter
- rust static analysis
- code change detection
- rust build automation
- rust development tool
- toml configuration
- rust job runner
features:
- Automatically runs cargo check on file changes
- Supports running cargo test in specified directories
- Enables checking against all targets
- Executes custom jobs via command-line arguments
- Initializes a bacon.toml configuration file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bacon

> A background code checker for Rust.
> More information: <https://github.com/Canop/bacon>.

- Run `cargo check` whenever a change is detected in the current directory:

`bacon`

- Run `cargo test` whenever a change is detected in the given directory:

`bacon test {{path/to/directory}}`

- Run `cargo check` against all targets whenever a change is detected in the current directory:

`bacon check-all`

- Run a specific job whenever a change is detected in the current directory:

`bacon {{run|test|clippy|doc|...}}`

- List all currently available jobs:

`bacon --list-jobs`

- Initialize a `bacon.toml` configuration file in the current directory:

`bacon --init`
