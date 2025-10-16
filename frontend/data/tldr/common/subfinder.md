---
title: "Discover Subdomains - Find Website Subdomains | Online Free DevTools by Hexmos"
name: subfinder
path: "/freedevtools/tldr/common/subfinder/"
canonical: "https://hexmos.com/freedevtools/tldr/common/subfinder/"
description: "Discover valid subdomains with Subfinder, a passive reconnaissance tool. Find subdomains and enhance your bug bounty hunting safely. Free online tool, no registration required."
category: common
keywords:
- subdomain enumeration
- website subdomain finder
- subdomain discovery
- passive reconnaissance
- bug bounty subdomains
- subfinder tool
- dns subdomain finder
- network reconnaissance
- linux subdomain scanner
- command line subdomain enumeration
features:
- Enumerate subdomains for a specified domain.
- Display only the found subdomains.
- Identify active subdomains.
- Utilize all available sources for comprehensive subdomain enumeration.
- Specify custom resolvers for subdomain discovery.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# subfinder

> Discover valid subdomains for websites.
> Designed as a passive framework to be useful for bug bounties and safe for penetration testing.
> More information: <https://docs.projectdiscovery.io/tools/subfinder/running>.

- Find subdomains for a specific domain:

`subfinder {{[-d|-domain]}} {{example.com}}`

- Show only the subdomains found:

`subfinder -silent {{[-d|-domain]}} {{example.com}}`

- Show only active subdomains:

`subfinder {{[-nW|-active]}} {{[-d|-domain]}} {{example.com}}`

- Use all sources for enumeration:

`subfinder -all {{[-d|-domain]}} {{example.com}}`

- Use a given comma-separated list of [r]esolvers:

`subfinder -r {{8.8.8.8,1.1.1.1,...}} {{[-d|-domain]}} {{example.com}}`
