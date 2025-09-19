---
title: "AppArmor Policy - Control AppArmor with aa-complain | Online Free DevTools by Hexmos"
name: aa-complain
path: /freedevtools/tldr/linux/aa-complain
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-complain/"
description: "Control AppArmor policies with the aa-complain command.  Easily switch AppArmor profiles to complain mode for security auditing and debugging. Free online tool, no registration required."
category: linux
keywords:
  - apparmor policy control
  - linux security command
  - aa-complain usage
  - apparmor profile management
  - system security auditing
  - linux command line tool
  - apparmor complain mode
  - security policy enforcement
  - linux system administration
  - aa-complain tutorial
features:
  - Switches AppArmor profiles to complain mode.
  - Allows for auditing of AppArmor policy violations.
  - Provides detailed logging of policy violations.
  - Enables debugging of AppArmor policies without immediate enforcement.
  - Supports specifying multiple profiles or directories containing profiles.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aa-complain

> Set an AppArmor policy to complain mode.
> See also: `aa-disable`, `aa-enforce`, `aa-status`.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-complain.8>.

- Set policy to complain mode:

`sudo aa-complain {{path/to/profile1 path/to/profile2 ...}}`

- Set policies to complain mode:

`sudo aa-complain {{[-d|--dir]}} {{path/to/profiles}}`
