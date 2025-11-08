---
title: "ARP Spoof - Intercept Packets | Online Free DevTools by Hexmos"
name: arpspoof
path: "/freedevtools/tldr/linux/arpspoof/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/arpspoof/"
description: "Intercept network packets with ARP Spoof.  This command-line tool allows for advanced network manipulation. Free online tool, no registration required."
category: linux
keywords:
  - arp spoofing command
  - network packet interception
  - arp poisoning linux
  - command-line network tool
  - manipulate network traffic
  - intercept network data
  - arpspoof tutorial
  - network security testing
  - linux network commands
  - command-line arp tool
features:
  - Intercept packets by forging ARP replies.
  - Poison individual or all hosts on a network interface.
  - Target specific hosts for packet interception.
  - Utilize the -r flag for bidirectional ARP poisoning.
  - Requires root privileges for execution.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arpspoof

> Forge ARP replies to intercept packets.
> More information: <https://manned.org/arpspoof>.

- Poison all hosts to intercept packets on [i]nterface for the host:

`sudo arpspoof -i {{wlan0}} {{host_ip}}`

- Poison [t]arget to intercept packets on [i]nterface for the host:

`sudo arpspoof -i {{wlan0}} -t {{target_ip}} {{host_ip}}`

- Poison both [t]arget and host to intercept packets on [i]nterface for the host:

`sudo arpspoof -i {{wlan0}} -r -t {{target_ip}} {{host_ip}}`
