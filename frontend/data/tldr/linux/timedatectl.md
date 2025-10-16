---
title: "Timedatectl - Control System Time & Date | Online Free DevTools by Hexmos"
name: timedatectl
path: "/freedevtools/tldr/linux/timedatectl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/timedatectl/"
description: "Control system time and date with timedatectl. Manage timezones and NTP synchronization using the command line. Free online tool, no registration required."
category: linux
keywords:
- linux time management
- timedatectl command
- system time control
- linux date settings
- timezone configuration linux
- NTP synchronization linux
- hardware clock control
- linux clock settings
- timedatectl timezone list
- set system time linux
features:
- Set the system's current time and date
- List available timezones for configuration
- Enable or disable Network Time Protocol (NTP)
- Configure the system's timezone
- Set the hardware clock to localtime
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# timedatectl

> Control the system time and date.
> More information: <https://manned.org/timedatectl>.

- Check the current system clock time:

`timedatectl`

- Set the local time of the system clock directly:

`timedatectl set-time "{{yyyy-MM-dd hh:mm:ss}}"`

- List available timezones:

`timedatectl list-timezones`

- Set the system timezone:

`timedatectl set-timezone {{timezone}}`

- Enable Network Time Protocol (NTP) synchronization:

`timedatectl set-ntp on`

- Change the hardware clock time standard to localtime:

`timedatectl set-local-rtc 1`
