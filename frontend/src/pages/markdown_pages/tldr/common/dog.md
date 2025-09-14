---
title: "DNS Lookup - Query DNS Records | Free DevTools"
name: dog
path: /freedevtools/tldr/common/dog
canonical: "https://hexmos.com/freedevtools/tldr/common/dog/"
description: "Lookup DNS records with dog, a command-line DNS lookup utility. Supports DNS-over-TLS and DNS-over-HTTPS. Free online tool, no registration required."
category: common
keywords:
- dns lookup command
- dns query linux
- dns records viewer
- dns over tls
- dns over https
- dog dns utility
- domain name lookup
- linux networking tool
- command line dns
- dig alternative
features:
- Lookup A records for hostnames
- Query MX records for domains
- Specify custom DNS servers
- Query over TCP or UDP
- Utilize DNS over HTTPS (DoH)
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dog

> DNS lookup utility.
> It has colorful output, supports DNS-over-TLS and DNS-over-HTTPS protocols, and can emit JSON.
> More information: <https://github.com/ogham/dog#examples>.

- Lookup the IP(s) associated with a hostname (A records):

`dog {{example.com}}`

- Query the MX records type associated with a given domain name:

`dog {{example.com}} MX`

- Specify a specific DNS server to query (e.g. Cloudflare):

`dog {{example.com}} MX @{{1.1.1.1}}`

- Query over TCP rather than UDP:

`dog {{example.com}} MX @{{1.1.1.1}} {{[-T|--tcp]}}`

- Query the MX records type associated with a given domain name over TCP using explicit arguments:

`dog {{[-q|--query]}} {{example.com}} {{[-t|--type]}} MX {{[-n|--nameserver]}} {{1.1.1.1}} {{[-T|--tcp]}}`

- Lookup the IP(s) associated with a hostname (A records) using DNS over HTTPS (DoH):

`dog {{example.com}} {{[-H|--https]}} @{{https://cloudflare-dns.com/dns-query}}`
