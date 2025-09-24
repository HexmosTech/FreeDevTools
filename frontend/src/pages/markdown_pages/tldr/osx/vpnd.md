---
title: "Control VPN Daemon - Manage VPN Connections | Online Free DevTools by Hexmos"
name: vpnd
path: /freedevtools/tldr/osx/vpnd
canonical: "https://hexmos.com/freedevtools/tldr/osx/vpnd/"
description: "Control VPN daemon connections with vpnd. Manage server configurations and troubleshoot VPN issues with this essential command line tool. Free online tool, no registration required."
category: osx
keywords:
  - vpn daemon control
  - vpn connection manager
  - command line vpn
  - vpn configuration management
  - vpnd macos
  - vpnd linux
  - network daemon controller
  - server configuration tool
  - troubleshooting vpn issues
  - vpn service monitor
features:
  - Start the VPN daemon in different modes
  - Run the daemon in the foreground with logging
  - Validate arguments before running the daemon
  - Configure the daemon for a specific server ID
  - Display help information for the vpnd command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vpnd

> Listens for incoming VPN connections.
> It should not be invoked manually.
> More information: <https://keith.github.io/xcode-man-pages/vpnd.8.html>.

- Start the daemon:

`vpnd`

- Run the daemon in the foreground:

`vpnd -x`

- Run the daemon in the foreground and print logs to the terminal:

`vpnd -d`

- Run the daemon in the foreground, print logs to the terminal, and quit after validating arguments:

`vpnd -n`

- Run the daemon for a specific server configuration:

`vpnd -i {{server_id}}`

- Display help:

`vpnd -h`
