---
title: "Manage SELinux Ports - Control Network Access with semanage-port | Online Free DevTools by Hexmos"
name: semanage-port
path: /freedevtools/tldr/linux/semanage-port
canonical: "https://hexmos.com/freedevtools/tldr/linux/semanage-port/"
description: "Control network access with semanage-port, a Linux command-line tool for managing SELinux port definitions. Add, delete, and list port rules easily. Free online tool, no registration required."
category: linux
keywords:
  - selinux port management
  - linux port control
  - semanage port commands
  - network security linux
  - selinux port rules
  - manage selinux ports
  - linux firewall management
  - semanage port tutorial
  - command line selinux
  - system administration linux
features:
  - List all existing SELinux port labeling rules.
  - Add new user-defined port labeling rules for specific protocols and ports.
  - Add user-defined rules for protocol-port ranges.
  - Delete existing user-defined port labeling rules.
  - Manage persistent SELinux port definitions for enhanced network security.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# semanage port

> Manage persistent SELinux port definitions.
> See also: `semanage`.
> More information: <https://manned.org/semanage-port>.

- List all port labeling rules:

`sudo semanage port {{[-l|--list]}}`

- List all user-defined port labeling rules without headings:

`sudo semanage port {{[-l|--list]}} {{[-C|--locallist]}} {{[-n|--noheading]}}`

- Add a user-defined rule that assigns a label to a protocol-port pair:

`sudo semanage port {{[-a|--add]}} {{[-t|--type]}} {{ssh_port_t}} {{[-p|--proto]}} {{tcp}} {{22000}}`

- Add a user-defined rule that assigns a label to a protocol-port-range pair:

`sudo semanage port {{[-a|--add]}} {{[-t|--type]}} {{http_port_t}} {{[-p|--proto]}} {{tcp}} {{80-88}}`

- Delete a user-defined rule using its protocol-port pair:

`sudo semanage port {{[-d|--delete]}} {{[-p|--proto]}} {{udp}} {{11940}}`
