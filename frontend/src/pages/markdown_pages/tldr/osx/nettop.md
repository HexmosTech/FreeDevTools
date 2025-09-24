---
title: "Nettop - Monitor Network Activity | Online Free DevTools by Hexmos"
name: nettop
path: /freedevtools/tldr/osx/nettop
canonical: "https://hexmos.com/freedevtools/tldr/osx/nettop/"
description: "Monitor network activity with Nettop, a command-line network monitoring tool for macOS. Analyze network traffic, identify bottlenecks, and optimize performance. Free online tool, no registration required."
category: osx
keywords:
- network monitoring tool
- network activity monitor
- osx network analysis
- tcp udp monitor
- process network usage
- nettop command line
- macos network tool
- network troubleshooting
- network traffic analysis
- socket monitoring
features:
- Monitor TCP and UDP sockets from all interfaces.
- Monitor TCP sockets from Loopback interfaces.
- Monitor network activity for a specific process.
- Display a per-process summary of network usage.
- Monitor changes in network activity at specified intervals.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nettop

> Display updated information about the network.
> More information: <https://keith.github.io/xcode-man-pages/nettop.1.html>.

- Monitor TCP and UDP sockets from all interfaces:

`nettop`

- Monitor TCP sockets from Loopback interfaces:

`nettop -m {{tcp}} -t {{loopback}}`

- Monitor a specific process:

`nettop -p "{{process_id|process_name}}"`

- Display a per-process summary:

`nettop -P`

- Print 10 samples of network information:

`nettop -l {{10}}`

- Monitor changes every 5 seconds:

`nettop -d -s {{5}}`

- While running nettop, list interactive commands:

`<h>`

- Display help:

`nettop -h`
