---
title: "ZNC IRC Bouncer - Manage IRC Connections | Free DevTools"
name: znc
path: /freedevtools/tldr/linux/znc
canonical: "https://hexmos.com/freedevtools/tldr/linux/znc/"
description: "Manage IRC connections effortlessly with the ZNC IRC bouncer.  Setup and control your IRC experience from the command line. Free online tool, no registration required."
category: linux
keywords:
  - znc irc bouncer
  - znc setup guide
  - znc linux
  - znc command line
  - znc systemd
  - irc bouncer setup
  - irc connection manager
  - znc configuration
  - manage irc connections
  - irc daemon control
features:
  - Enables persistent IRC connections.
  - Allows connection from multiple clients.
  - Provides offline message storage.
  - Offers customizable configuration options.
  - Simplifies IRC management via command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# znc

> IRC bouncer.
> More information: <https://manned.org/znc>.

- Run the initial setup:

`znc {{[-c|--makeconf]}}`

- Start the IRC bouncer daemon:

`znc`

- Setup `znc` for systemd:

`sudo {{[-u|--user]}} znc znc {{[-c|--makeconf]}} {{[-d|--datadir]}} /var/lib/znc`

- Enable `znc` to start on boot and start it now:

`systemctl enable znc --now`
