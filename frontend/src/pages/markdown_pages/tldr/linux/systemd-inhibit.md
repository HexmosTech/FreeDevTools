---
title: "Control System Power States with systemd-inhibit | Online Free DevTools by Hexmos"
name: systemd-inhibit
path: /freedevtools/tldr/linux/systemd-inhibit
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-inhibit/"
description: "Control system power states with systemd-inhibit.  Prevent system sleep, shutdown, and idle. Free online tool, no registration required."
category: linux
keywords:
  - systemd power management
  - systemd inhibit commands
  - linux systemd control
  - systemd shutdown inhibition
  - systemd sleep prevention
  - linux power state control
  - systemd inhibitor list
  - systemd-inhibit usage
  - command line power control
  - linux command line tools
features:
  - Prevent system sleep and suspend
  - Inhibit system shutdown and reboot
  - Block automatic idle handling
  - Manage power states from the command line
  - Control system power based on specific events or commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-inhibit

> Prohibit the system from entering certain power states.
> Inhibitor locks may be used to block or delay system sleep and shutdown requests as well as automatic idle handling.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-inhibit.html>.

- List all active inhibition locks and the reasons for their creation:

`systemd-inhibit --list`

- Block system shutdown for a specified number of seconds with the `sleep` command:

`systemd-inhibit --what shutdown sleep {{5}}`

- Keep the system from sleeping or idling until the download is complete:

`systemd-inhibit --what sleep:idle wget {{https://example.com/file}}`

- Ignore lid close switch until the script exits:

`systemd-inhibit --what sleep:handle-lid-switch {{path/to/script}}`

- Ignore power button press while command is running:

`systemd-inhibit --what handle-power-key {{command}}`

- Describe who and why created the inhibitor (default: the command and its arguments for `--who` and `Unknown reason` for `--why`):

`systemd-inhibit --who {{$USER}} --why {{reason}} --what {{operation}} {{command}}`
