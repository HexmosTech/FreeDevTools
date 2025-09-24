---
title: "Pi-hole Manager - Control Ad-Blocking DNS | Online Free DevTools by Hexmos"
name: pihole
path: /freedevtools/tldr/linux/pihole
canonical: "https://hexmos.com/freedevtools/tldr/linux/pihole/"
description: "Control ad-blocking DNS server with Pi-hole Manager. Update lists, flush cache, and manage domains. Free online tool, no registration required."
category: linux
keywords:
- pihole manager
- pihole ad blocking
- pihole dns server
- linux pihole
- pihole gravity
- pihole update
- pihole allow deny
- pihole query domain
- pihole real-time log
- pihole command line
features:
- Check Pi-hole server status
- Update Pi-hole software and gravity lists
- Start or stop the Pi-hole daemon process
- Reload DNS resolver without restarting the server
- Allow or deny specific domains from accessing the internet
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pihole

> Manage the Pi-hole ad-blocking DNS server.
> More information: <https://docs.pi-hole.net/main/pihole-command>.

- Check Pi-hole's status:

`pihole status`

- Update Pi-hole and Gravity:

`sudo pihole {{[-up|updatePihole]}}`

- Start or stop the daemon:

`pihole {{enable|disable}}`

- Update the lists and flush the cache without restarting the DNS server:

`pihole reloaddns`

- Update the list of ad-serving domains:

`pihole {{[-g|updateGravity]}}`

- Allow or deny the specified domain:

`pihole {{allow|deny}} {{example.com}}`

- Search the lists for a domain:

`pihole {{[-q|query]}} {{example.com}}`

- Open a real-time log of connections:

`pihole {{[-t|tail]}}`
