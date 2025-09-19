---
title: "IP Scanner - Network Scan with Ipcscan | Online Free DevTools by Hexmos"
name: ipscan
path: /freedevtools/tldr/common/ipscan
canonical: "https://hexmos.com/freedevtools/tldr/common/ipscan/"
description: "Network scan with Ipcscan, a simple and fast IP Scanner. Discover connected devices and open ports on your network with this free online tool, no registration required."
category: common
keywords:
- ip scanner
- network scanner
- port scanner
- angry ip scanner
- network discovery
- ip address range scan
- linux ipscan
- macos ipscan
- windows ipscan
- network troubleshooting
features:
- Scan a specific IP address or range of addresses.
- Scan with custom port ranges.
- Save scan results to a file.
- Adjust scan speed to avoid network congestion.
- Display command-line help information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipscan

> A fast network scanner designed to be simple to use.
> Also known as Angry IP Scanner.
> More information: <https://angryip.org/>.

- Scan a specific IP address:

`ipscan {{192.168.0.1}}`

- Scan a range of IP addresses:

`ipscan {{192.168.0.1-254}}`

- Scan a range of IP addresses and save the results to a file:

`ipscan {{192.168.0.1-254}} -o {{path/to/output.txt}}`

- Scan IPs with a specific set of ports:

`ipscan {{192.168.0.1-254}} -p {{80,443,22}}`

- Scan with a delay between requests to avoid network congestion:

`ipscan {{192.168.0.1-254}} -d {{200}}`

- Display help:

`ipscan --help`
