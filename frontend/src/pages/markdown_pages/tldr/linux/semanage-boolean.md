---
title: "Manage SELinux Booleans - Control Security Settings | Free DevTools"
name: semanage-boolean
path: /freedevtools/tldr/linux/semanage-boolean
canonical: "https://hexmos.com/freedevtools/tldr/linux/semanage-boolean/"
description: "Control SELinux boolean settings with semanage-boolean.  Manage persistent security configurations using this powerful command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - selinux boolean management
  - linux security settings
  - semanage boolean command
  - persistent selinux configuration
  - command-line selinux control
  - linux system administration
  - selinux boolean modification
  - manage selinux booleans
  - security policy management
  - system security configuration
features:
  - List all available SELinux boolean settings.
  - List only user-defined boolean settings.
  - Modify boolean settings persistently (on/off).
  - Apply changes without requiring a reboot.
  - Integrate seamlessly with other SELinux management tools.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# semanage boolean

> Manage persistent SELinux boolean settings.
> See also: `semanage` for managing SELinux policies, `getsebool` for checking boolean values, and `setsebool` for applying non-persistent boolean settings.
> More information: <https://manned.org/semanage-boolean>.

- List all booleans settings:

`sudo semanage boolean {{[-l|--list]}}`

- List all user-defined boolean settings without headings:

`sudo semanage boolean {{[-l|--list]}} {{[-C|--locallist]}} {{[-n|--noheading]}}`

- Set or unset a boolean persistently:

`sudo semanage boolean {{[-m|--modify]}} {{-1|--on|-0|--off}} {{haproxy_connect_any}}`
