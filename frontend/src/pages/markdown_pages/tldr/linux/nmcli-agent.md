---
title: "Control nmcli Agent - Manage NetworkManager Secrets | Online Free DevTools by Hexmos"
name: nmcli-agent
path: /freedevtools/tldr/linux/nmcli-agent
canonical: "https://hexmos.com/freedevtools/tldr/linux/nmcli-agent/"
description: "Control nmcli agent for NetworkManager using command-line. Securely manage secrets and polkit authorizations for network connections. Free online tool, no registration required."
category: linux
keywords:
  - NetworkManager secret agent
  - nmcli agent control
  - NetworkManager polkit agent
  - nmcli secret request
  - Linux network configuration
  - command line network management
  - NetworkManager CLI tool
  - nmcli authentication agent
  - network secrets management
  - polkit authorization control
features:
  - Register nmcli as a secret agent
  - Register nmcli as a polkit agent
  - Listen for secret requests
  - Handle authorization requests
  - Enable all agent functionalities
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nmcli agent

> Run `nmcli` as a NetworkManager secret agent or polkit agent.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nmcli.html#agent>.

- Register `nmcli` as a secret agent and listen for secret requests:

`nmcli {{[a|agent]}} {{[s|secret]}}`

- Register `nmcli` as a polkit agent and listen for authorization requests:

`nmcli {{[a|agent]}} {{[p|polkit]}}`

- Register `nmcli` as a secret agent and a polkit agent:

`nmcli {{[a|agent]}} {{[a|all]}}`
