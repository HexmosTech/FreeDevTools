---
title: "DHCP Exhaustion Attack - Control DHCP with dhcpwn | Online Free DevTools by Hexmos"
name: dhcpwn
path: /freedevtools/tldr/common/dhcpwn
canonical: "https://hexmos.com/freedevtools/tldr/common/dhcpwn/"
description: "Control DHCP server using dhcpwn to perform exhaustion attacks and sniff network traffic. Simulate attacks and monitor DHCP communications. Free online tool, no registration required."
category: common
keywords:
- DHCP exhaustion attack
- DHCP sniffing
- DHCP flood attack
- Linux DHCP tool
- Network security tool
- DHCP network analysis
- DHCP packet capture
- Command-line DHCP control
- DHCP penetration testing
- Network IP management
features:
- Flood a network with DHCP requests for IP exhaustion testing
- Capture and analyze local DHCP traffic
- Perform DHCP exhaustion attack simulation
- Sniff DHCP packets from a specified interface
- Test network resilience against DHCP attacks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dhcpwn

> Test DHCP IP exhaustion attacks and sniff local DHCP traffic.
> More information: <https://github.com/mschwager/dhcpwn>.

- Flood the network with IP requests:

`dhcpwn {{[-i|--interface]}} {{network_interface}} flood {{[-c|--count]}} {{number_of_requests}}`

- Sniff local DHCP traffic:

`dhcpwn {{[-i|--interface]}} {{network_interface}} sniff`
