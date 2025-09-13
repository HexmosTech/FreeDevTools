---
title: "Create D Projects - Manage D Packages with Dub | Free DevTools"
name: dub
path: /freedevtools/tldr/common/dub
canonical: "https://hexmos.com/freedevtools/tldr/common/dub/"
description: "Create D projects easily with Dub, the D package manager. Install, update, and manage your D project dependencies effortlessly. Free online tool, no registration required."
category: common
keywords:
- D package manager
- D project initializer
- Dub build tool
- Dub dependency manager
- D package installer
- D project creator
- D update dependencies
- Dub fetch dependencies
- D project configuration
- Dub command line
features:
- Initialize new D projects interactively and non-interactively
- Build and run existing D projects
- Install dependencies from dub.json or dub.sdl
- Update project dependencies to latest versions
- Display command-line help information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dub

> Package manager for D packages.
> More information: <https://dub.pm/commandline>.

- Interactively create a new D project:

`dub init {{project_name}}`

- Non-interactively create a new D project:

`dub init {{project_name}} {{[-n|--non-interactive]}}`

- Build and run a D project:

`dub`

- Install dependencies specified in a D project's `dub.json` or `dub.sdl` file:

`dub fetch`

- Update the dependencies in a D project:

`dub upgrade`

- Display help:

`dub {{[-h|--help]}}`
