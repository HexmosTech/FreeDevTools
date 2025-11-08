---
title: "Lookup WHOIS - Query Domain Information | Online Free DevTools by Hexmos"
name: whois
path: "/freedevtools/tldr/common/whois/"
canonical: "https://hexmos.com/freedevtools/tldr/common/whois/"
description: "Query WHOIS records and domain information with WHOIS lookup.  Find ownership details and contact information. Free online tool, no registration required."
category: common
keywords:
- WHOIS lookup
- domain information
- IP address lookup
- WHOIS query
- domain ownership details
- internet registry query
- network information center lookup
- whois linux
- whois macos
- whois common
features:
- Lookup domain name ownership details
- Query IP address information
- Retrieve abuse contact information for IPs
- Display WHOIS record for a given domain
- Show registration information for IP addresses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# whois

> Client for the WHOIS (RFC 3912) protocol.
> More information: <https://manned.org/whois>.

- Get information about a domain name:

`whois {{example.com}}`

- Get information about an IP address:

`whois {{8.8.8.8}}`

- Get abuse contact for an IP address:

`whois -b {{8.8.8.8}}`
