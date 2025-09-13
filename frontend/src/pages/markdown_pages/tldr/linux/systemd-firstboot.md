---
title: "Systemd-firstboot - Initialize System Settings | Free DevTools"
name: systemd-firstboot
path: /freedevtools/tldr/linux/systemd-firstboot
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-firstboot/"
description: "Initialize system settings with systemd-firstboot. Configure hostname, keymap, and root password effortlessly on Linux. Free online tool, no registration required."
category: linux
keywords:
- systemd firstboot
- linux system initialization
- systemd configuration
- first boot setup linux
- set hostname linux
- configure keymap linux
- root password manager
- systemd root password reset
- linux first boot config
- systemd-firstboot linux
features:
- Set system hostname during first boot
- Configure keyboard layout for Linux
- Set or reset root password securely
- Force configuration even if files exist
- Remove existing systemd-firstboot configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-firstboot

> Initialize basic system settings on or before the first boot-up of a system.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-firstboot.html>.

- Operate on the specified directory instead of the root directory of the host system:

`sudo systemd-firstboot --root {{path/to/root_directory}}`

- Set the system keyboard layout:

`sudo systemd-firstboot --keymap {{keymap}}`

- Set the system hostname:

`sudo systemd-firstboot --hostname {{hostname}}`

- Set the root user's password:

`sudo systemd-firstboot --root-password {{password}}`

- Prompt the user interactively for a specific basic setting:

`sudo systemd-firstboot --prompt {{setting}}`

- Force writing configuration even if the relevant files already exist:

`sudo systemd-firstboot --force`

- Remove all existing files that are configured by `systemd-firstboot`:

`sudo systemd-firstboot --reset`

- Remove the password of the system's root user:

`sudo systemd-firstboot --delete-root-password`
