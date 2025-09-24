---
title: "Plasmashell - Restart Plasma Desktop | Online Free DevTools by Hexmos"
name: plasmashell
path: /freedevtools/tldr/linux/plasmashell
canonical: "https://hexmos.com/freedevtools/tldr/linux/plasmashell/"
description: "Restart Plasma Desktop with Plasmashell. Manage and control your Plasma desktop environment effortlessly using command line. Free online tool, no registration required."
category: linux
keywords:
- linux plasmashell
- plasma desktop manager
- kde plasma control
- linux desktop restart
- systemd plasma restart
- plasmashell replace
- linux command line tools
- desktop environment manager
- linux gui control
- plasmashell help
features:
- Restart Plasma Desktop environment
- Restart without systemd
- Display command-line options
- Display Qt options
- Control Plasma desktop from terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# plasmashell

> Start and restart Plasma Desktop.
> More information: <https://invent.kde.org/plasma/plasma-desktop>.

- Restart `plasmashell`:

`systemctl restart --user plasma-plasmashell`

- Restart `plasmashell` without systemd:

`plasmashell --replace & disown`

- Display help on command-line options:

`plasmashell {{[-h|--help]}}`

- Display help, including Qt options:

`plasmashell --help-all`
