---
title: "Trunk - Bundle Rust Web Apps | Online Free DevTools by Hexmos"
name: trunk
path: /freedevtools/tldr/common/trunk
canonical: "https://hexmos.com/freedevtools/tldr/common/trunk/"
description: "Bundle Rust web apps with Trunk. Streamline development, build for production, and manage tools with ease. Free online tool, no registration required."
category: common
keywords:
- rust web app bundler
- trunk build tool
- rust web app deployment
- trunk serve command
- ci/cd pipeline manager
- rust web app hot reloading
- trunk tools list
- trunk actions history
- rust wasm bundler
- trunk configuration
features:
- Build Rust web apps for production environments.
- Start a local server with hot reloading for rapid development.
- Manage project dependencies and tool versions with Trunk tools.
- Deploy web apps to specific directories.
- Review action execution logs for debugging.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trunk

> Bundle and serve Rust web apps with CI/CD pipelines.
> More information: <https://docs.trunk.io/references/cli>.

- Start local/production server with hot reloading:

`trunk serve --port {{port}} --release --proxy-backend {{URL}}`

- Build for production at root or subdirectory:

`trunk build --release --dist {{path/to/distribution}} --public-url /{{path/to/app/subdir}}`

- List all available tools in the repo and if they are enabled:

`trunk tools list`

- Enable/disable a tool at a specific version:

`trunk tools {{enable|disable}} {{tool}}@{{version}}`

- Print an action's execution history:

`trunk actions history {{action}}`
