---
title: "AppArmor Status - Check Modules | Online Free DevTools by Hexmos"
name: aa-status
path: /freedevtools/tldr/linux/aa-status
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-status/"
description: "Check AppArmor module status with aa-status.  View loaded policies and their enforcement status. Free online tool, no registration required."
category: linux
keywords:
  - AppArmor status checker
  - Linux AppArmor modules
  - AppArmor policy status
  - aa-status command
  - AppArmor security status
  - Linux security auditing
  - AppArmor enforcement
  - AppArmor complaining policies
  - AppArmor kill policies
  - System security check
features:
  - List all currently loaded AppArmor modules.
  - Display the number of profiled AppArmor policies.
  - Show the number of enforced AppArmor policies.
  - Report the number of non-enforcing (complaining) AppArmor policies.
  - Identify the number of enforced AppArmor policies that kill tasks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aa-status

> List currently loaded AppArmor modules.
> See also: `aa-complain`, `aa-disable`, `aa-enforce`.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-status.8>.

- Check status:

`sudo aa-status`

- Display the number of loaded policies:

`sudo aa-status --profiled`

- Display the number of loaded enforicing policies:

`sudo aa-status --enforced`

- Display the number of loaded non-enforcing policies:

`sudo aa-status --complaining`

- Display the number of loaded enforcing policies that kill tasks:

`sudo aa-status --kill`
