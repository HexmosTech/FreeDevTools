---
title: "Bully WPS Pin Cracker - Brute-force Wireless Networks | Online Free DevTools by Hexmos"
name: bully
path: /freedevtools/tldr/linux/bully
canonical: "https://hexmos.com/freedevtools/tldr/linux/bully/"
description: "Brute-force WPS pins with Bully WPS Pin Cracker.  Crack wireless network passwords quickly and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - WPS pin brute-forcer
  - wireless password cracker
  - network security audit
  - linux wireless tools
  - WPS attack tool
  - airodump-ng companion
  - bully command line
  - brute-force WPS
  - wireless network penetration testing
  - Debian security tools
features:
  - Brute-forces WPS pins using specified BSSID and channel.
  - Supports various attack methods.
  - Requires prior network information gathering with airodump-ng.
  - Provides command-line interface for ease of use.
  - Offers a clear help message with usage instructions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bully

> Brute-force the WPS pin of a wireless access point.
> Necessary information must be gathered with `airmon-ng` and `airodump-ng` before using `bully`.
> More information: <https://salsa.debian.org/pkg-security-team/bully>.

- Crack the password:

`bully {{[-b|--bssid]}} "{{mac}}" {{[-c|--channel]}} "{{channel}}" {{[-B|--bruteforce]}} "{{interface}}"`

- Display help:

`bully {{[-h|--help]}}`
