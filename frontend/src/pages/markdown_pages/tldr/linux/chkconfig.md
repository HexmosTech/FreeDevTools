---
title: "Chkconfig - Manage Service Runlevels | Online Free DevTools by Hexmos"
name: chkconfig
path: /freedevtools/tldr/linux/chkconfig
canonical: "https://hexmos.com/freedevtools/tldr/linux/chkconfig/"
description: "Manage service runlevels with chkconfig on CentOS 6.  Control service startup and shutdown behavior at different runlevels. Free online tool, no registration required."
category: linux
keywords:
  - chkconfig command
  - linux service management
  - centos service control
  - runlevel control linux
  - chkconfig list services
  - enable service chkconfig
  - disable service chkconfig
  - chkconfig specific runlevels
  - CentOS 6 service management
  - systemd alternative chkconfig
features:
  - List services and their runlevels.
  - Enable services at boot time.
  - Disable services at boot time.
  - Control service startup for specific runlevels.
  - View the current runlevel status of a service.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chkconfig

> Manage the runlevel of services on CentOS 6.
> More information: <https://manned.org/chkconfig>.

- List services with runlevel:

`chkconfig --list`

- Show a service's runlevel:

`chkconfig --list {{ntpd}}`

- Enable service at boot:

`chkconfig {{sshd}} on`

- Enable service at boot for runlevels 2, 3, 4, and 5:

`chkconfig --level {{2345}} {{sshd}} on`

- Disable service at boot:

`chkconfig {{ntpd}} off`

- Disable service at boot for runlevel 3:

`chkconfig --level {{3}} {{ntpd}} off`
