---
title: "Resolvectl - Control DNS Resolution | Online Free DevTools by Hexmos"
name: resolvectl
path: "/freedevtools/tldr/linux/resolvectl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/resolvectl/"
description: "Control DNS resolution with resolvectl. Resolve domains, query IP addresses, and manage DNS settings on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- DNS resolution linux
- Resolve domain names
- Linux network configuration
- Resolve IP address linux
- Query DNS records
- Flush DNS cache linux
- DNS settings management
- Systemd resolvectl command
- Linux DNS resolver
- Network troubleshooting linux
features:
- Resolve domain names to IP addresses
- Query DNS records for specified domains
- Flush the local DNS cache
- Display DNS resolver statistics
- Retrieve MX and SRV records
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# resolvectl

> Resolve domain names, IPv4 and IPv6 addresses, DNS resource records, and services.
> Introspect and reconfigure the DNS resolver.
> More information: <https://www.freedesktop.org/software/systemd/man/resolvectl.html>.

- Show DNS settings:

`resolvectl status`

- Resolve the IPv4 and IPv6 addresses for one or more domains:

`resolvectl query {{domain1 domain2 ...}}`

- Retrieve the domain of a specified IP address:

`resolvectl query {{ip_address}}`

- Flush all local DNS caches:

`resolvectl flush-caches`

- Display DNS statistics (transactions, cache, and DNSSEC verdicts):

`resolvectl statistics`

- Retrieve an MX record of a domain:

`resolvectl --legend {{no}} {{[-t|--type]}} {{MX}} query {{domain}}`

- Resolve an SRV record, for example _xmpp-server._tcp gmail.com:

`resolvectl service _{{service}}._{{protocol}} {{name}}`

- Retrieve a TLS key:

`resolvectl tlsa tcp {{domain}}:443`
