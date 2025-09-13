---
title: "Control Route53 DNS - CLI53 Command | Free DevTools"
name: cli53
path: /freedevtools/tldr/common/cli53
canonical: "https://hexmos.com/freedevtools/tldr/common/cli53/"
description: "Control Route53 DNS zones with CLI53. Easily manage DNS records, create domains, and export zone files. Free online tool, no registration required."
category: common
keywords:
- Route53 DNS Control
- DNS Zone Management
- AWS DNS Command Line
- Route53 CLI Tool
- CLI53 DNS Manager
- AWS DNS Automation
- Command Line DNS
- Linux Route53
- MacOS Route53
- DNS Record Editor
features:
- List existing Route53 domains
- Create new Route53 DNS zones
- Export Route53 zone files to stdout
- Create and manage DNS records (A, CNAME)
- Delete specific DNS records from Route53
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cli53

> Command line tool for Amazon Route 53.
> More information: <https://github.com/barnybug/cli53>.

- List domains:

`cli53 list`

- Create a domain:

`cli53 create {{example.com}} --comment "{{comment}}"`

- Export a bind zone file to `stdout`:

`cli53 export {{example.com}}`

- Create a `www` subdomain pointing to a relative record in the same zone:

`cli53 {{[rc|rrcreate]}} {{example.com}} {{'www 300 CNAME lb'}}`

- Create a `www` subdomain pointing to an external address (must end with a dot):

`cli53 {{[rc|rrcreate]}} {{example.com}} {{'www 300 CNAME lb.example.com.'}}`

- Create a `www` subdomain pointing to an IP address:

`cli53 {{[rc|rrcreate]}} {{example.com}} {{'www 300 A 150.130.110.1'}}`

- Replace a `www` subdomain pointing to a different IP:

`cli53 {{[rc|rrcreate]}} --replace {{'www 300 A 150.130.110.2'}}`

- Delete a record A:

`cli53 {{[rd|rrdelete]}} {{example.com}} {{www}} {{A}}`
