---
title: "Resolve Hostnames - Translate IPs with avahi-resolve | Online Free DevTools by Hexmos"
name: avahi-resolve
path: /freedevtools/tldr/linux/avahi-resolve
canonical: "https://hexmos.com/freedevtools/tldr/linux/avahi-resolve/"
description: "Translate IP addresses to hostnames with avahi-resolve. Resolve local service names and debug network configurations. Free online tool, no registration required."
category: linux
keywords:
- hostname resolution
- ip address resolver
- avahi resolve linux
- linux hostname lookup
- local service discovery
- avahi network utility
- avahi ip translation
- network address resolution
- linux network debugging
- service name resolution
features:
- Resolve local service names to IPv4 addresses
- Translate IP addresses to hostnames
- Perform verbose address resolution
- Debug network configurations with name resolution
- Discover local network services by name
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# avahi-resolve

> Translate between host names and IP Addresses.
> More information: <https://manned.org/avahi-resolve>.

- Resolve a local service to its IPv4:

`avahi-resolve -4 {{[-n|--name]}} {{service.local}}`

- Resolve an IP to a hostname, verbosely:

`avahi-resolve {{[-v|--verbose]}} {{[-a|--address]}} {{IP}}`
