---
title: "ASNmap Lookup - Map Network Ranges | Online Free DevTools by Hexmos"
name: asnmap
path: /freedevtools/tldr/common/asnmap
canonical: "https://hexmos.com/freedevtools/tldr/common/asnmap/"
description: "Map network ranges with ASNmap, a powerful ASN lookup tool. Discover CIDR blocks and organization network information quickly and easily. Free online tool, no registration required."
category: common
keywords:
- ASN lookup
- network range mapper
- CIDR lookup
- autonomous system number
- IP address range
- domain ASN mapping
- organization network mapping
- ASN information retrieval
- network reconnaissance tool
- command line ASN tool
features:
- Lookup CIDR ranges by ASN
- Map network ranges for IP addresses
- Discover ASN information for domains
- Identify network ownership by organization
- Output results in JSON and CSV formats
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# asnmap

> A Go CLI tool for mapping organization network ranges using ASN information.
> Note: An API key is required from ProjectDiscovery Cloud Platform for the tool to work.
> More information: <https://github.com/projectdiscovery/asnmap>.

- Lookup CIDR ranges for an ASN:

`asnmap {{[-a|-asn]}} {{AS5650}} -silent`

- Lookup CIDR ranges for an IP address:

`asnmap {{[-i|-ip]}} {{100.19.12.21}} -silent`

- Lookup CIDR ranges for a domain:

`asnmap {{[-d|-domain]}} {{example.com}} -silent`

- Lookup CIDR ranges for an organization:

`asnmap -org {{GOOGLE}} -silent`

- Lookup CIDR ranges from a file of targets:

`asnmap {{[-f|-file]}} {{targets.txt}} -silent`

- Output results in JSON format:

`asnmap {{[-d|-domain]}} {{facebook.com}} {{[-j|-json]}} -silent`

- Output results in CSV format:

`asnmap {{[-a|-asn]}} {{AS394161}} {{[-c|-csv]}} -silent`

- Update asnmap to the latest version:

`asnmap {{[-up|-update]}}`
