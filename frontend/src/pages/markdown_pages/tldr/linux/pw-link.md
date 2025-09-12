---
title: "Control PipeWire Links - Manage Audio Ports | Free DevTools"
name: pw-link
path: /freedevtools/tldr/linux/pw-link
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-link/"
description: "Control PipeWire audio links with pw-link. Manage audio ports, create connections, and disconnect devices using the command line. Free online tool, no registration required."
category: linux
keywords:
  - pipewire audio links
  - pipewire port manager
  - linux audio control
  - audio link management
  - pw-link command line
  - pipewire audio routing
  - audio device connections
  - jack audio alternative
  - linux audio configuration
  - alsa pipewire integration
features:
  - List available PipeWire audio ports
  - Create links between audio output and input ports
  - Disconnect existing audio links
  - List all existing PipeWire links and their IDs
  - Display help documentation for pw-link
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pw-link

> Manage links between ports in PipeWire.
> More information: <https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/Virtual-Devices>.

- List all audio output and input ports with their IDs:

`pw-link {{[-oiI|--output --input --id]}}`

- Create a link between an output and an input port:

`pw-link {{output_port_name}} {{input_port_name}}`

- Disconnect two ports:

`pw-link {{[-d|--disconnect]}} {{output_port_name}} {{input_port_name}}`

- List all links with their IDs:

`pw-link {{[-lI|--links --id]}}`

- Display help:

`pw-link {{[-h|--help]}}`
