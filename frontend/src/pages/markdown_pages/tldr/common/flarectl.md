---
title: "Flarectl - Control Cloudflare Services | Free DevTools"
name: flarectl
path: /freedevtools/tldr/common/flarectl
canonical: "https://hexmos.com/freedevtools/tldr/common/flarectl/"
description: "Control Cloudflare services with Flarectl, the official CLI tool. Automate DNS record management, firewall rule creation, and IP range listing. Free online tool, no registration required."
category: common
keywords:
- cloudflare cli
- flarectl command line
- dns record management
- firewall rule automation
- cloudflare zone creation
- cloudflare api
- cloudflare automation
- flarectl firewall
- flarectl dns
- cloudflare ip ranges
features:
- Manage Cloudflare DNS records programmatically
- Automate the creation of Cloudflare firewall rules
- List Cloudflare's IPv4 and IPv6 ranges
- Batch create Cloudflare zones from a list
- List all Cloudflare firewall rules
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flarectl

> Official CLI for Cloudflare.
> More information: <https://github.com/cloudflare/cloudflare-go/blob/master/cmd/flarectl/README.md>.

- Block a specific IP:

`flarectl firewall rules create --zone="{{example.com}}" --value="{{8.8.8.8}}" --mode="{{block}}" --notes="{{Block bad actor}}"`

- Add a DNS record:

`flarectl dns create --zone="{{example.com}}" --name="{{app}}" --type="{{CNAME}}" --content="{{myapp.herokuapp.com}}" --proxy`

- List all Cloudflare IPv4/IPv6 ranges:

`flarectl ips --ip-type {{ipv4|ipv6|all}}`

- Create many new Cloudflare zones automatically with names from `domains.txt`:

`for domain in $(cat {{domains.txt}}); do flarectl zone info --zone=$domain; done`

- List all firewall rules:

`flarectl firewall rules list`
