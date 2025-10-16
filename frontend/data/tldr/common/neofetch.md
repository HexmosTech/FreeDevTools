---
title: "Display System Info - Neofetch OS Information | Online Free DevTools by Hexmos"
name: neofetch
path: "/freedevtools/tldr/common/neofetch/"
canonical: "https://hexmos.com/freedevtools/tldr/common/neofetch/"
description: "Display system information with Neofetch. Customize system info outputs and monitor hardware details for Linux, macOS, and BSD systems. Free online tool, no registration required."
category: common
keywords:
- system information display
- operating system info
- hardware details
- linux system info
- macos system info
- bsd system info
- terminal system info
- command line system info
- neofetch configuration
- software version info
features:
- Display operating system information
- Show hardware specifications
- Customize output with config file
- Enable/disable specific info lines
- Display CPU brand and OS architecture
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# neofetch

> Display information about your operating system, software and hardware.
> More information: <https://github.com/dylanaraps/neofetch>.

- Return the default config, and create it if it's the first time the program runs:

`neofetch`

- Trigger an info line from appearing in the output, where 'infoname' is the function name in the configuration file, e.g. memory:

`neofetch --{{enable|disable}} {{infoname}}`

- Hide/Show OS architecture:

`neofetch --os_arch {{on|off}}`

- Enable/Disable CPU brand in output:

`neofetch --cpu_brand {{on|off}}`
