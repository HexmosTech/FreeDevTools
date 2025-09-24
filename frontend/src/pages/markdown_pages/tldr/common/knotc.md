---
title: "Knotc - Control Knot DNS Server Configuration | Online Free DevTools by Hexmos"
name: knotc
path: /freedevtools/tldr/common/knotc
canonical: "https://hexmos.com/freedevtools/tldr/common/knotc/"
description: "Control Knot DNS server configuration with Knotc. Manage zones, set DNS records, and read server configurations effortlessly. Free online tool, no registration required."
category: common
keywords:
- Knot DNS control
- DNS server management
- Knotc zone editor
- DNS record setter
- Knot DNS configuration
- Knot DNS commands
- Command line DNS
- Linux DNS management
- Zone management Knot
- DNS server command line
features:
- Start editing DNS zones
- Set DNS records with TTL
- Commit changes to DNS zones
- Read current zone data
- Read server configurations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# knotc

> Control knot DNS server.
> More information: <https://www.knot-dns.cz/docs/latest/html/man_knotc.html>.

- Start editing a zone:

`knotc zone-begin {{zone}}`

- Set an A record with TTL of 3600:

`knotc zone-set {{zone}} {{subdomain}} 3600 A {{ip_address}}`

- Finish editing the zone:

`knotc zone-commit {{zone}}`

- Get the current zone data:

`knotc zone-read {{zone}}`

- Get the current server configuration:

`knotc conf-read server`
