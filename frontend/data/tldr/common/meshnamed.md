---
title: "Resolve Meshnames - Distributed Naming with Meshnamed | Online Free DevTools by Hexmos"
name: meshnamed
path: "/freedevtools/tldr/common/meshnamed/"
canonical: "https://hexmos.com/freedevtools/tldr/common/meshnamed/"
description: "Resolve meshnames with Meshnamed for IPv6 mesh networks. Convert addresses to names and vice-versa. Free online tool, no registration required."
category: common
keywords:
- meshname resolver
- ipv6 mesh network naming
- distributed naming system
- meshnamed command
- meshname to ipv6 conversion
- ipv6 to meshname conversion
- mesh network dns server
- linux meshname
- macos meshname
- command line meshname tool
features:
- Start a local meshname DNS server
- Resolve IPv6 addresses to meshnames
- Resolve meshnames to IPv6 addresses
- Support for distributed naming in IPv6 mesh networks
- Command-line interface for meshname operations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# meshnamed

> Distributed naming system for IPv6 mesh networks.
> More information: <https://github.com/zhoreeq/meshname/>.

- Start a local meshname DNS server:

`meshnamed`

- Convert an IPv6 address into a meshname:

`meshnamed -getname {{200:6fc8:9220:f400:5cc2:305a:4ac6:967e}}`

- Convert a meshname to an IPv6 address:

`meshnamed -getip {{aiag7sesed2aaxgcgbnevruwpy}}`
