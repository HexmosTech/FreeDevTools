---
title: "Manage GNOME Display - Control GDM Settings | Online Free DevTools by Hexmos"
name: gdm
path: "/freedevtools/tldr/gdm/gdm/"
canonical: "https://hexmos.com/freedevtools/tldr/gdm/gdm/"
description: "Manage GNOME display settings with GDM. Control display manager behavior and configure X server sessions. Free online tool, no registration required."
category: common
keywords:
- gnome display manager
- gdm configuration
- x display manager
- linux display settings
- display manager control
- gdm command line
- gdm no daemon
- gdm no console
- x server management
- ubuntu display manager
features:
- Run the GNOME Display Manager application
- Prevent GDM from running as a daemon process
- Disable GDM management of local console X servers
- Preserve environment variables that start with LD_
- Display help and version information for GDM
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdm

> The GNOME Display Manager (GDM) is a replacement for the X Display Manager (XDM).
> See also: `gdm-binary`, `gdmsetup`, `gdm-stop`, `gdm-restart`, `gdm-safe-restart`.
> More information: <https://manned.org/gdm>.

- Run the GNOME Display Manager application:

`gdm`

- Prevent `gdm` from being run as a daemon background process:

`gdm --nodaemon`

- Disable `gdm` management of local console X servers for headless or remote environments:

`gdm --no-console`

- Prevent sanitizing environment variables that start with `LD_`:

`gdm --preserve-ld-vars`

- Display help:

`gdm --help`

- Display version:

`gdm --version`
