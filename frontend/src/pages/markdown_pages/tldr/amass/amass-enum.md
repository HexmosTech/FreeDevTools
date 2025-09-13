---
title: "Enumerate Subdomains - Amass Enum | Free DevTools"
name: amass-enum
path: /freedevtools/tldr/common/amass-enum
canonical: "https://hexmos.com/freedevtools/tldr/common/amass-enum/"
description: "Enumerate subdomains quickly with Amass Enum. Discover subdomains, verify them actively and perform brute-force searches. Free online tool, no registration required."
category: common
keywords:
- subdomain enumeration
- amass subdomain finder
- domain subdomain discovery
- amass enum command
- network reconnaissance tool
- open source intelligence
- osint subdomain enumeration
- amass dns enumeration
- linux subdomain finder
- amass subdomain brute force
features:
- Discover subdomains for a given domain
- Actively verify found subdomains by resolving them
- Perform brute-force subdomain discovery
- Save enumeration results to a text file
- Output detailed results to a specified directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# amass enum

> Find subdomains of a domain.
> More information: <https://github.com/owasp-amass/amass/blob/master/doc/user_guide.md#the-enum-subcommand>.

- Find (passively) subdomains of a [d]omain:

`amass enum -d {{domain_name}}`

- Find subdomains of a [d]omain and actively verify them attempting to resolve the found subdomains:

`amass enum -active -d {{domain_name}} -p {{80,443,8080}}`

- Do a brute force search for sub[d]omains:

`amass enum -brute -d {{domain_name}}`

- Save the results to a text file:

`amass enum -o {{output_file}} -d {{domain_name}}`

- Save terminal output to a file and other detailed output to a directory:

`amass enum -o {{output_file}} -dir {{path/to/directory}} -d {{domain_name}}`

- List all available data sources:

`amass enum -list`
