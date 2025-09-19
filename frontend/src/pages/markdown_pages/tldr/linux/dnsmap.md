---
title: "DNSmap - Scan Subdomains | Online Free DevTools by Hexmos"
name: dnsmap
path: /freedevtools/tldr/linux/dnsmap
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnsmap/"
description: "Scan subdomains with DNSmap, a powerful network reconnaissance tool. Discover hidden subdomains and identify potential security vulnerabilities. Free online tool, no registration required."
category: linux
keywords:
- dns subdomain scanner
- dns subdomain finder
- subdomain enumeration
- network reconnaissance
- dnsmap linux
- subdomain discovery tool
- dns enumeration tool
- offensive security
- penetration testing tool
- domain information gathering
features:
- Scan domains for common subdomains using a built-in wordlist
- Check for subdomains using a custom wordlist
- Store scan results to a CSV file
- Ignore specified IP addresses to avoid false positives
- Perform network reconnaissance for security assessments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dnsmap

> The dnsmap command scans a domain for common subdomains e.g. smtp.domain.org.
> More information: <https://github.com/resurrecting-open-source-projects/dnsmap>.

- Scan for subdomains using the internal wordlist:

`dnsmap {{example.com}}`

- Specify a list of subdomains to check for:

`dnsmap {{example.com}} -w {{path/to/wordlist.txt}}`

- Store results to a CSV file:

`dnsmap {{example.com}} -c {{path/to/file.csv}}`

- Ignore 2 IPs that are false positives (up to 5 possible):

`dnsmap {{example.com}} -i {{123.45.67.89,98.76.54.32}}`
