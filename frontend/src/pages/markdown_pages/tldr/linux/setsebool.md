---
title: "Set SELinux Boolean - Control Security Policies | Online Free DevTools by Hexmos"
name: setsebool
path: /freedevtools/tldr/linux/setsebool
canonical: "https://hexmos.com/freedevtools/tldr/linux/setsebool/"
description: "Control SELinux boolean values with Setsebool. Manage Linux security policies and toggle boolean states quickly. Free online tool, no registration required."
category: linux
keywords:
- selinux boolean control
- linux security policy
- setsebool command
- boolean value manager
- selinux policy tool
- security context editor
- linux boolean configuration
- semanage boolean alternative
- selinux policy enforcement
- linux security administration
features:
- Set SELinux boolean values temporarily
- Persistently modify SELinux booleans
- Update multiple SELinux booleans simultaneously
- Manage security context configurations
- Control system security policies using command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# setsebool

> Set SELinux boolean value.
> See also: `semanage-boolean`, `getsebool`.
> More information: <https://manned.org/setsebool>.

- Show the current setting of [a]ll booleans:

`getsebool -a`

- Set or unset a boolean temporarily (non-persistent across reboot):

`sudo setsebool {{httpd_can_network_connect}} {{1|true|on|0|false|off}}`

- Set or unset a boolean [P]ersistently:

`sudo setsebool -P {{container_use_devices}} {{1|true|on|0|false|off}}`

- Set or unset multiple booleans [P]ersistently at once:

`sudo setsebool -P {{ftpd_use_fusefs=1 mount_anyfile=0 ...}}`

- Set or unset a boolean persistently (alternative method using `semanage-boolean`):

`sudo semanage boolean {{[-m|--modify]}} {{-1|--on|-0|--off}} {{haproxy_connect_any}}`
