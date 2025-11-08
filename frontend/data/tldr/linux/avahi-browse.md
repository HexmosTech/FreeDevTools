---
title: "Avahi-browse - Discover Network Services | Online Free DevTools by Hexmos"
name: avahi-browse
path: "/freedevtools/tldr/linux/avahi-browse/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/avahi-browse/"
description: "Discover and browse network services with Avahi-browse.  Quickly identify available services and their addresses. Free online tool, no registration required."
category: linux
keywords:
  - Network Service Discovery
  - mDNS Browser
  - DNS-SD Browser
  - Avahi command
  - Bonjour Browser
  - Linux network tools
  - Local network services
  - Network host discovery
  - Service address lookup
  - Avahi-browse command
features:
  - Lists available network services with addresses and ports.
  - Ignores services on the local machine.
  - Provides parsable output for scripting.
  - Allows browsing specific domains.
  - Supports resolving service names to addresses.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# avahi-browse

> Display services and hosts exposed on the local network via mDNS/DNS-SD.
> Avahi is compatible with Bonjour (Zeroconf) found in Apple devices.
> More information: <https://manned.org/avahi-browse>.

- List services available on the local network along with their addresses and ports, ignoring ones on the local machine:

`avahi-browse {{[-a|--all]}} {{[-r|--resolve]}} {{[-l|--ignore-local]}}`

- Quickly list services in the local network in SSV format for scripts:

`avahi-browse {{[-a|--all]}} {{[-t|--terminate]}} {{[-p|--parsable]}}`

- List domains in the neighbourhood:

`avahi-browse {{[-D|--browse-domains]}}`

- Limit the search to a particular domain:

`avahi-browse {{[-a|--all]}} --domain={{domain}}`
