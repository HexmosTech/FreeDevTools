---
title: "Automount Daemon - Control Mount Points on macOS | Free DevTools"
name: automountd
path: /freedevtools/tldr/osx/automountd
canonical: "https://hexmos.com/freedevtools/tldr/osx/automountd/"
description: "Control mount points automatically with Automount Daemon. Manage autofs configurations and dynamically mount/unmount network shares. Free online tool, no registration required."
category: osx
keywords:
- macOS automount daemon
- automountd configuration
- automatic mount points osx
- macOS network share management
- autofs daemon control
- osx file system automation
- dynamic mount unmount macOS
- automount daemon logging
- launchd automount service
- automountd troubleshooting macOS
features:
- Dynamically mount network shares
- Automatically unmount idle file systems
- Integrate with launchd for on-demand activation
- Log detailed automount activity to syslog
- Manage autofs configurations on macOS
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# automountd

> An automatic mount/unmount daemon for `autofs`. Started on demand by `launchd`.
> It should not be invoked manually.
> More information: <https://keith.github.io/xcode-man-pages/automountd.8.html>.

- Start the daemon:

`automountd`

- Log more details to `syslog`:

`automountd -v`
