---
title: "Locate Cargo Project - Find Cargo.toml Manifest | Online Free DevTools by Hexmos"
name: cargo-locate-project
path: "/freedevtools/tldr/cargo/cargo-locate-project/"
canonical: "https://hexmos.com/freedevtools/tldr/cargo/cargo-locate-project/"
description: "Locate Cargo projects instantly with Cargo Locate-Project. Find the Cargo.toml manifest path for projects and workspaces. Free online tool, no registration required."
category: common
keywords:
- cargo locate project
- rust locate project
- cargo toml path
- rust manifest path
- cargo workspace manifest
- rust project discovery
- cargo command line
- rust build system
- cargo metadata
- rust development
features:
- Find the Cargo.toml manifest of a project
- Display the manifest of a workspace member
- Locate the root manifest of a workspace
- Output the manifest path in JSON format
- Locate manifest for specific directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cargo locate-project

> Print the full path to the `Cargo.toml` manifest of a project.
> If the project is part of a workspace, the manifest of the project is shown, rather than that of the workspace.
> More information: <https://doc.rust-lang.org/cargo/commands/cargo-locate-project.html>.

- Display the JSON object with full path to the `Cargo.toml` manifest:

`cargo locate-project`

- Display the project path in the specified format:

`cargo locate-project --message-format {{plain|json}}`

- Display the `Cargo.toml` manifest located at the root of the workspace as opposed to the current workspace member:

`cargo locate-project --workspace`

- Display the `Cargo.toml` manifest of a specific directory:

`cargo locate-project --manifest-path {{path/to/Cargo.toml}}`
