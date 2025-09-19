---
title: "Host Lookup - Query DNS Records | Online Free DevTools by Hexmos"
name: host
path: /freedevtools/tldr/common/host
canonical: "https://hexmos.com/freedevtools/tldr/common/host/"
description: "Lookup DNS records with Host Lookup. Resolve domain names to IP addresses and retrieve different DNS record types. Free online tool, no registration required."
category: common
keywords:
- DNS lookup tool
- domain name resolver
- A record lookup
- MX record lookup
- CNAME record lookup
- TXT record lookup
- IP address reverse lookup
- Linux host command
- MacOS host command
- network troubleshooting
features:
- Resolve domain names to IP addresses
- Retrieve A, AAAA, MX, CNAME, and TXT records
- Perform reverse IP address lookups
- Specify an alternate DNS server
- Troubleshoot network connectivity issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# host

> Lookup Domain Name Server.
> More information: <https://manned.org/host>.

- Lookup A, AAAA, and MX records of a domain:

`host {{domain}}`

- Lookup a field (CNAME, TXT, ...) of a domain:

`host -t {{field}} {{domain}}`

- Reverse lookup an IP:

`host {{ip_address}}`

- Specify an alternate DNS server to query:

`host {{domain}} {{8.8.8.8}}`
