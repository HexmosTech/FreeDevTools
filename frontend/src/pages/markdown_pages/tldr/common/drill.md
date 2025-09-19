---
title: "DNS Drill - Perform DNS Queries | Online Free DevTools by Hexmos"
name: drill
path: /freedevtools/tldr/common/drill
canonical: "https://hexmos.com/freedevtools/tldr/common/drill/"
description: "Perform DNS queries with DNS Drill. Lookup IP addresses, MX records, and more for any domain. Free online tool, no registration required."
category: common
keywords:
- DNS queries
- DNS lookup
- domain name resolution
- DNS record analysis
- reverse DNS lookup
- DNSSEC trace
- command line DNS
- Linux DNS tools
- MacOS DNS tools
- network troubleshooting
features:
- Lookup IP addresses associated with hostnames (A records).
- Query mail servers associated with a domain (MX records).
- Retrieve all record types for a domain.
- Specify alternate DNS servers to query.
- Perform reverse DNS lookups on IP addresses (PTR records).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# drill

> Perform various DNS queries.
> More information: <https://manned.org/drill>.

- Lookup the IP(s) associated with a hostname (A records):

`drill {{example.com}}`

- Lookup the mail server(s) associated with a given domain name (MX record):

`drill mx {{example.com}}`

- Get all types of records for a given domain name:

`drill any {{example.com}}`

- Specify an alternate DNS server to query:

`drill {{example.com}} @{{8.8.8.8}}`

- Perform a reverse DNS lookup on an IP address (PTR record):

`drill -x {{8.8.8.8}}`

- Perform DNSSEC trace from root servers down to a domain name:

`drill -TD {{example.com}}`

- Show DNSKEY record(s) for a domain name:

`drill -s dnskey {{example.com}}`
