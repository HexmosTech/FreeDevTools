---
title: "PipeWire Dump - Generate JSON State | Online Free DevTools by Hexmos"
name: pw-dump
path: /freedevtools/tldr/linux/pw-dump
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-dump/"
description: "Generate PipeWire state dumps with pw-dump. Analyze audio graph configurations and debug multimedia setups using command line. Free online tool, no registration required."
category: linux
keywords:
- PipeWire JSON dump
- PipeWire state analysis
- Linux audio graph
- pw-dump command
- multimedia configuration export
- PipeWire debugging tool
- audio server state
- Linux pw-dump
- PipeWire monitoring
- JSON configuration file
features:
- Dump PipeWire's current state as JSON
- Monitor PipeWire state changes
- Print JSON representation of a specific object
- Export remote PipeWire instance state to a file
- Customize color configuration for output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pw-dump

> Dump PipeWire's current state as JSON, including the information on nodes, devices, modules, ports, and other objects.
> See also: `pw-mon`.
> More information: <https://docs.pipewire.org/page_man_pw-dump_1.html>.

- Print a JSON representation of the default PipeWire instance's current state:

`pw-dump`

- Print a JSON representation of an object:

`pw-dump {{object_id}}`

- Dump the current state monitoring changes, printing it again:

`pw-dump {{[-m|--monitor]}}`

- Dump the current state of a remote instance to a file:

`pw-dump {{[-r|--remote]}} {{remote_name}} > {{path/to/dump_file.json}}`

- Set a color configuration:

`pw-dump {{[-C|--color]}} {{never|always|auto}}`

- Display help:

`pw-dump {{[-h|--help]}}`
