---
title: "DNS Lookup - Analyze DNS Records | Free DevTools"
name: dig
path: /freedevtools/tldr/common/dig
canonical: "https://hexmos.com/freedevtools/tldr/common/dig/"
description: "Analyze DNS records quickly with dig. Perform DNS lookups, query specific record types, and troubleshoot network issues. Free online tool, no registration required."
category: common
keywords:
- DNS lookup online
- DNS record analyzer
- DNS troubleshooting tool
- dig command linux
- dig command macos
- dig command windows
- DNS server query
- reverse DNS lookup
- authoritative name server
- DNS trace route
features:
- Perform DNS lookups for A records
- Query specific DNS record types (A, MX, TXT, CNAME, NS)
- Specify alternate DNS servers to query
- Perform reverse DNS lookups on IP addresses
- Trace the path to resolve a domain name
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dig

> DNS lookup utility.
> More information: <https://manned.org/dig>.

- Lookup the IP(s) associated with a hostname (A records):

`dig +short {{example.com}}`

- Get a detailed answer for a given domain (A records):

`dig +noall +answer {{example.com}}`

- Query a specific DNS record type associated with a given domain name:

`dig +short {{example.com}} {{A|MX|TXT|CNAME|NS}}`

- Specify an alternate DNS server to query and optionally use DNS over TLS (DoT):

`dig {{+tls}} @{{1.1.1.1|8.8.8.8|9.9.9.9|...}} {{example.com}}`

- Perform a reverse DNS lookup on an IP address (PTR record):

`dig -x {{8.8.8.8}}`

- Find authoritative name servers for the zone and display SOA records:

`dig +nssearch {{example.com}}`

- Perform iterative queries and display the entire trace path to resolve a domain name:

`dig +trace {{example.com}}`

- Query a DNS server over a non-standard [p]ort using the TCP protocol:

`dig +tcp -p {{port}} @{{dns_server_ip}} {{example.com}}`
