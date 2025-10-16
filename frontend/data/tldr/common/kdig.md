---
title: "DNS Lookup - Query DNS Records with kdig | Online Free DevTools by Hexmos"
name: kdig
path: "/freedevtools/tldr/common/kdig/"
canonical: "https://hexmos.com/freedevtools/tldr/common/kdig/"
description: "Query DNS records with kdig. Perform advanced DNS lookups, specify servers, and use DNS over TLS/HTTPS. Free online tool, no registration required."
category: common
keywords:
- DNS lookup utility
- DNS record query
- kdig DNS server
- DNS over TLS
- DNS over HTTPS
- kdig A record
- kdig AAAA record
- kdig NS record
- kdig linux
- knot DNS
features:
- Perform standard DNS lookups
- Specify a custom DNS server for queries
- Query specific DNS record types (A, AAAA, NS, SOA, DNSKEY, ANY)
- Perform DNS lookups using DNS over TLS (DoT)
- Perform DNS lookups using DNS over HTTPS (DoH)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kdig

> Advanced DNS lookup utility.
> More information: <https://www.knot-dns.cz/docs/latest/html/man_kdig.html>.

- Lookup the IP(s) associated with a hostname (A records):

`kdig {{example.com}}`

- Specify a specific DNS server to query (e.g. Google DNS):

`kdig {{example.com}} @{{8.8.8.8}}`

- Query a specific DNS record type associated with a given domain name:

`kdig {{example.com}} {{A|AAAA|NS|SOA|DNSKEY|ANY}}`

- Lookup the IP(s) associated with a hostname (A records) using DNS over TLS (DoT):

`kdig -d @{{8.8.8.8}} +tls-ca +tls-host={{dns.google}} {{example.com}}`

- Lookup the IP(s) associated with a hostname (A records) using DNS over HTTPS (DoH):

`kdig -d @{{1.1.1.1}} +https +tls-hostname={{1dot1dot1dot1.cloudflare-dns.com}} {{example.com}}`
