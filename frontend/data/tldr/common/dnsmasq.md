---
title: "Control DNS Server - Manage DNS with dnsmasq | Online Free DevTools by Hexmos"
name: dnsmasq
path: "/freedevtools/tldr/common/dnsmasq/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dnsmasq/"
description: "Control DNS server configurations with dnsmasq. Easily manage DHCP leases, DNS forwarding and TFTP services on your network. Free online tool, no registration required."
category: common
keywords:
- dns server management
- dhcp server configuration
- tftp server setup
- dns forwarding linux
- lightweight dns server
- dnsmasq configuration file
- local dns resolver
- network boot configuration
- dns caching server
- dnsmasq command line
features:
- Start a lightweight DNS server
- Configure DHCP address range
- Enable verbose query logging
- Specify a custom configuration file
- Configure TFTP boot services
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dnsmasq

> Lightweight DNS, DHCP, TFTP, and PXE server.
> More information: <https://manned.org/dnsmasq>.

- Start dnsmasq with default configuration:

`dnsmasq`

- Run dnsmasq in the foreground (for debugging):

`dnsmasq --no-daemon`

- Specify a custom configuration file:

`dnsmasq --conf-file={{path/to/config.conf}}`

- Enable verbose logging:

`dnsmasq --log-queries --log-facility=-`

- Set a DHCP range and lease time:

`dnsmasq --dhcp-range={{192.168.0.50,192.168.0.150,12h}}`

- Print dnsmasq version:

`dnsmasq --version`
