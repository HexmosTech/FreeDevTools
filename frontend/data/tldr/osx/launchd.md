---
title: "Control Launchd - Manage macOS Processes | Online Free DevTools by Hexmos"
name: launchd
path: "/freedevtools/tldr/osx/launchd/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/launchd/"
description: "Control macOS processes with Launchd. Manage system and user processes, and configure services. Free online tool, no registration required. Use Launchctl to interact."
category: osx
keywords:
- launchd process manager
- launchd service control
- macos process management
- launchctl command line
- osx process scheduler
- launchd configuration
- system process control
- user process management
- daemon management macos
- macOS service manager
features:
- Manage system-level processes
- Control user-specific processes
- Schedule processes to run at specific times
- Configure services to start on boot
- Interact with launchd using launchctl
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# launchd

> Manages processes, both for the system and users.
> You cannot invoke launchd manually, use launchctl to interact with it.
> More information: <https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html>.

- Run init:

`/sbin/launchd`

- View documentation for interacting with launchd using launchctl:

`tldr launchctl`
