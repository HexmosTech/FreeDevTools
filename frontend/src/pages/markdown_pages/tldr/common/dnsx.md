---
title: "DNS Lookup - Perform DNS Queries with dnsx | Online Free DevTools by Hexmos"
name: dnsx
path: /freedevtools/tldr/common/dnsx
canonical: "https://hexmos.com/freedevtools/tldr/common/dnsx/"
description: "Perform DNS lookup quickly with dnsx, a versatile DNS toolkit. Resolve domains, extract records, and debug DNS configurations easily. Free online tool, no registration required."
category: common
keywords:
- DNS lookup tool
- DNS query resolver
- DNS record extraction
- Domain name resolution
- Subdomain enumeration
- DNS brute forcing
- DNS troubleshooting
- Linux DNS tools
- macOS DNS tools
- Command-line DNS utility
features:
- Perform various DNS queries like A, AAAA, CNAME, TXT, MX
- Brute force DNS records using wordlists
- Extract specific DNS records from a list of subdomains
- Display raw DNS response with specified resolvers and retry attempts
- Output DNS response only, omitting queried domain or subdomain
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dnsx

> A fast and multi-purpose DNS toolkit to run multiple DNS queries.
> Note: Input to `dnsx` needs to be passed through `stdin` (pipe `|`) in some cases.
> See also: `dig`, `dog`, `dnstracer`.
> More information: <https://docs.projectdiscovery.io/tools/dnsx/running>.

- Query the A record of a (sub)domain and show [re]sponse received:

`echo {{example.com}} | dnsx -a {{[-re|-resp]}}`

- Query all the DNS records (A, AAAA, CNAME, NS, TXT, SRV, PTR, MX, SOA, AXFR, CAA):

`dnsx -recon {{[-re|-resp]}} <<< {{example.com}}`

- Query a specific type of DNS record:

`echo {{example.com}} | dnsx {{[-re|-resp]}} -{{a|aaaa|cname|ns|txt|srv|ptr|mx|soa|any|axfr|caa}}`

- Output response only (do not show the queried domain or subdomain):

`echo {{example.com}} | dnsx {{[-ro|-resp-only]}}`

- Display raw response of a query, specifying resolvers to use and retry attempts for failures:

`echo {{example.com}} | dnsx -{{debug|raw}} {{[-r|-resolver]}} {{1.1.1.1,8.8.8.8,...}} -retry {{number}}`

- Brute force DNS records using a placeholder:

`dnsx {{[-d|-domain]}} {{FUZZ.example.com}} {{[-w|-wordlist]}} {{path/to/wordlist.txt}} {{[-re|-resp]}}`

- Brute force DNS records from a list of domains and wordlists, appending output to a file with no color codes:

`dnsx {{[-d|-domain]}} {{path/to/domain.txt}} {{[-w|-wordlist]}} {{path/to/wordlist.txt}} {{[-re|-resp]}} {{[-o|-output]}} {{path/to/output.txt}} {{[-nc|-no-color]}}`

- Extract `CNAME` records for the given list of subdomains, with rate limiting DNS queries per second:

`subfinder -silent {{[-d|-domain]}} {{example.com}} | dnsx -cname {{[-re|-resp]}} {{[-rl|-rate-limit]}} {{number}}`
