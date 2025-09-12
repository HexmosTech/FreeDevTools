---
title: "Execute DNS Server - Resolve Hostnames with Named | Free DevTools"
name: named
path: /freedevtools/tldr/unknown/named
canonical: "https://hexmos.com/freedevtools/tldr/unknown/named/"
description: "Execute DNS server operations with Named. Convert hostnames to IP addresses and vice versa. Free online tool, no registration required."
category: unknown
keywords:
- DNS server execution
- hostname resolution
- IP address conversion
- named configuration file
- domain name lookup
- DNS query management
- named daemon
- network address translation
- DNS protocol
- zone file management
features:
- Execute the DNS server daemon
- Read and apply custom configuration files
- Restrict execution to IPv4 or IPv6 only
- Listen for queries on a specified port
- Run the server in the foreground, skipping daemonization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# named

> Execute the DNS (Dynamic Name Service) server daemon that converts host names to IP addresses and vice versa.
> More information: <https://manned.org/named>.

- Read the default configuration file `/etc/named.conf`, read any initial data and listen for queries:

`named`

- Read a custom configuration file:

`named -c {{path/to/named.conf}}`

- Use IPv4 or IPv6 only, even if the host machine is capable of utilising other protocols:

`named {{-4|-6}}`

- Listen for queries on a specific port instead of the default port 53:

`named -p {{port}}`

- Run the server in the foreground and do not daemonize:

`named -f`
