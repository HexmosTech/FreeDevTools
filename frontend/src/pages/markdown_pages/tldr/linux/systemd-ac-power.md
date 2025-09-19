---
title: "AC Power Status - Check Power Connection with systemd | Online Free DevTools by Hexmos"
name: systemd-ac-power
path: /freedevtools/tldr/linux/systemd-ac-power
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-ac-power/"
description: "Check AC power status with systemd-ac-power. Determine if your Linux system is connected to external power source via the command line. Free online tool, no registration required."
category: linux
keywords:
- systemd AC power status
- Linux power management
- check power source
- systemd service status
- command line power check
- AC adapter detection
- battery status Linux
- power connection indicator
- systemd power control
- Linux system monitoring
features:
- Determine if the system is connected to AC power.
- Print "yes" or "no" to stdout for verbose output.
- Return exit code 0 if connected to AC power.
- Return non-zero exit code if not connected to AC power.
- Silently check the AC power status without verbose output.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-ac-power

> Report whether the computer is connected to an external power source.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-ac-power.html>.

- Silently check and return a 0 status code when running on AC power, and a non-zero code otherwise:

`systemd-ac-power`

- Additionally print `yes` or `no` to `stdout`:

`systemd-ac-power {{[-v|--verbose]}}`
