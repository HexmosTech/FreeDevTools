---
title: "PipeWire Control - Manage Objects via Command Line | Online Free DevTools by Hexmos"
name: pw-cli
path: /freedevtools/tldr/linux/pw-cli
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-cli/"
description: "Control PipeWire audio and video objects with pw-cli. Manage modules, devices, nodes, and links for real-time processing. Free online tool, no registration required."
category: linux
keywords:
- pipewire control
- pipewire command line
- linux audio management
- linux video management
- pw-cli audio
- pw-cli video
- pipewire object management
- pipewire module control
- pipewire device control
- pipewire link management
features:
- List PipeWire objects with filtering
- Inspect specific PipeWire objects by ID
- Monitor PipeWire object changes in real-time
- Manage PipeWire modules from the CLI
- Display detailed help and usage instructions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pw-cli

> Manage a PipeWire instance's modules, objects, nodes, devices, links and much more.
> See also: `wpctl`.
> More information: <https://docs.pipewire.org/page_man_pw-cli_1.html>.

- Print information of all object of a specific type:

`pw-cli {{[ls|list-objects]}} {{Node|Link|Port|Client|Device|Metadata|Factory|Module|Profiler|SecurityContext|Core}}`

- Print information about an object with a specific ID:

`pw-cli {{[i|info]}} {{4}}`

- Print all objects' information:

`pw-cli {{[i|info]}} all`

- Monitor for object changes:

`pw-cli {{[-m|--monitor]}}`

- Display help:

`pw-cli {{[h|help]}}`
