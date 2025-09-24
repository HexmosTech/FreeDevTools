---
title: "Sysctl - Control Kernel Variables | Online Free DevTools by Hexmos"
name: sysctl
path: /freedevtools/tldr/linux/sysctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/sysctl/"
description: "Control kernel runtime variables with Sysctl. Manage system parameters and optimize performance using command-line configurations. Free online tool, no registration required."
category: linux
keywords:
  - kernel variable control
  - sysctl configuration management
  - linux kernel tuning
  - runtime variable editor
  - system parameter controller
  - sysctl command-line tool
  - linux sysctl variables
  - kernel settings manager
  - linux system configuration
  - sysctl parameter modification
features:
  - List all available kernel variables
  - Set changeable kernel state variables
  - Display currently open file handlers
  - Display the limit for simultaneous open files
  - Apply changes from /etc/sysctl.conf
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sysctl

> List and change kernel runtime variables.
> More information: <https://manned.org/sysctl.8>.

- Show all available variables and their values:

`sysctl {{[-a|--all]}}`

- Set a changeable kernel state variable:

`sysctl {{[-w|--write]}} {{section.tunable}}={{value}}`

- Get currently open file handlers:

`sysctl fs.file-nr`

- Get limit for simultaneous open files:

`sysctl fs.file-max`

- Apply changes from `/etc/sysctl.conf`:

`sysctl {{[-p|--load]}}`
