---
title: "Ahost Lookup - Display DNS Records | Online Free DevTools by Hexmos"
name: ahost
path: /freedevtools/tldr/linux/ahost
canonical: "https://hexmos.com/freedevtools/tldr/linux/ahost/"
description: "Display DNS records with Ahost Lookup. Quickly retrieve A and AAAA records for any hostname or IP address on Linux. Free online tool, no registration required."
category: linux
keywords:
- DNS record lookup
- A record lookup linux
- AAAA record lookup linux
- Hostname to IP address linux
- IP address to hostname linux
- DNS resolution linux
- Network troubleshooting linux
- Linux network tools
- Command line DNS lookup
- Ahost command linux
features:
- Resolve hostnames to IP addresses
- Retrieve A records for a hostname
- Retrieve AAAA records for a hostname
- Display debugging output for DNS lookups
- Specify the record type to retrieve (A, AAAA, or U)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ahost

> DNS lookup utility to display the A or AAAA record linked with a hostname or IP address.
> More information: <https://manned.org/ahost>.

- Print an `A` or `AAAA` record associated with a hostname or IP address:

`ahost {{example.com}}`

- Display some extra debugging output:

`ahost -d {{example.com}}`

- Display the record with a specified type:

`ahost -t {{a|aaaa|u}} {{example.com}}`
