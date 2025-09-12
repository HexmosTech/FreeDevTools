---
title: "Reflector - Generate Mirrorlists | Free DevTools"
name: reflector
path: /freedevtools/tldr/unknown/reflector
canonical: "https://hexmos.com/freedevtools/tldr/unknown/reflector/"
description: "Generate optimized mirrorlists with Reflector for faster downloads. Sort mirrors, filter by country and protocol, and save configurations. Free online tool, no registration required."
category: unknown
keywords:
- mirrorlist generator
- reflector mirrorlist
- arch linux mirror
- pacman mirrorlist
- download speed optimizer
- mirror sorting tool
- linux mirrorlist generator
- reflector configuration
- fastest mirror selector
- country specific mirrors
features:
- Sort mirrorlists by download speed
- Filter mirrors by country and protocol
- Fetch the latest synchronized mirrors
- Use configuration files for mirror selection
- Display help information for command usage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# reflector

> Arch script to fetch and sort mirrorlists.
> More information: <https://manned.org/reflector>.

- Get all mirrors, sort for download speed and save them:

`sudo reflector --sort {{rate}} --save {{/etc/pacman.d/mirrorlist}}`

- Only get German HTTPS mirrors:

`reflector {{[-c|--country]}} {{Germany}} {{[-p|--protocol]}} {{https}}`

- Only get the 10 recently sync'd mirrors:

`reflector {{[-l|--latest]}} {{10}}`

- Use a configuration file to fetch mirrors:

`sudo reflector @{{/etc/xdg/reflector/reflector.conf}}`

- Display help:

`reflector {{[-h|--help]}}`
