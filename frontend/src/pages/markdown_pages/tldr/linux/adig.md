---
title: "adig DNS Lookup - Query DNS Records | Online Free DevTools by Hexmos"
name: adig
path: /freedevtools/tldr/linux/adig
canonical: "https://hexmos.com/freedevtools/tldr/linux/adig/"
description: "Query DNS records with adig, a powerful command-line tool for detailed DNS information.  Get A records, debug DNS queries, and specify servers and ports. Free online tool, no registration required."
category: linux
keywords:
  - DNS record lookup
  - DNS query command
  - adig command-line
  - DNS server querying
  - network diagnostics
  - command-line DNS tool
  - adig tutorial
  - DNS troubleshooting
  - domain name resolution
  - TCP UDP DNS queries
features:
  - Retrieve A records from DNS servers
  - Display detailed debugging information
  - Specify custom DNS servers for queries
  - Use TCP or UDP ports for DNS communication
  - Query multiple hostnames simultaneously
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# adig

> Print information received from Domain Name System (DNS) servers.
> More information: <https://manned.org/adig>.

- Display A (default) record from DNS for hostname(s):

`adig {{example.com}}`

- Display extra [d]ebugging output:

`adig -d {{example.com}}`

- Connect to a specific DNS [s]erver:

`adig -s {{1.2.3.4}} {{example.com}}`

- Use a specific TCP port to connect to a DNS server:

`adig -T {{port}} {{example.com}}`

- Use a specific UDP port to connect to a DNS server:

`adig -U {{port}} {{example.com}}`
