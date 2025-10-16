---
title: "Connect VPN - Control Cisco VPNs with VPNC | Online Free DevTools by Hexmos"
name: vpnc
path: "/freedevtools/tldr/linux/vpnc/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/vpnc/"
description: "Connect to Cisco VPNs securely with VPNC. Establish, manage, and terminate VPN connections using the command line on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux vpn client
- cisco vpn connect
- command line vpn
- vpnc configuration file
- secure vpn connection
- vpn tunnel linux
- network security linux
- vpnc disconnect
- vpn manager linux
- cisco 3000 vpn concentrator
features:
- Establish secure VPN connections to Cisco VPN concentrators
- Connect using a defined configuration file
- Terminate existing VPN connections
- Support for command-line VPN management on Linux
- Allows VPN access without a graphical interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vpnc

> A VPN client for the Cisco 3000 VPN Concentrator.
> More information: <https://manned.org/vpnc>.

- Connect with a defined configuration file:

`sudo vpnc {{config_file}}`

- Terminate the previously created connection:

`sudo vpnc-disconnect`
