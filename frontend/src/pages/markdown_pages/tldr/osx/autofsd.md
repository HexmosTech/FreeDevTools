---
title: "Automount Control - Manage OSX Filesystems | Free DevTools"
name: autofsd
path: /freedevtools/tldr/osx/autofsd
canonical: "https://hexmos.com/freedevtools/tldr/osx/autofsd/"
description: "Automount control with autofsd. Manage filesystem mounting on macOS using configuration change events. Free online tool, no registration required."
category: osx
keywords:
- macOS automount control
- OSX filesystem management
- Automount configuration
- Filesystem event handler
- Network configuration listener
- Autofsd daemon
- Automount startup
- Dynamic mount points
- macOS network mounts
- Command line automount
features:
- Automatically mount filesystems
- React to network configuration changes
- Start automount daemon on system boot
- Manage filesystem mounts dynamically
- Monitor network events for mounting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# autofsd

> Run `automount` on startup and network configuration change events.
> It should not be invoked manually.
> More information: <https://keith.github.io/xcode-man-pages/autofsd.8.html>.

- Start the daemon:

`autofsd`
