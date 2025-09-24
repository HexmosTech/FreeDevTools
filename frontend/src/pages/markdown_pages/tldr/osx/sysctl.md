---
title: "Sysctl - Control Kernel State Info | Online Free DevTools by Hexmos"
name: sysctl
path: /freedevtools/tldr/osx/sysctl
canonical: "https://hexmos.com/freedevtools/tldr/osx/sysctl/"
description: "Control kernel state information with Sysctl. Access and modify kernel parameters on macOS for system tuning and debugging. Free online tool, no registration required."
category: osx
keywords:
- osx kernel configuration
- macos system parameters
- sysctl variable editor
- kernel state viewer
- osx system tuning
- sysctl command line tool
- macos kernel debugging
- system information osx
- kernel parameters mac
- apple sysctl
features:
- Access kernel variables
- Display system information
- Modify kernel parameters
- Tune system performance
- Debug kernel behavior
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sysctl

> Access kernel state information.
> More information: <https://keith.github.io/xcode-man-pages/sysctl.8.html>.

- Show all available variables and their values:

`sysctl -a`

- Show Apple model identifier:

`sysctl -n hw.model`

- Show CPU model:

`sysctl -n machdep.cpu.brand_string`

- Show available CPU features (MMX, SSE, SSE2, SSE3, AES, etc):

`sysctl -n machdep.cpu.features`

- Set a changeable kernel state variable:

`sysctl -w {{section.tunable}}={{value}}`
