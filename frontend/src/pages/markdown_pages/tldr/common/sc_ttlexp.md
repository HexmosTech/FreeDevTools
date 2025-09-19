---
title: "Sc_ttlexp - Dump TTL Expired Addresses | Online Free DevTools by Hexmos"
name: sc_ttlexp
path: /freedevtools/tldr/common/sc_ttlexp
canonical: "https://hexmos.com/freedevtools/tldr/common/sc_ttlexp/"
description: "Dump TTL expired addresses with sc_ttlexp. Analyze ICMP TTL expired messages to identify source addresses. Free online tool, no registration required."
category: common
keywords:
- Warts TTL expired addresses
- ICMP TTL analysis
- Network address discovery
- Scamper TTL exploration
- Linux network debugging
- CAIDA network tools
- Warts file processing
- TTL expired message analysis
- Source address identification
- Network troubleshooting Linux
features:
- Extract source addresses from ICMP TTL expired messages
- Process multiple warts files simultaneously
- Analyze network paths via TTL expiry
- Identify potential network issues from TTL data
- Decode network hops from TTL messages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sc_ttlexp

> Dump source addresses from ICMP TTL expired messages in `warts` files.
> More information: <https://www.caida.org/catalog/software/scamper/>.

- Output the source address of ICMP TTL expire messages in `warts` files one after the other:

`sc_ttlexp {{path/to/file1.warts path/to/file2.warts ...}}`
