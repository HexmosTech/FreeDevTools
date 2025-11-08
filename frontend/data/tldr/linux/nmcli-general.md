---
title: "Nmcli General - Manage Network Settings | Online Free DevTools by Hexmos"
name: nmcli-general
path: "/freedevtools/tldr/linux/nmcli-general/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/nmcli-general/"
description: "Manage network settings with Nmcli General on Linux. Control hostname, permissions, and logging levels with this powerful command-line tool. Free online tool, no registration required."
category: linux
keywords:
- linux network manager
- nmcli general commands
- command line network configuration
- linux hostname management
- network logging tools linux
- linux network permissions
- nmcli network settings
- configure network interface linux
- linux networking commands
- network manager command line tool
features:
- Display NetworkManager general status
- Show current device hostname
- Modify device hostname
- Display NetworkManager permissions
- Configure NetworkManager logging levels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nmcli general

> Manage general settings of NetworkManager.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nmcli.html#general>.

- Show the general status of NetworkManager:

`nmcli {{[g|general]}}`

- Show the hostname of the current device:

`nmcli {{[g|general]}} {{[h|hostname]}}`

- Change the hostname of the current device:

`sudo nmcli {{[g|general]}} {{[h|hostname]}} {{new_hostname}}`

- Show the permissions of NetworkManager:

`nmcli {{[g|general]}} {{[p|permissions]}}`

- Show the current logging level and domains:

`nmcli {{[g|general]}} {{[l|logging]}}`

- Set the logging level and/or domains (see `man NetworkManager.conf` for all available domains):

`sudo nmcli {{[g|general]}} {{[l|logging]}} {{[l|level]}} {{INFO|OFF|ERR|WARN|DEBUG|TRACE}} domain {{domain_1,domain_2,...}}`
