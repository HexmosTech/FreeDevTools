---
title: "Autorecon - Automate Network Reconnaissance | Free DevTools"
name: autorecon
path: /freedevtools/tldr/linux/autorecon
canonical: "https://hexmos.com/freedevtools/tldr/linux/autorecon/"
description: "Automate network reconnaissance with Autorecon. Perform comprehensive network scans and service enumeration quickly and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - network reconnaissance automation
  - autorecon network scan
  - automated service enumeration
  - network vulnerability scanner
  - linux network discovery
  - host discovery scan
  - tcp udp port scan
  - penetration testing scan
  - security audit tool
  - network mapping autorecon
features:
  - Automates network service enumeration
  - Scans multiple target hosts simultaneously
  - Outputs detailed scan results to a directory
  - Supports TCP and UDP port scanning
  - Allows specifying custom port ranges
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# autorecon

> A multi-threaded network reconnaissance tool which performs automated enumeration of services.
> More information: <https://github.com/Tib3rius/AutoRecon>.

- Perform reconnaissance on target host(s) (detailed scan results will be dumped in `./results`):

`sudo autorecon {{host_or_ip1,host_or_ip2,...}}`

- Perform reconnaissance on target(s) from a file:

`sudo autorecon {{[-t|--target-file]}} {{path/to/file}}`

- Output results to a different directory:

`sudo autorecon {{[-o|--output]}} {{path/to/results}} {{host_or_ip1,host_or_ip2,...}}`

- Limit scanning to specific ports and protocols (`T` for TCP, `U` for UDP, `B` for both):

`sudo autorecon {{[-p|--ports]}} {{T:21-25,80,443,U:53,B:123}} {{host_or_ip1,host_or_ip2,...}}`
