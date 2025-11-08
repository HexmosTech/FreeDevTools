---
title: "IPMI Control - Manage Hardware Remotely | Online Free DevTools by Hexmos"
name: ipmitool
path: "/freedevtools/tldr/common/ipmitool/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ipmitool/"
description: "Control IPMI interfaces remotely with IPMItool. Manage server hardware, monitor system health, and perform power operations using command line. Free online tool, no registration required."
category: common
keywords:
- IPMI management
- remote hardware control
- server power management
- system health monitoring
- ipmitool shell
- IPMI interface
- command-line IPMI
- BMC control
- linux IPMI
- IPMI over LAN
features:
- Open an IPMI shell on the local hardware.
- Open an IPMI shell on a remote host.
- Manage server hardware remotely.
- Monitor system health through IPMI.
- Perform power operations on remote servers.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ipmitool

> Interface with the Intelligent Platform Management Interface (IPMI).
> More information: <https://manned.org/ipmitool>.

- Open IPMI shell on the local hardware:

`sudo ipmitool shell`

- Open IPMI shell on a remote host:

`ipmitool -H {{ip_address}} -U {{user_name}} shell`
