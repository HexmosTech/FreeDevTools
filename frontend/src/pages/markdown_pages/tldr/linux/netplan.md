---
title: "Netplan - Configure Network Settings with YAML | Free DevTools"
name: netplan
path: /freedevtools/tldr/linux/netplan
canonical: "https://hexmos.com/freedevtools/tldr/linux/netplan/"
description: "Configure network settings with Netplan, the YAML-based network configuration tool. Apply changes, generate configurations, and troubleshoot issues. Free online tool, no registration required."
category: linux
keywords:
  - netplan configuration
  - yaml network configuration
  - linux network manager
  - network interface configuration
  - netplan apply
  - netplan generate
  - dhcp configuration
  - network troubleshooting linux
  - ubuntu network configuration
  - netplan status
features:
  - Apply network configurations persistently
  - Generate backend network configuration files
  - Configure network interfaces to use DHCP
  - Test network configurations before permanent application
  - Display the current Netplan configuration status
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# netplan

> Network configuration utility using YAML.
> More information: <https://netplan.readthedocs.io/en/stable/cli/>.

- Apply a network configuration and make it persistent:

`sudo netplan apply`

- Generate backend configuration files:

`sudo netplan generate`

- Configure a network interface to use DHCP:

`sudo netplan set ethernets.{{interface_name}}.dhcp4=true`

- Try configuration changes without applying them permanently:

`sudo netplan try --timeout {{seconds}}`

- Return to previous working configuration after failed apply:

`sudo netplan --debug apply`

- Display the current netplan configuration status:

`netplan status`
