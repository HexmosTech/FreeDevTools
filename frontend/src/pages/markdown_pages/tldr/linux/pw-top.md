---
title: "Monitor PipeWire - Real-time Statistics with pw-top | Free DevTools"
name: pw-top
path: /freedevtools/tldr/linux/pw-top
canonical: "https://hexmos.com/freedevtools/tldr/linux/pw-top/"
description: "Monitor PipeWire nodes and devices in real-time with pw-top.  View detailed statistics and troubleshoot audio/video issues effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - PipeWire monitoring tool
  - Linux audio monitoring
  - PipeWire statistics command
  - pw-top real-time data
  - PipeWire node visualization
  - Linux system monitoring
  - PipeWire device information
  - real-time PipeWire analysis
  - command-line PipeWire tool
  - PipeWire troubleshooting utility
features:
  - Displays real-time statistics of PipeWire nodes and devices.
  - Provides an interactive view of PipeWire activity.
  - Allows monitoring of remote PipeWire instances.
  - Offers batch mode for periodic data output.
  - Enables specifying the number of iterations in batch mode.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pw-top

> View the PipeWire nodes and devices statistics in real-time.
> See also: `pipewire`, `pw-dump`, `pw-cli`, `pw-profiler`.
> More information: <https://docs.pipewire.org/page_man_pw-top_1.html>.

- Display an interactive view of PipeWire nodes and devices:

`pw-top`

- Monitor a remote instance:

`pw-top {{[-r|--remote]}} {{remote_name}}`

- Print information periodically instead of running in interactive mode:

`pw-top {{[-b|--batch-mode]}}`

- Print information periodically for a specific number of times:

`pw-top {{[-b|--batch-mode]}} {{[-n|--iterations]}} {{3}}`
