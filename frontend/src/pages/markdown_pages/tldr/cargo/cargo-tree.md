---
title: "Generate Rust Dependency Tree - Visualize Cargo Dependencies | Free DevTools"
name: cargo-tree
path: /freedevtools/tldr/cargo/cargo-tree
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-tree/"
description: "Generate a Rust dependency tree with cargo-tree. Analyze and visualize project dependencies for effective Rust development. Free online tool, no registration required."
category: common
keywords:
- rust dependency tree
- cargo dependency graph
- rust package visualization
- cargo tree command
- rust dependency analysis
- cargo crate dependencies
- rust dependency management
- cargo crate graph
- rust project dependencies
- cargo dependency explorer
features:
- Visualize Rust project dependencies as a tree.
- Filter dependencies by depth to focus on specific levels.
- Exclude specific packages from the dependency tree.
- Show all occurrences of repeated dependencies.
- Display normal, build, or development dependencies.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cargo tree

> Display a tree visualization of a dependency graph.
> Note: In the tree, dependencies of packages marked with `(*)` have already been shown elsewhere in the graph, and so are not repeated.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-tree.html>.

- Show a dependency tree of the current project:

`cargo tree`

- Only show dependencies up to the specified depth (e.g. when `n` is 1, display only direct dependencies):

`cargo tree --depth {{n}}`

- Do not display the given package (and its dependencies) in the tree:

`cargo tree --prune {{package_spec}}`

- Show all occurrences of repeated dependencies:

`cargo tree --no-dedupe`

- Only show normal/build/development dependencies:

`cargo tree {{[-e|--edges]}} {{normal|build|dev}}`
