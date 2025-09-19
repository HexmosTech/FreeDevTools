---
title: "DNS Lookup - Query DNS Records with Doggo | Online Free DevTools by Hexmos"
name: doggo
path: /freedevtools/tldr/common/doggo
canonical: "https://hexmos.com/freedevtools/tldr/common/doggo/"
description: "Perform DNS lookup with Doggo, a fast DNS client for querying DNS records and resolving domains. Free online tool, no registration required."
category: common
keywords:
- dns lookup
- dns resolver
- dns query
- command line dns
- dns client
- dns records
- domain resolution
- doggo dns
- golang dns
- dns over https
features:
- Perform simple DNS lookups
- Query MX records with specific nameservers
- Utilize DNS over HTTPS for secure lookups
- Output results in JSON format
- Perform reverse DNS lookups
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# doggo

> DNS client for Humans.
> Written in Golang.
> More information: <https://github.com/mr-karan/doggo/blob/main/docs/src/content/docs/guide/reference.md>.

- Perform a simple DNS lookup:

`doggo {{example.com}}`

- Query MX records using a specific nameserver:

`doggo MX {{codeberg.org}} @{{1.1.1.2}}`

- Use DNS over HTTPS:

`doggo {{example.com}} @{{https://dns.quad9.net/dns-query}}`

- Output in the JSON format:

`doggo {{example.com}} {{[-J|--json]}} | jq '{{.responses[0].answers[].address}}'`

- Perform a reverse DNS lookup:

`doggo {{[-x|--reverse]}} {{8.8.4.4}} --short`
