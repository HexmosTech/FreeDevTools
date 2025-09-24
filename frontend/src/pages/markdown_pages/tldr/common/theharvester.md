---
title: "Gather Domain Information - theHarvester | Online Free DevTools by Hexmos"
name: theharvester
path: /freedevtools/tldr/common/theharvester
canonical: "https://hexmos.com/freedevtools/tldr/common/theharvester/"
description: "Gather domain information with theHarvester. Uncover emails, subdomains, and hostnames for penetration testing. Free online tool, no registration required."
category: common
keywords:
- domain information gathering
- subdomain discovery
- email harvesting
- open source intelligence
- penetration testing tool
- network reconnaissance
- theHarvester command line
- linux information gathering
- osint tool
- website enumeration
features:
- Gather domain information from multiple sources like Google, Bing, and DuckDuckGo
- Specify the limit of results to retrieve
- Save output in XML and HTML formats
- Target specific domains for information gathering
- Enumerate subdomains and email addresses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# theHarvester

> A tool designed to be used in the early stages of a penetration test.
> More information: <https://github.com/laramies/theHarvester>.

- Gather information on a domain using Google:

`theHarvester --domain {{domain_name}} --source google`

- Gather information on a domain using multiple sources:

`theHarvester --domain {{domain_name}} --source {{duckduckgo,bing,crtsh}}`

- Change the limit of results to work with:

`theHarvester --domain {{domain_name}} --source {{google}} --limit {{200}}`

- Save the output to two files in XML and HTML format:

`theHarvester --domain {{domain_name}} --source {{google}} --file {{output_file_name}}`

- Display help:

`theHarvester --help`
