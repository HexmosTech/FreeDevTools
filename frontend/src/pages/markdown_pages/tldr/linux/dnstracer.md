---
title: "DNSTracer - Trace DNS Path | Free DevTools"
name: dnstracer
path: /freedevtools/tldr/unknown/dnstracer
canonical: "https://hexmos.com/freedevtools/tldr/unknown/dnstracer/"
description: "Trace DNS path with DNSTracer. Discover the DNS servers a query traverses to resolve a domain. Free online tool, no registration required."
category: unknown
keywords:
- DNS trace command
- DNS lookup path
- DNS resolver trace
- DNS server path
- DNSTracer online
- DNS query tracer
- DNS information tool
- Domain name resolution
- DNS troubleshooting
- DNS debug tool
features:
- Trace the path of DNS queries
- Identify the DNS servers involved in resolving a domain
- Start tracing from a specific DNS server
- Display all steps during DNS resolution
- Show an overview of received DNS answers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dnstracer

> The dnstracer command determines where a DNS gets its information from.
> More information: <https://manned.org/dnstracer>.

- Find out where your local DNS got the information on www.example.com:

`dnstracer {{www.example.com}}`

- Start with a [s]pecific DNS that you already know:

`dnstracer -s {{dns.example.org}} {{www.example.com}}`

- Only query IPv4 servers:

`dnstracer -4 {{www.example.com}}`

- Retry each request 5 times on failure:

`dnstracer -r {{5}} {{www.example.com}}`

- Display all steps during execution:

`dnstracer -v {{www.example.com}}`

- Display an [o]verview of all received answers after execution:

`dnstracer -o {{www.example.com}}`
