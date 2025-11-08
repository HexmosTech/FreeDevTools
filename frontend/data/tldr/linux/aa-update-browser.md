---
title: "Update AppArmor - Control Browser Profiles | Online Free DevTools by Hexmos"
name: aa-update-browser
path: "/freedevtools/tldr/linux/aa-update-browser/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/aa-update-browser/"
description: "Control AppArmor browser profiles easily with aa-update-browser. Enhance security by managing browser abstractions on Linux. Free online tool, no registration required."
category: linux
keywords:
- AppArmor profile update
- Linux security profiles
- Browser abstraction management
- aa-update-browser command
- Linux AppArmor tools
- Security profile configuration
- Browser security hardening
- AppArmor update profiles
- Linux browser security
- Profile abstraction management
features:
- Update AppArmor browser profiles
- List available browser abstractions
- Dry-run profile updates
- Remove abstractions from profiles
- Manage browser security profiles
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aa-update-browser

> Update AppArmor browser profiles to use supported abstractions.
> Part of the AppArmor suite.
> More information: <https://manned.org/aa-update-browser>.

- List available browser abstraction profiles:

`sudo aa-update-browser -l`

- Show what changes would be made to a profile without applying them ([d]ry-run):

`sudo aa-update-browser -d {{path/to/profile}}`

- Update a profile with specific abstractions:

`sudo aa-update-browser -u {{abstraction1,abstraction2,...}} {{path/to/profile}}`

- Remove all abstractions from a profile:

`sudo aa-update-browser -u '' {{path/to/profile}}`

- Display help:

`aa-update-browser -h`
