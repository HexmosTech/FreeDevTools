---
title: "Gather Intel - Amass Intel | Online Free DevTools by Hexmos"
name: amass-intel
path: /freedevtools/tldr/amass/amass-intel
canonical: "https://hexmos.com/freedevtools/tldr/amass/amass-intel/"
description: "Gather open-source intel with Amass Intel. Discover root domains and ASNs related to organizations and IP addresses. Free online tool, no registration required."
category: common
keywords:
- domain reconnaissance
- ASN discovery
- root domain enumeration
- IP address intel
- organization intel
- amass intel
- cybersecurity intel
- open source intelligence
- network enumeration
- attack surface mapping
features:
- Discover root domains by IP address range.
- Enumerate ASNs for a specific organization.
- Identify root domains related to a domain using WHOIS.
- Save reconnaissance results to a text file.
- List all available data sources.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# amass intel

> Collect open source intel on an organisation like root domains and ASNs.
> More information: <https://github.com/owasp-amass/amass/blob/master/doc/user_guide.md#the-intel-subcommand>.

- Find root domains in an IP [addr]ess range:

`amass intel -addr {{192.168.0.1-254}}`

- Use active recon methods:

`amass intel -active -addr {{192.168.0.1-254}}`

- Find root domains related to a [d]omain:

`amass intel -whois -d {{domain_name}}`

- Find ASNs belonging to an [org]anisation:

`amass intel -org {{organisation_name}}`

- Find root domains belonging to a given Autonomous System Number:

`amass intel -asn {{asn}}`

- Save results to a text file:

`amass intel -o {{output_file}} -whois -d {{domain_name}}`

- List all available data sources:

`amass intel -list`
