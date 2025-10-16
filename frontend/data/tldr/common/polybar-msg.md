---
title: "Control Polybar - Manage Bar Instances | Online Free DevTools by Hexmos"
name: polybar-msg
path: "/freedevtools/tldr/common/polybar-msg/"
canonical: "https://hexmos.com/freedevtools/tldr/common/polybar-msg/"
description: "Control Polybar using inter-process-messaging (IPC). Manage bar instances and toggle visibility. Free online tool, no registration required."
category: common
keywords:
- polybar control
- polybar ipc
- linux bar manager
- linux system tray
- polybar message
- polybar instance control
- linux window manager
- command line polybar
- desktop environment customization
- inter-process communication linux
features:
- Quit running Polybar instances
- Restart Polybar bar configurations
- Toggle bar visibility on demand
- Execute module actions with custom data
- Send commands to specific Polybar instances
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# polybar-msg

> Control `polybar` using inter-process-messaging (IPC).
> Note: IPC is disabled by default and can be enabled by setting `enable-ipc = true` in the Polybar config.
> More information: <https://polybar.rtfd.io/en/stable/user/ipc.html>.

- Quit the bar:

`polybar-msg cmd quit`

- Restart the bar in-place:

`polybar-msg cmd restart`

- Hide the bar (does nothing if the bar is already hidden):

`polybar-msg cmd hide`

- Show the bar again (does nothing if the bar is not hidden):

`polybar-msg cmd show`

- Toggle between hidden/visible:

`polybar-msg cmd toggle`

- Execute a module action (the data string is optional):

`polybar-msg action "#{{module_name}}.{{action_name}}.{{data_string}}"`

- Only send messages to a specific Polybar instance (all instances by default):

`polybar-msg -p {{pid}} {{cmd|action}} {{payload}}`
