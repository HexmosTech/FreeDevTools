---
title: "PipeWire Monitor - Observe PipeWire Objects | Free DevTools"
name: pw-mon
path: /freedevtools/tldr/unknown/pw-mon
canonical: "https://hexmos.com/freedevtools/tldr/unknown/pw-mon/"
description: "Observe PipeWire objects with pw-mon. Monitor default or remote PipeWire instances and customize color configurations. Free online tool, no registration required."
category: unknown
keywords:
- pipewire monitor
- pipewire object monitoring
- pipewire instance monitor
- pw-mon command
- linux pipewire
- audio monitoring
- video monitoring
- pipewire debugging
- pipewire command line tool
- multimedia monitoring
features:
- Monitor PipeWire objects on default instances
- Monitor PipeWire objects on specific remote instances
- Customize color configuration for output
- Display help information for command usage
- Observe real-time updates from PipeWire instances
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pw-mon

> Monitor objects on the PipeWire instance.
> More information: <https://docs.pipewire.org/page_man_pw-mon_1.html>.

- Monitor the default PipeWire instance:

`pw-mon`

- Monitor a specific remote instance:

`pw-mon {{[-r|--remote]}} {{remote_name}}`

- Monitor the default instance specifying a color configuration:

`pw-mon {{[-N|--color]}} {{never|always|auto}}`

- Display help:

`pw-mon {{[-h|--help]}}`
