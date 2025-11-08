---
title: "Control LXI Instruments - SCPI Commands | Online Free DevTools by Hexmos"
name: lxi
path: "/freedevtools/tldr/linux/lxi/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxi/"
description: "Control LXI compatible instruments using SCPI commands with the lxi tool. Discover devices, capture screenshots, and benchmark performance. Free online tool, no registration required."
category: linux
keywords:
  - lxi control
  - lxi scpi
  - lxi commands
  - lxi instrumentation
  - lxi screenshot
  - lxi benchmark
  - lxi discover
  - network instrument control
  - remote instrument control
  - SCPI command line
features:
  - Discover and manage LXI devices on the network.
  - Execute SCPI commands on connected instruments.
  - Capture screenshots from instruments.
  - Benchmark request and response times for performance analysis.
  - Utilize various plugins for extended instrument control.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lxi

> Control LXI compatible instruments such as oscilloscopes.
> More information: <https://github.com/lxi-tools/lxi-tools#32-lxi>.

- Discover LXI devices on available networks:

`lxi discover`

- Capture a screenshot, detecting a plugin automatically:

`lxi screenshot {{[-a|--address]}} {{ip_address}}`

- Capture a screenshot using a specified plugin:

`lxi screenshot {{[-a|--address]}} {{ip_address}} {{[-p|--plugin]}} {{rigol-1000z}}`

- Send an SCPI command to an instrument:

`lxi scpi {{[-a|--address]}} {{ip_address}} "{{*IDN?}}"`

- Run a benchmark for request and response performance:

`lxi benchmark {{[-a|--address]}} {{ip_address}}`
