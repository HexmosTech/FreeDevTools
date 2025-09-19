---
title: "Scan Ports - Analyze Network Ports with Rustscan | Online Free DevTools by Hexmos"
name: rustscan
path: /freedevtools/tldr/common/rustscan
canonical: "https://hexmos.com/freedevtools/tldr/common/rustscan/"
description: "Analyze network ports efficiently with Rustscan. Quickly identify open ports and potential vulnerabilities on your network. Free online tool, no registration required."
category: common
keywords:
- network port scanner
- rust port scanner
- fast port scanning
- tcp port scanner
- udp port scanner
- rustscan tutorial
- network security scanning
- open port detection
- network vulnerability assessment
- rustscan nmap integration
features:
- Scans all TCP ports of a specified address.
- Detects services and versions running on open ports.
- Scans a specific range of ports.
- Integrates with Nmap for advanced analysis.
- Supports custom batch size and timeout configurations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rustscan

> Modern Port Scanner written in Rust.
> Note: `nmap` must be installed for some of the examples below to work.
> More information: <https://github.com/bee-san/RustScan/wiki>.

- Scan all ports of one or more comma-delimited addresses using the default values:

`rustscan {{[-a|--addresses]}} {{ip_or_hostname}}`

- Scan the top 1000 ports with service and version detection:

`rustscan --top {{[-a|--addresses]}} {{address_or_addresses}}`

- Scan a specific list of ports:

`rustscan {{[-p|--ports]}} {{port1,port2,...}} {{[-a|--addresses]}} {{address_or_addresses}}`

- Scan a specific range of ports:

`rustscan {{[-r|--range]}} {{start}}-{{end}} {{[-a|--addresses]}} {{address_or_addresses}}`

- Invoke `nmap` functionalities (Nmap's OS detection and default scripts):

`rustscan {{[-a|--addresses]}} {{address_or_addresses}} -- -O {{[-sC|--script=default]}}`

- Scan with custom batch size (default: 4500) and timeout (default: 1500ms):

`rustscan {{[-b|--batch-size]}} {{batch_size}} {{[-t|--timeout]}} {{timeout}} {{[-a|--addresses]}} {{address_or_addresses}}`

- Scan with specific port order:

`rustscan --scan-order {{serial|random}} {{[-a|--addresses]}} {{address_or_addresses}}`

- Scan in greppable mode (only output of the ports, no `nmap`):

`rustscan {{[-g|--greppable]}} {{[-a|--addresses]}} {{address_or_addresses}}`
