---
title: "Knock Port Control - Open Ports with TCP/UDP | Online Free DevTools by Hexmos"
name: knock
path: /freedevtools/tldr/linux/knock
canonical: "https://hexmos.com/freedevtools/tldr/linux/knock/"
description: "Control port access with Knock, a powerful port knocking client.  Open specific ports on your firewall using TCP or UDP. Free online tool, no registration required."
category: linux
keywords:
  - port knocking client
  - tcp port knocking
  - udp port knocking
  - firewall port control
  - network security command
  - linux port knocking
  - open ports command line
  - command line port opener
  - remote port access
  - network administration tool
features:
  - Knock on ports using TCP or UDP protocols.
  - Specify IPv4 or IPv6 for connection.
  - Control port opening with specific sequences.
  - Offers verbose output for detailed connection information.
  - Supports various command-line options for flexible usage.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# knock

> Port knocking client to open specific ports on firewall.
> More information: <https://manned.org/knock>.

- Knock on ports using different protocols:

`knock {{hostname}} {{portnumber}}:{{protocol}}`

- Knock on port using UDP:

`knock {{[-u|--udp]}} {{hostname}} {{portnumber}}`

- Force usage of IPv4/IPv6:

`knock {{-4|-6}} {{hostname}} {{portnumber}}`

- Display errors and details of connection:

`knock {{[-v|--verbose]}} {{hostname}} {{portnumber}}`
