---
title: "Fail2ban-client - Control Fail2ban Server | Free DevTools"
name: fail2ban-client
path: /freedevtools/tldr/linux/fail2ban-client
canonical: "https://hexmos.com/freedevtools/tldr/linux/fail2ban-client/"
description: "Control your Fail2ban server effectively with fail2ban-client. Manage bans, check status, and ensure server health easily. Free online tool, no registration required."
category: linux
keywords:
  - fail2ban server management
  - fail2ban command line
  - linux security command
  - fail2ban ip ban
  - fail2ban status check
  - fail2ban jail control
  - network security command
  - system administration command
  - server monitoring command
  - fail2ban client usage
features:
  - Retrieve the current status of a fail2ban jail.
  - Remove specific IP addresses from a jail's ban list.
  - Verify the responsiveness of the fail2ban server.
  - Manage multiple fail2ban jails simultaneously.
  - Unban multiple IPs from a jail with a single command.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fail2ban-client

> Configure and control fail2ban server.
> More information: <https://manned.org/fail2ban-client>.

- Retrieve current status of the jail service:

`fail2ban-client status {{jail}}`

- Remove the specified IP from the jail service's ban list:

`fail2ban-client set {{jail}} unbanip {{ip}}`

- Verify fail2ban server is alive:

`fail2ban-client ping`
