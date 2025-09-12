---
title: "Kreadconfig5 - Read KDE Config | Free DevTools"
name: kreadconfig5
path: /freedevtools/tldr/linux/kreadconfig5
canonical: "https://hexmos.com/freedevtools/tldr/linux/kreadconfig5/"
description: "Read KDE configuration settings with Kreadconfig5, a command-line tool for accessing Plasma settings.  Retrieve specific key values and check system configurations. Free online tool, no registration required."
category: linux
keywords:
- KDE configuration reader
- Plasma settings retrieval
- KConfig entry access
- Linux configuration tool
- Systemd boot check
- Command-line config tool
- KDE Plasma configuration
- Kreadconfig5 Linux
- Global configuration reader
- Specific file config reader
features:
- Read keys from global KDE configuration
- Read keys from specific configuration files
- Check if systemd is used for Plasma session startup
- Access configuration values via command line
- Retrieve Plasma settings efficiently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kreadconfig5

> Read KConfig entries for KDE Plasma.
> More information: <https://userbase.kde.org/KDE_System_Administration/Configuration_Files>.

- Read a key from the global configuration:

`kreadconfig5 --group {{group_name}} --key {{key_name}}`

- Read a key from a specific configuration file:

`kreadconfig5 --file {{path/to/file}} --group {{group_name}} --key {{key_name}}`

- Check if systemd is used to start the Plasma session:

`kreadconfig5 --file {{startkderc}} --group {{General}} --key {{systemdBoot}}`
