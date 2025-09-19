---
title: "Toggle SELinux Booleans - Control SELinux Security | Online Free DevTools by Hexmos"
name: togglesebool
path: /freedevtools/tldr/linux/togglesebool
canonical: "https://hexmos.com/freedevtools/tldr/linux/togglesebool/"
description: "Control SELinux security settings with ToggleSEBool. Quickly toggle booleans for temporary security adjustments using this Linux tool. Free online tool, no registration required."
category: linux
keywords:
- selinux boolean manager
- toggle selinux boolean linux
- linux selinux configuration
- security enhanced linux toggle
- selinux policy management
- linux security boolean control
- command line selinux
- selinux boolean command
- change selinux boolean state
- linux temporary selinux setting
features:
- Toggle SELinux boolean states instantly
- Modify non-persistent SELinux settings
- Control SELinux security configurations via command line
- Quickly enable or disable specific SELinux policies
- Facilitate temporary security adjustments for testing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# togglesebool

> Flip the current (non-persistent) values of SELinux booleans.
> Note: This tool has been deprecated and often removed in favor of `setsebool`.
> More information: <https://manned.org/togglesebool>.

- Flip the current (non-persistent) values of the specified booleans:

`sudo togglesebool {{virt_use_samba virt_use_usb ...}}`
