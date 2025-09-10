---
title: ipmitool
name: ipmitool
path: /freedevtools/tldr/freebsd/ipmitool
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/ipmitool/"
description: Interface with the Intelligent Platform Management Interface (IPMI).
category: freebsd
keywords:
- hardware management interface
- remote server management
- baseboard management controller access
- system monitoring and control
- power management operations
- sensor data retrieval
- event log access
- IPMI shell interaction
- out-of-band management
- server health monitoring
features:
- load IPMI kernel module
- open IPMI shell locally
- open IPMI shell remotely
- manage server hardware
- access system information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
