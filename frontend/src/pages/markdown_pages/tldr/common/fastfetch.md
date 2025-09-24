---
title: "Fastfetch - Display System Information | Online Free DevTools by Hexmos"
name: fastfetch
path: /freedevtools/tldr/common/fastfetch
canonical: "https://hexmos.com/freedevtools/tldr/common/fastfetch/"
description: "Display system information quickly with Fastfetch. Analyze operating system, software, and hardware details. Free online tool, no registration required."
category: common
keywords:
- system information display
- operating system details
- hardware information retrieval
- software configuration analysis
- linux system information
- macos system details
- windows system information
- command line system info
- fast system information
- system diagnostics
features:
- Display comprehensive system information
- Load and use custom configuration files
- Fetch specific system structures
- Customize logo appearance
- Customize color scheme
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fastfetch

> Display information about your operating system, software and hardware.
> More information: <https://manned.org/fastfetch>.

- Display system information:

`fastfetch`

- Display full system information with all the modules enabled:

`fastfetch {{[-c|--config]}} all`

- Load a custom configuration file:

`fastfetch {{[-c|--config]}} {{path/to/config_file}}`

- Fetch a specific structure:

`fastfetch {{[-s|--structure]}} {{os:kernel:de:cpu:gpu}}`

- Use a specific logo:

`fastfetch {{[-l|--logo]}} {{logo}}`

- Display system information without a logo:

`fastfetch {{[-l|--logo]}} none`

- Use a specific color for the keys and title:

`fastfetch --color {{blue}}`
