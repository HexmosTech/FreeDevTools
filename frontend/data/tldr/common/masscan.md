---
title: "Network Scan - Discover Open Ports | Online Free DevTools by Hexmos"
name: masscan
path: "/freedevtools/tldr/common/masscan/"
canonical: "https://hexmos.com/freedevtools/tldr/common/masscan/"
description: "Perform network scanning with Masscan to quickly identify open ports and services. Discover vulnerabilities with this powerful scanner, free online, no registration needed."
category: common
keywords:
- network scan tool
- port scanner online
- masscan network scanner
- ip address scanner
- vulnerability scanner
- network security scanner
- masscan command line
- open port detection
- fast network scan
- masscan linux
features:
- Scan entire networks quickly for open ports.
- Exclude specific IP ranges from scans.
- Output scan results in various formats (JSON, XML).
- Perform version detection using banner grabbing.
- Read scan results from binary files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# masscan

> A very fast network scanner.
> Works best with elevated privileges. For help with Nmap compatibility, run `masscan --nmap`.
> More information: <https://manned.org/masscan>.

- Scan an IP or network subnet for port 80:

`masscan {{ip_address|network_prefix}} {{[-p|--ports]}} {{80}}`

- Scan a class B subnet for the top 100 ports at 100,000 packets per second:

`masscan {{10.0.0.0/16}} --top-ports {{100}} --rate {{100000}}`

- Scan a class B subnet avoiding ranges from a specific exclude file:

`masscan {{10.0.0.0/16}} --top-ports {{100}} --excludefile {{path/to/file}}`

- Scan a class B subnet with Nmap-like version detection (banner grabbing):

`masscan {{10.0.0.0/16}} {{[-p|--ports]}} {{22,80}} --banners --rate {{100000}}`

- Scan the Internet for web servers running on port 80 and 443:

`masscan {{0.0.0.0/0}} {{[-p|--ports]}} {{80,443}} --rate {{10000000}}`

- Scan the Internet for DNS servers running on UDP port 53:

`masscan {{0.0.0.0/0}} {{[-p|--ports]}} {{U:53}} --rate {{10000000}}`

- Scan the Internet for a specific port range and export to a file:

`masscan {{0.0.0.0/0}} {{[-p|--ports]}} {{0-65535}} --output-format {{binary|grepable|json|list|xml}} --output-filename {{path/to/file}}`

- Read binary scan results from a file and output to `stdout`:

`masscan --readscan {{path/to/file}}`
