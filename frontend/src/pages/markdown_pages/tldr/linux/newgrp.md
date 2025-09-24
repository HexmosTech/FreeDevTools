---
title: "Newgrp - Switch User Group Membership | Online Free DevTools by Hexmos"
name: newgrp
path: /freedevtools/tldr/linux/newgrp
canonical: "https://hexmos.com/freedevtools/tldr/linux/newgrp/"
description: "Switch user group with Newgrp. Change primary group membership and reset to default with this Linux command. Free online tool, no registration required."
category: linux
keywords:
- linux group membership
- newgrp command
- change user group
- reset group membership
- linux primary group
- command line group
- group management linux
- linux user administration
- shell group change
- /etc/passwd group
features:
- Switch a user's primary group membership.
- Reset group membership to default.
- Use with a specific group name.
- Operate entirely from the command line.
- Reflect group changes immediately in current shell session.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# newgrp

> Switch primary group membership.
> More information: <https://manned.org/newgrp>.

- Change user's primary group membership:

`newgrp {{group_name}}`

- Reset primary group membership to user's default group in `/etc/passwd`:

`newgrp`
