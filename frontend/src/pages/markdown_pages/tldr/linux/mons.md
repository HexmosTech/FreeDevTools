---
title: "Manage Displays - Control Linux Monitors with Mons | Online Free DevTools by Hexmos"
name: mons
path: /freedevtools/tldr/linux/mons
canonical: "https://hexmos.com/freedevtools/tldr/linux/mons/"
description: "Manage displays easily with Mons, a lightweight Linux monitor control tool. Configure screen mirroring, enable/disable monitors, and adjust resolutions. Free online tool, no registration required."
category: linux
keywords:
- linux display manager
- monitor configuration tool
- screen mirroring linux
- display resolution control
- dual monitor setup linux
- command line display manager
- xrandr alternative
- display arrangement linux
- external monitor control
- mons linux
features:
- Enable or disable specific monitors quickly
- Duplicate display output onto secondary monitor
- Mirror display output using secondary monitor resolution
- Switch between single and dual monitor configurations
- Simplify display management through command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mons

> Quickly manage two displays.
> More information: <https://github.com/Ventto/mons>.

- Enable only the primary monitor:

`mons -o`

- Enable only the secondary monitor:

`mons -s`

- Duplicate the primary monitor onto the secondary monitor, using the resolution of the primary monitor:

`mons -d`

- Mirror the primary monitor onto the secondary monitor, using the resolution of the secondary monitor:

`mons -m`
