---
title: "Disable AppArmor - Control Security Policies | Online Free DevTools by Hexmos"
name: aa-disable
path: /freedevtools/tldr/linux/aa-disable
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-disable/"
description: "Disable AppArmor security policies with aa-disable.  Control application security profiles on Linux systems with ease. Free online tool, no registration required."
category: linux
keywords:
- AppArmor policy disable
- Linux security control
- AppArmor profile management
- aa-disable command
- Disable Linux AppArmor
- Security policy removal
- Linux application security
- AppArmor configuration
- Profile disabling Linux
- Disable AppArmor profiles
features:
- Disable specified AppArmor profiles
- Disable AppArmor profiles in a directory
- Control application security policies
- Quickly remove AppArmor restrictions
- Manage security profiles via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aa-disable

> Disable AppArmor security policies.
> See also: `aa-complain`, `aa-enforce`, `aa-status`.
> More information: <https://gitlab.com/apparmor/apparmor/-/wikis/manpage_aa-disable.8>.

- Disable profile:

`sudo aa-disable {{path/to/profile1 path/to/profile2 ...}}`

- Disable profiles in a directory (defaults to `/etc/apparmor.d`):

`sudo aa-disable --dir {{path/to/profiles}}`
