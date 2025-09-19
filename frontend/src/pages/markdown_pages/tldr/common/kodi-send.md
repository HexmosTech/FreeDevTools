---
title: "Control Kodi - Send Actions to Kodi | Online Free DevTools by Hexmos"
name: kodi-send
path: /freedevtools/tldr/common/kodi-send
canonical: "https://hexmos.com/freedevtools/tldr/common/kodi-send/"
description: "Control Kodi remotely with kodi-send. Execute commands, trigger actions, and manage your media center. Free online tool, no registration required."
category: common
keywords:
- kodi remote control
- kodi command line
- send actions kodi
- kodi cli tool
- linux kodi control
- macos kodi control
- kodi command execution
- kodi automation
- kodi script control
- kodi remote access
features:
- Send commands to Kodi instance
- Execute actions on a remote Kodi host
- Reboot the system running Kodi
- Trigger specific Kodi functions via command line
- Quit the Kodi application remotely
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kodi-send

> Send actions to Kodi.
> More information: <https://kodi.wiki/view/List_of_built-in_functions>.

- Quit Kodi:

`kodi-send {{[-a|--action]}} Quit`

- Reboot the system:

`kodi-send {{[-a|--action]}} Reboot`

- Send an action to a remote host:

`kodi-send --host {{192.168.0.1}} --port {{9777}} {{[-a|--action]}} {{Quit}}`
