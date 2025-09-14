---
title: "Automount - Manage Mount Points on macOS | Free DevTools"
name: automount
path: /freedevtools/tldr/osx/automount
canonical: "https://hexmos.com/freedevtools/tldr/osx/automount/"
description: "Manage mount points with Automount on macOS. Trigger on-demand directory mounting and control auto-unmount timeouts. Free online tool, no registration required."
category: osx
keywords:
- macOS automount
- automount configuration
- auto_master file
- on-demand mounting
- automount command
- macOS network shares
- network file system
- autofs management
- macOS automount utility
- directory mounting
features:
- Mount directories on demand using `/etc/auto_master`
- Flush the automount cache
- Automatically unmount directories after a specified inactivity period
- Unmount all directories previously mounted by automount
- Trigger the system's automounting process manually
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# automount

> Read the `/etc/auto_master` file and mount `autofs` on the appropriate mount points to trigger the on-demand mounting of directories. Essentially, it's a way to manually initiate the system's automounting process.
> Note: You'll most likely need to run with `sudo` if you don't have the necessary permissions.
> More information: <https://keith.github.io/xcode-man-pages/automount.8.html>.

- Run automount, flush the cache(`-c`) beforehand, and be verbose(`-v`) about it (most common use):

`automount -cv`

- Automatically unmount after 5 minutes (300 seconds) of inactivity:

`automount -t 300`

- Unmount anything previously mounted by automount and/or defined in `/etc/auto_master`:

`automount -u`
