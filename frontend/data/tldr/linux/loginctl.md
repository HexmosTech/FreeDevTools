---
title: "Loginctl - Manage Systemd Login Sessions | Online Free DevTools by Hexmos"
name: loginctl
path: "/freedevtools/tldr/linux/loginctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/loginctl/"
description: "Manage systemd login sessions easily with Loginctl. Control user sessions, display properties, and execute operations on remote hosts. Free online tool, no registration required."
category: linux
keywords:
- linux session manager
- systemd login control
- loginctl command
- linux user session
- terminate user session linux
- show user properties linux
- linux remote host management
- systemd login manager
- linux user session control
- linux user management
features:
- List all current systemd sessions.
- Display properties of specific sessions and users.
- Terminate user sessions remotely.
- Execute operations on remote hosts.
- Manage user logins and sessions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# loginctl

> Manage the systemd login manager.
> See also: `lslogins`.
> More information: <https://www.freedesktop.org/software/systemd/man/loginctl.html>.

- Print all current sessions:

`loginctl`

- Print all properties of a specific session:

`loginctl show-session {{session_id}} {{[-a|--all]}}`

- Print all properties of a specific user:

`loginctl show-user {{username}}`

- Print a specific property of a user:

`loginctl show-user {{username}} {{[-p|--property]}} {{property_name}}`

- Execute a `loginctl` operation on a remote host:

`loginctl list-users {{[-H|--host]}} {{hostname}}`

- Log a user out on all of their sessions:

`loginctl terminate-user {{username}}`

- Display help:

`loginctl {{[-h|--help]}}`
