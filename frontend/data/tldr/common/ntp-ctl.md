---
title: "NTP Control - Manage Time Synchronization | Online Free DevTools by Hexmos"
name: ntp-ctl
path: "/freedevtools/tldr/common/ntp-ctl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ntp-ctl/"
description: "Control NTP synchronization with NTP-CTL. Manage daemon status, validate configurations, and force synchronization. Free online tool, no registration required."
category: common
keywords:
- NTP control
- NTP daemon management
- NTP server status
- Time synchronization client
- ntpd-rs control
- NTP configuration validation
- Linux NTP client
- System time control
- Network Time Protocol
- Command-line NTP tool
features:
- Display NTP daemon status
- Validate NTP configuration files
- Force clock synchronization
- Manage ntpd-rs daemon
- Interact with NTP server
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ntp-ctl

> Management client for the `ntpd-rs` daemon.
> More information: <https://docs.ntpd-rs.pendulum-project.org/man/ntp-ctl.8>.

- Display information about the current state of the NTP daemon:

`ntp-ctl status`

- Check if the specified configuration file (default: `/etc/ntpd-rs/ntp.toml`) is valid:

`ntp-ctl {{[-c|--config]}} {{path/to/config}} validate`

- Interactively run a single synchronization of the clock:

`sudo ntp-ctl force-sync`
