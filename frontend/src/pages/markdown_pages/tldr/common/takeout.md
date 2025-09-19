---
title: "Takeout - Manage Docker Dependencies | Online Free DevTools by Hexmos"
name: takeout
path: /freedevtools/tldr/common/takeout
canonical: "https://hexmos.com/freedevtools/tldr/common/takeout/"
description: "Manage Docker dependencies with Takeout, a development-only dependency manager. Simplify environment setup and streamline your workflow with this free online tool, no registration required."
category: common
keywords:
- docker dependency manager
- takeout docker
- docker development environment
- container management
- takeout cli
- docker service manager
- development environment setup
- containerized dependencies
- tighten takeout
- docker development tool
features:
- Enable and disable services with simple commands
- Manage Docker containers for local development
- Configure services with default parameters
- Control the state of individual containers
- List available and enabled services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# takeout

> A Docker-based development-only dependency manager.
> More information: <https://github.com/tighten/takeout>.

- Display a list of available services:

`takeout enable`

- Enable a specific service:

`takeout enable {{name}}`

- Enable a specific service with the default parameters:

`takeout enable --default {{name}}`

- Display a list of enabled services:

`takeout disable`

- Disable a specific service:

`takeout disable {{name}}`

- Disable all services:

`takeout disable --all`

- Start a specific container:

`takeout start {{container_id}}`

- Stop a specific container:

`takeout stop {{container_id}}`
