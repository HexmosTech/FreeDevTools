---
title: "Manage TeX Live Platforms - Tlmgr Platform | Online Free DevTools by Hexmos"
name: tlmgr-platform
path: "/freedevtools/tldr/tlmgr/tlmgr-platform/"
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-platform/"
description: "Manage TeX Live platforms effortlessly with Tlmgr Platform. Add, remove, and set platforms for your TeX Live distribution. Free online tool, no registration required."
category: common
keywords:
- tex live platform manager
- tlmgr platform management
- tex platform command line
- tex live platform add
- tex live platform remove
- tex live platform set
- tex live distribution
- latex platform support
- tex live cross platform
- tlmgr platform auto detect
features:
- List available TeX Live platforms
- Add executables for a specific platform
- Remove executables for a specific platform
- Auto-detect and switch to the current platform
- Switch to a specified platform
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr platform

> Manage TeX Live platforms.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#platform>.

- List all available platforms in the package repository:

`tlmgr platform list`

- Add the executables for a specific platform:

`sudo tlmgr platform add {{platform}}`

- Remove the executables for a specific platform:

`sudo tlmgr platform remove {{platform}}`

- Auto-detect and switch to the current platform:

`sudo tlmgr platform set auto`

- Switch to a specific platform:

`sudo tlmgr platform set {{platform}}`
