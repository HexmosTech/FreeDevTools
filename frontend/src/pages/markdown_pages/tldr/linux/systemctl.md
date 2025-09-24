---
title: "Control Systemd - Manage Services with systemctl | Online Free DevTools by Hexmos"
name: systemctl
path: /freedevtools/tldr/linux/systemctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemctl/"
description: "Control and manage systemd services with the systemctl command.  Start, stop, restart, enable, and disable services easily. Free online tool, no registration required."
category: linux
keywords:
  - systemctl commands
  - systemd service manager
  - linux systemd control
  - systemctl status check
  - systemctl enable disable
  - manage linux services
  - systemctl restart service
  - linux service management
  - systemd unit control
  - systemctl list units
features:
  - Manage systemd services and units.
  - Start, stop, restart, reload, and check the status of services.
  - Enable or disable services at boot time.
  - List running, failed, or all units.
  - Reload systemd to detect changes in unit files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# systemctl

> Control the systemd system and service manager.
> Some subcommands such as `disable`, `status`, `reboot` etc. have their own usage documentation.
> More information: <https://www.freedesktop.org/software/systemd/man/systemctl.html>.

- Show all running services:

`systemctl status`

- List failed units:

`systemctl --failed`

- Start/Stop/Restart/Reload/Show the status a service:

`systemctl {{start|stop|restart|reload|status}} {{unit}}`

- Enable/Disable a unit to be started on bootup:

`systemctl {{enable|disable}} {{unit}}`

- Reload systemd, scan for new or changed units:

`systemctl daemon-reload`

- Check if a unit is active/enabled/failed:

`systemctl {{is-active|is-enabled|is-failed}} {{unit}}`

- List all service/socket/automount units filtering by running/failed state:

`systemctl list-units {{[-t|--type]}} {{service|socket|automount}} --state {{failed|running}}`

- Show the contents & absolute path of a unit file or edit it:

`systemctl {{cat|edit}} {{unit}}`
