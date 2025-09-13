---
title: "Serial Console - Connect to Azure VMs | Free DevTools"
name: az-serial-console
path: /freedevtools/tldr/az/az-serial-console
canonical: "https://hexmos.com/freedevtools/tldr/az/az-serial-console/"
description: "Connect to Azure Virtual Machines with Serial Console. Debug, troubleshoot, and manage VMs remotely using command line. Free online tool, no registration required."
category: common
keywords:
- azure serial console
- azure vm console
- serial console connection
- azure cli serial
- az serial connect
- azure vm debugging
- azure vm troubleshooting
- linux serial console
- windows serial console
- azure virtual machine access
features:
- Connect to Azure VM serial console
- Establish remote command-line access
- Terminate serial console connection
- Debug Azure Virtual Machines
- Troubleshoot Azure Virtual Machines remotely
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# az serial-console

> Connect to the serial console of a Virtual Machine.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/serial-console>.

- Connect to a serial console:

`az serial-console connect {{[-g|--resource-group]}} {{Resource_Group_Name}} {{[-n|--name]}} {{Virtual_Machine_Name}}`

- Terminate the connection:

`<Ctrl ]>`
