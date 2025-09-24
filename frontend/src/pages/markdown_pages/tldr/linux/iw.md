---
title: "Control Wireless Devices - Using Linux 'iw' | Online Free DevTools by Hexmos"
name: iw
path: /freedevtools/tldr/linux/iw
canonical: "https://hexmos.com/freedevtools/tldr/linux/iw/"
description: "Control wireless devices with 'iw' command on Linux. Manage network connections, scan available networks, and show device information. Free online tool, no registration required."
category: linux
keywords:
- linux wireless device control
- iw command line tool
- linux network configuration
- wireless network scanner linux
- linux wifi connection manager
- iw network interface manager
- linux wireless troubleshooting
- iw command examples
- wireless adapter configuration linux
- linux iw regulatory domain
features:
- Scan for available wireless networks
- Manage wireless connections on Linux
- Display information about wireless devices
- List available wireless network interfaces
- Show regulatory domain information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iw

> Show and manipulate wireless devices.
> See also: `iw dev`.
> More information: <https://wireless.docs.kernel.org/en/latest/en/users/documentation/iw.html>.

- Scan for available wireless networks:

`iw dev {{wlp}} scan`

- Join an open wireless network:

`iw dev {{wlp}} connect {{SSID}}`

- Close the current connection:

`iw dev {{wlp}} disconnect`

- Show information about the current connection:

`iw dev {{wlp}} link`

- List all physical and logical wireless network interfaces:

`iw dev`

- List all wireless capabilities for all physical hardware interfaces:

`iw phy`

- List the kernel's current wireless regulatory domain information:

`iw reg get`

- Display help for all commands:

`iw help`
