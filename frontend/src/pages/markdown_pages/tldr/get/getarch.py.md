---
title: "Determine OS Architecture - Check Remote Windows Systems | Online Free DevTools by Hexmos"
name: getarch.py
path: /freedevtools/tldr/get/getarch.py
canonical: "https://hexmos.com/freedevtools/tldr/get/getarch.py/"
description: "Determine OS architecture with getArch.py. Check the architecture of remote Windows systems using the Impacket suite. Free online tool, no registration required."
category: common
keywords:
- Windows architecture detector
- Remote OS architecture check
- Impacket architecture scanner
- Windows OS version identifier
- x86 x64 architecture discovery
- PowerShell remote architecture
- Python Windows architecture tool
- Network OS detection
- System architecture analysis
- Windows system information retrieval
features:
- Check architecture of a single target system.
- Scan multiple target systems from a file.
- Set custom socket timeout for connection.
- Enable debug mode for detailed output.
- Determine x86 or x64 architecture remotely.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# getArch.py

> Determine the OS architecture (x86 or x64) of a remote Windows system.
> Part of the Impacket suite.
> More information: <https://github.com/fortra/impacket>.

- Check the architecture of a single target system:

`getArch.py -target {{target}}`

- Check the architecture of multiple targets from a file (one per line):

`getArch.py -targets {{path/to/targets_file}}`

- Set a custom socket timeout (default is 2 seconds):

`getArch.py -target {{target}} -timeout {{seconds}}`

- Enable debug mode for detailed output:

`getArch.py -target {{target}} -debug`
