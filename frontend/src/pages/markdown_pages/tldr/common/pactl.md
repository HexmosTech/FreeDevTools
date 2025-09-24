---
title: "PulseAudio Control - Manage Sound Server with pactl | Online Free DevTools by Hexmos"
name: pactl
path: /freedevtools/tldr/common/pactl
canonical: "https://hexmos.com/freedevtools/tldr/common/pactl/"
description: "Control PulseAudio sound server efficiently with pactl. Manage audio sinks, volume, and muting. Free online tool, no registration required."
category: common
keywords:
- PulseAudio control
- pactl command
- Linux audio control
- Sound server management
- Audio sink management
- Volume control tool
- Mute toggle command
- PulseAudio configuration
- Audio output routing
- Linux sound settings
features:
- Control PulseAudio sound server settings
- Manage audio sinks and sources
- Adjust volume levels for individual sinks
- Route audio streams to different outputs
- Toggle mute status for specific audio devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pactl

> Control a running PulseAudio sound server.
> More information: <https://manned.org/pactl>.

- Show information about the sound server:

`pactl info`

- List all sinks (or other types - sinks are outputs and sink-inputs are active audio streams):

`pactl list {{sinks}} short`

- Change the default sink (output) to 1 (the number can be retrieved via the `list` subcommand):

`pactl set-default-sink {{1}}`

- Move sink-input 627 to sink 1:

`pactl move-sink-input {{627}} {{1}}`

- Set the volume of sink 1 to 75%:

`pactl set-sink-volume {{1}} {{0.75}}`

- Toggle mute on the default sink (using the special name `@DEFAULT_SINK@`):

`pactl set-sink-mute {{@DEFAULT_SINK@}} toggle`
