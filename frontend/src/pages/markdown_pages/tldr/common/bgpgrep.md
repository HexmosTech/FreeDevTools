---
title: "BGP Filter - Analyze BGP Data | Online Free DevTools by Hexmos"
name: bgpgrep
path: /freedevtools/tldr/common/bgpgrep
canonical: "https://hexmos.com/freedevtools/tldr/common/bgpgrep/"
description: "Filter BGP data with bgpgrep. Analyze MRT dumps, filter by peer ASN or IP, and examine AS paths. Free online tool, no registration required."
category: common
keywords:
- BGP data analysis
- MRT dump filter
- BGP route filtering
- ASN filter
- IP address filter
- AS path analysis
- bgpgrep command
- BGP data extraction
- network route analysis
- BGP community analysis
features:
- Filter BGP data from MRT dumps
- Filter routes by peer ASN or IP address
- Analyze routes with specific ASNs in the AS path
- List routes leading to a specific address
- Filter routes based on BGP communities
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bgpgrep

> Filter and print BGP data within MRT dumps.
> Can read files compressed with `gzip`, `bzip2` and `xz`.
> More information: <https://codeberg.org/1414codeforge/ubgpsuite>.

- List all routes:

`bgpgrep {{master6.mrt}}`

- List routes received from a specific peer, determined by the peer's AS number:

`bgpgrep {{master4.mrt}} -peer {{64498}}`

- List routes received from a specific peer, determined by the peer's IP address:

`bgpgrep {{master4.mrt.bz2}} -peer {{2001:db8:dead:cafe:acd::19e}}`

- List routes which have certain ASNs in their AS path:

`bgpgrep {{master6.mrt.bz2}} -aspath '{{64498 64510}}'`

- List routes that lead to a specific address:

`bgpgrep {{master6.mrt.bz2}} -supernet '{{2001:db8:dead:cafe:aef::5}}'`

- List routes that have communities from a specific AS:

`bgpgrep {{master4.mrt}} -communities \( '{{64497}}:*' \)`
