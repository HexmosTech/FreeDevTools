---
title: "MAC Address Changer - Control Network Interface MAC | Online Free DevTools by Hexmos"
name: macchanger
path: "/freedevtools/tldr/linux/macchanger/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/macchanger/"
description: "Control network interface MAC address with MAC Address Changer. Spoof MAC addresses and enhance network security. Free online tool, no registration required."
category: linux
keywords:
- MAC address changer
- Linux MAC changer
- Network interface MAC
- MAC address spoofing
- MAC address randomizer
- Network security tool
- Ethernet MAC address
- WiFi MAC address
- Hardware address modifier
- Linux networking
features:
- Randomize network interface MAC address
- Set a specific MAC address for a network interface
- Reset network interface to permanent MAC address
- Display current and permanent MAC addresses
- List vendor identifications for MAC addresses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# macchanger

> Manipulate network interface MAC addresses.
> More information: <https://manned.org/macchanger>.

- View the current and permanent MAC addresses of a interface:

`macchanger {{[-s|--show]}} {{interface}}`

- Set interface to a random MAC:

`macchanger {{[-r|--random]}} {{interface}}`

- Set an interface to a random MAC address, and pretend to be a [b]urned-[i]n-[a]ddress:

`macchanger {{[-r|--random]}} {{[-b|--bia]}} {{interface}}`

- Set an interface to a specific MAC address:

`macchanger {{[-m|--mac]}} {{XX:XX:XX:XX:XX:XX}} {{interface}}`

- Print the identifications (the first three bytes of a MAC address) of all known vendors:

`macchanger {{[-l|--list]}}`

- Reset an interface to its permanent hardware MAC address:

`macchanger {{[-p|--permanent]}} {{interface}}`
