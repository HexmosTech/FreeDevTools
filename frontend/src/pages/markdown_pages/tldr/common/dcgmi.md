---
title: "DCGMI Control - Manage NVIDIA GPUs | Free DevTools"
name: dcgmi
path: /freedevtools/tldr/common/dcgmi
canonical: "https://hexmos.com/freedevtools/tldr/common/dcgmi/"
description: "Control NVIDIA Data Center GPUs with DCGMI command line tool. Monitor GPU performance, manage processes, and configure devices using command line. Free online tool, no registration required."
category: common
keywords:
- NVIDIA DCGMI control
- GPU management Linux
- Data center GPU monitoring
- DCGMI command line
- NVIDIA GPU performance metrics
- GPU process monitoring
- DCGMI group configuration
- Linux GPU admin tools
- DCGMI device discovery
- NVIDIA DCGMI usage statistics
features:
- Discover available GPUs and associated processes
- List and manage DCGMI groups
- Display real-time GPU usage statistics
- Provide help information for commands
- Display help for specific DCGMI subcommands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dcgmi

> Manage and monitor NVIDIA Data Center GPUs.
> More information: <https://developer.nvidia.com/dcgm>.

- Display information on all available GPUs and processes using them:

`dcgmi discovery {{[-l|--list]}}`

- List created groups:

`dcgmi group {{[-l|--list]}}`

- Display current usage statistics for device 0:

`dcgmi dmon {{[-e|--field-id]}}{{1001,1002,1003,1004,1005}}`

- Display help:

`dcgmi {{[-h|--help]}}`

- Display help for a subcommand:

`dcgmi {{subcommand}} {{[-h|--help]}}`
