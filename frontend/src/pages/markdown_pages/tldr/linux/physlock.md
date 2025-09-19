---
title: "Physlock - Lock Consoles Securely | Online Free DevTools by Hexmos"
name: physlock
path: /freedevtools/tldr/linux/physlock
canonical: "https://hexmos.com/freedevtools/tldr/linux/physlock/"
description: "Lock Linux consoles securely with Physlock. Prevent unauthorized access and protect your system with advanced locking features. Free online tool, no registration required."
category: linux
keywords:
- console locker
- terminal security
- linux physlock
- system lock linux
- secure console lock
- virtual terminal lock
- console access control
- password protected console
- linux security tool
- kernel message mute
features:
- Locks all consoles and virtual terminals simultaneously
- Mutes kernel messages during the locked session
- Disables SysRq mechanism for enhanced security
- Allows custom messages to be displayed before password prompt
- Can be forked and detached for background operation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# physlock

> Lock all consoles and virtual terminals.
> More information: <https://github.com/muennich/physlock>.

- Lock every console (require current user or root to unlock):

`physlock`

- Mute kernel messages on console while locked:

`physlock -m`

- Disable SysRq mechanism while locked:

`physlock -s`

- Display a message before the password prompt:

`physlock -p "{{Locked!}}"`

- Fork and detach physlock (useful for suspend or hibernate scripts):

`physlock -d`
