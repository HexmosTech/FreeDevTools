---
title: "HPing3 Ping - Advanced Network Probing | Free DevTools"
name: hping3
path: /freedevtools/tldr/common/hping3
canonical: "https://hexmos.com/freedevtools/tldr/common/hping3/"
description: "Advanced network probing with HPing3. Analyze network traffic and perform sophisticated ping operations. Free online tool, no registration required."
category: common
keywords:
- network ping utility
- advanced hping3 probing
- tcp network scanner
- udp network scanner
- linux network tools
- command line ping
- network vulnerability scanner
- network diagnostic tools
- port scanning tool
- raw ip packet analysis
features:
- Perform TCP, UDP, and ICMP ping requests
- Scan TCP and UDP ports for open services
- Execute traceroute operations with TCP scans
- Analyze network traffic through raw IP packets
- Flood network with SYN packets for charge testing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hping3

> Advanced ping utility which supports protocols such TCP, UDP, and raw IP.
> Best run with elevated privileges.
> More information: <https://github.com/antirez/hping>.

- Ping a destination with 4 ICMP ping requests:

`hping3 --icmp --count {{4}} {{ip_or_hostname}}`

- Ping an IP address over UDP on port 80:

`hping3 --udp --destport {{80}} --syn {{ip_or_hostname}}`

- Scan TCP port 80, scanning from the specific local source port 5090:

`hping3 --verbose --syn --destport {{80}} --baseport {{5090}} {{ip_or_hostname}}`

- Traceroute using a TCP scan to a specific destination port:

`hping3 --traceroute --verbose --syn --destport {{80}} {{ip_or_hostname}}`

- Scan a set of TCP ports on a specific IP address:

`hping3 --scan {{80,3000,9000}} --syn {{ip_or_hostname}}`

- Perform a TCP ACK scan to check if a given host is alive:

`hping3 --count {{2}} --verbose --destport {{80}} --ack {{ip_or_hostname}}`

- Perform a charge test on port 80:

`hping3 --flood --destport {{80}} --syn {{ip_or_hostname}}`
