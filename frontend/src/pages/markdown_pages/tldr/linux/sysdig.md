---
title: "Sysdig - Capture System Calls | Online Free DevTools by Hexmos"
name: sysdig
path: /freedevtools/tldr/linux/sysdig
canonical: "https://hexmos.com/freedevtools/tldr/linux/sysdig/"
description: "Capture system calls with Sysdig for in-depth system analysis. Troubleshoot, filter, and store system events efficiently. Free online tool, no registration required."
category: linux
keywords:
  - system call capture
  - system call analysis
  - system call filtering
  - system call storage
  - linux system troubleshooting
  - linux system analysis
  - container system monitoring
  - container system analysis
  - sysdig chisel
  - sysdig events
features:
  - Capture live system events.
  - Save system events to disk.
  - Read system events from a file.
  - Filter system calls by process name.
  - Utilize chisels for advanced analysis.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sysdig

> System troubleshooting, analysis and exploration.
> Capture, filter and store systemcalls.
> More information: <https://github.com/draios/sysdig/wiki>.

- Capture all the events from the live system and print them to screen:

`sysdig`

- Capture all the events from the live system and save them to disk:

`sysdig {{[-w|--write]}} {{path/to/file}}.scap`

- Read events from a file and print them to screen:

`sysdig {{[-r|--read]}} {{path/to/file}}.scap`

- Filter and Print all the open system calls invoked by cat:

`sysdig proc.name=cat and evt.type=open`

- Register any found plugin and use dummy as input source passing to it open params:

`sysdig -I dummy:'{{parameter}}'`

- List the available chisels:

`sysdig {{[-cl|--list-chisels]}}`

- Use the spy_ip chisel to look at the data exchanged with ip address:

`sysdig {{[-c|--chisel]}} spy_ip {{ip_address}}`
