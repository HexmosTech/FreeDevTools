---
title: "Control Network Metrics - Ifmetric Route Priority | Online Free DevTools by Hexmos"
name: ifmetric
path: "/freedevtools/tldr/linux/ifmetric/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ifmetric/"
description: "Control network metrics with ifmetric. Manage IPv4 route priorities on Linux. Optimize network routing using command line. Free online tool, no registration required."
category: linux
keywords:
- linux network metrics
- ipv4 route metrics
- network interface priority
- ifmetric linux command
- linux route manipulation
- network configuration linux
- linux network routing
- route priority management
- ifmetric route control
- linux ifmetric
features:
- Set the priority of a specific network interface
- Reset the priority of a network interface
- Modify IPv4 route metrics on Linux
- Optimize network routing through priority settings
- Configure network interfaces using the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ifmetric

> An IPv4 route metrics manipulation tool.
> More information: <https://0pointer.de/lennart/projects/ifmetric/>.

- Set the priority of the specified network interface (a higher number indicates lower priority):

`sudo ifmetric {{interface}} {{value}}`

- Reset the priority of the specified network interface:

`sudo ifmetric {{interface}} {{0}}`
