---
title: "PipeWire Config - List Configuration Paths | Online Free DevTools by Hexmos"
name: pw-config
path: /freedevtools/tldr/linux/pw-config
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-config/"
description: "List configuration paths with PipeWire Config. Inspect configuration files and sections for PipeWire server and clients. Free online tool, no registration required."
category: linux
keywords:
  - pipewire configuration
  - pipewire config list
  - pw-config command
  - pipewire pulse configuration
  - linux pipewire
  - pipewire server config
  - pipewire client config
  - audio configuration
  - pipewire modules
  - pipewire context properties
features:
  - List available PipeWire configuration files
  - Inspect PipeWire PulseAudio server configuration
  - Display configuration sections used by PipeWire
  - Show context properties fragments
  - Merge and reformat context modules
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pw-config

> List configuration paths and sections that will be used by the PipeWire server and clients.
> More information: <https://docs.pipewire.org/page_man_pw-config_1.html>.

- List all configuration files that will be used:

`pw-config`

- List all configuration files that will be used by the PipeWire PulseAudio server:

`pw-config {{[-n|--name]}} pipewire-pulse.conf`

- List all configuration sections used by the PipeWire PulseAudio server:

`pw-config {{[-n|--name]}} pipewire-pulse.conf list`

- List the `context.properties` fragments used by the JACK clients:

`pw-config {{[-n|--name]}} jack.conf list context.properties`

- List the merged `context.properties` used by the JACK clients:

`pw-config {{[-n|--name]}} jack.conf merge context.properties`

- List the merged `context.modules` used by the PipeWire server and reformat:

`pw-config {{[-n|--name]}} pipewire.conf {{[-r|--recurse]}} merge context.modules`

- Display help:

`pw-config {{[-h|--help]}}`
