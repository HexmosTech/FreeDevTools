---
title: "Manage WirePlumber - Control PipeWire with wpctl | Online Free DevTools by Hexmos"
name: wpctl
path: "/freedevtools/tldr/linux/wpctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/wpctl/"
description: "Control PipeWire audio sessions and policies with wpctl.  Manage sinks, volumes, and mute states efficiently using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - PipeWire manager
  - WirePlumber control
  - Linux audio control
  - wpctl commands
  - audio sink management
  - volume control command
  - mute unmute command
  - session management tool
  - policy manager command
  - PipeWire CLI
features:
  - List all WirePlumber objects
  - Inspect object properties
  - Set default objects
  - Get and set sink volume
  - Mute and unmute audio sinks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wpctl

> Manage WirePlumber, a session and policy manager for PipeWire.
> Note: You can use the special name `@DEFAULT_SINK@` in place of `id` to operate on the default sink.
> See also: `pw-cli`.
> More information: <https://pipewire.pages.freedesktop.org/wireplumber/>.

- List all objects managed by WirePlumber:

`wpctl status`

- Print all properties of an object:

`wpctl inspect {{id}}`

- Set an object to be the default in its group:

`wpctl set-default {{id}}`

- Get the volume of a sink:

`wpctl get-volume {{id}}`

- Set the volume of a sink to `n` percent:

`wpctl set-volume {{id}} {{n}}%`

- Increase/Decrease the volume of a sink by `n` percent:

`wpctl set-volume {{id}} {{n}}%{{+|-}}`

- Increase the volume of a sink by `n` percent but limit the volume below 100%:

`wpctl set-volume {{[-l|--limit]}} 1 {{id}} {{n}}%-`

- Mute/Unmute a sink (1 is mute, 0 is unmute):

`wpctl set-mute {{id}} {{1|0|toggle}}`
