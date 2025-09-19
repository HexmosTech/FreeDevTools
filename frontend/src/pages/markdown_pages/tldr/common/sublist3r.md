---
title: "Find Subdomains - Enumerate Subdomains with Sublist3r | Online Free DevTools by Hexmos"
name: sublist3r
path: /freedevtools/tldr/common/sublist3r
canonical: "https://hexmos.com/freedevtools/tldr/common/sublist3r/"
description: "Find subdomains efficiently with Sublist3r. Discover and enumerate subdomains for penetration testing, enhancing your security assessments. Free online tool, no registration required."
category: common
keywords:
- subdomain enumeration
- subdomain finder
- subdomain scanner
- penetration testing subdomain
- sublist3r command
- sublist3r usage
- security assessment tool
- domain reconnaissance
- subdomain discovery
- osint subdomain
features:
- Enumerate subdomains for a given domain quickly.
- Perform brute force subdomain discovery.
- Save discovered subdomains to a specified output file.
- Automate subdomain enumeration for penetration testing.
- Discover subdomains using multiple search engines.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sublist3r

> Fast subdomains enumeration tool for penetration testers.
> More information: <https://github.com/aboul3la/Sublist3r>.

- Find subdomains for a domain:

`sublist3r --domain {{domain_name}}`

- Find subdomains for a domain, also enabling brute force search:

`sublist3r --domain {{domain_name}} --bruteforce`

- Save the found subdomains to a text file:

`sublist3r --domain {{domain_name}} --output {{path/to/output_file}}`

- Display help:

`sublist3r --help`
