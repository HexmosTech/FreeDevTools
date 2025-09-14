---
title: "DNSrecon - Enumerate DNS Records | Free DevTools"
name: dnsrecon
path: /freedevtools/tldr/linux/dnsrecon
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnsrecon/"
description: "Enumerate DNS records effectively with DNSrecon.  Perform zone transfers, brute-force attacks, and reverse lookups. Free online tool, no registration required."
category: linux
keywords:
  - DNS enumeration tool
  - DNS record lookup
  - zone transfer tool
  - DNS brute force
  - reverse DNS lookup
  - DNS cache snooping
  - DNS zone walking
  - SPF record analysis
  - Google DNS enumeration
  - domain reconnaissance
features:
  - Perform zone transfers to retrieve DNS records.
  - Conduct brute-force attacks against DNS servers.
  - Execute reverse lookups of IP addresses from SPF records.
  - Perform Google DNS enumeration for comprehensive data gathering.
  - Enable DNS cache snooping for insightful information retrieval.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dnsrecon

> DNS enumeration tool.
> More information: <https://github.com/darkoperator/dnsrecon>.

- Scan a domain and save the results to an SQLite database:

`dnsrecon {{[-d|--domain]}} {{example.com}} --db {{path/to/database.sqlite}}`

- Scan a domain, specifying the nameserver and performing a zone transfer:

`dnsrecon {{[-d|--domain]}} {{example.com}} {{[-n|--name_server]}} {{nameserver.example.com}} {{[-t|--type]}} axfr`

- Scan a domain, using a brute-force attack and a dictionary of subdomains and hostnames:

`dnsrecon {{[-d|--domain]}} {{example.com}} {{[-D|--dictionary]}} {{path/to/dictionary.txt}} {{[-t|--type]}} brt`

- Scan a domain, performing a reverse lookup of IP ranges from the SPF record and saving the results to a JSON file:

`dnsrecon {{[-d|--domain]}} {{example.com}} -s {{[-j|--json]}}`

- Scan a domain, performing a Google enumeration and saving the results to a CSV file:

`dnsrecon {{[-d|--domain]}} {{example.com}} -g {{[-c|--csv]}}`

- Scan a domain, performing DNS cache snooping:

`dnsrecon {{[-d|--domain]}} {{example.com}} {{[-t|--type]}} snoop {{[-n|--name_server]}} {{nameserver.example.com}} {{[-D|--dictionary]}} {{path/to/dictionary.txt}}`

- Scan a domain, performing zone walking:

`dnsrecon {{[-d|--domain]}} {{example.com}} {{[-t|--type]}} zonewalk`
