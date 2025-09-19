---
title: "IPMI Control - Manage Servers with ipmitool | Online Free DevTools by Hexmos"
name: ipmitool
path: /freedevtools/tldr/linux/ipmitool
canonical: "https://hexmos.com/freedevtools/tldr/linux/ipmitool/"
description: "Control server hardware remotely with ipmitool.  Manage IPMI, access the shell, and monitor system health. Free online tool, no registration required."
category: linux
keywords:
  - ipmi command
  - ipmitool linux
  - ipmi server management
  - remote ipmi access
  - ipmi shell commands
  - ipmitool monitoring
  - system health ipmi
  - ipmi sensor data
  - ipmitool driver
  - remote server control
features:
  - Access and control IPMI-enabled hardware remotely.
  - Execute commands within the IPMI shell.
  - Monitor system health and sensor readings.
  - Manage power states (power on/off, reboot).
  - Configure and manage IPMI settings.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipmitool

> Interface with the Intelligent Platform Management Interface (IPMI).
> More information: <https://manned.org/ipmitool>.

- Start the IPMI driver for local connections:

`systemctl start ipmidrv`

- Open IPMI shell on the local hardware:

`sudo ipmitool shell`

- Open IPMI shell on a remote host:

`ipmitool -H {{ip_address}} -U {{user_name}} shell`
