---
title: "Display System Information - pfetch | Online Free DevTools by Hexmos"
name: pfetch
path: /freedevtools/tldr/common/pfetch
canonical: "https://hexmos.com/freedevtools/tldr/common/pfetch/"
description: "Display system information with pfetch. Quickly retrieve OS details, kernel version, uptime, and memory usage. Free online tool, no registration required."
category: common
keywords:
- system information
- linux system information
- macos system information
- os information
- kernel information
- uptime information
- memory usage
- host information
- system statistics
- command line system info
features:
- Displays system information like OS, kernel, and uptime
- Customizes output with specific fields and ASCII art
- Supports displaying username and hostname
- Enables or disables color output
- Provides a concise system overview
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pfetch

> Display system information.
> More information: <https://github.com/dylanaraps/pfetch>.

- Display the ASCII art and default fields:

`pfetch`

- Display only the ASCII art and color palette fields:

`PF_INFO="{{ascii palette}}" pfetch`

- Display all possible fields:

`PF_INFO="{{ascii title os host kernel uptime pkgs memory shell editor wm de palette}}" pfetch`

- Display a different username and hostname:

`USER="{{user}}" HOSTNAME="{{hostname}}" pfetch`

- Display without colors:

`PF_COLOR={{0}} pfetch`
