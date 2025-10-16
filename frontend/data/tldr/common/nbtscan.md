---
title: "NetBIOS Scan - Discover Network Names with nbtscan | Online Free DevTools by Hexmos"
name: nbtscan
path: "/freedevtools/tldr/common/nbtscan/"
canonical: "https://hexmos.com/freedevtools/tldr/common/nbtscan/"
description: "Discover NetBIOS names with nbtscan. Easily scan your network for NetBIOS information and troubleshoot connectivity issues. Free online tool, no registration required."
category: common
keywords:
- NetBIOS name scanner
- network discovery tool
- scan network names
- NetBIOS information
- Windows network scan
- linux network scan
- nbtscan network scan
- IP address scan
- network troubleshooting
- NetBIOS enumeration
features:
- Scan entire networks for NetBIOS information
- Scan single IP addresses for NetBIOS information
- Display verbose output for detailed scanning
- Output scan results in /etc/hosts format
- Read IP addresses to scan from a text file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nbtscan

> Scan networks for NetBIOS name information.
> More information: <https://github.com/resurrecting-open-source-projects/nbtscan>.

- Scan a network for NetBIOS names:

`nbtscan {{192.168.0.1/24}}`

- Scan a single IP address:

`nbtscan {{192.168.0.1}}`

- Display verbose output:

`nbtscan -v {{192.168.0.1/24}}`

- Display output in `/etc/hosts` format:

`nbtscan -e {{192.168.0.1/24}}`

- Read IP addresses/networks to scan from a file:

`nbtscan -f {{path/to/file.txt}}`
