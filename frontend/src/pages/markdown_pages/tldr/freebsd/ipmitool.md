---
title: "Control Hardware - Interface IPMI with ipmitool | Online Free DevTools by Hexmos"
name: ipmitool
path: /freedevtools/tldr/freebsd/ipmitool
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/ipmitool/"
description: "Control server hardware remotely with ipmitool, interfacing the Intelligent Platform Management Interface (IPMI). Manage power, sensors, and system events. Free online tool, no registration required."
category: freebsd
keywords:
  - IPMI management interface
  - FreeBSD hardware control
  - Remote server management
  - Baseboard management controller
  - System health monitoring
  - Power management operations
  - Sensor data retrieval
  - Event log access
  - IPMI shell interaction
  - Out-of-band management
features:
  - Load IPMI kernel module for local access
  - Open an IPMI shell on the local hardware
  - Open an IPMI shell on a remote host
  - Manage server hardware remotely using IPMI
  - Access system information via the IPMI interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ipmitool

> Interface with the Intelligent Platform Management Interface (IPMI).
> More information: <https://man.freebsd.org/cgi/man.cgi?query=ipmitool>.

- Load the IPMI kernel module for local connections:

`kldload ipmi.ko`

- Open IPMI shell on the local hardware:

`ipmitool shell`

- Open IPMI shell on a remote host:

`ipmitool -H {{ip_address}} -U {{user_name}} shell`
