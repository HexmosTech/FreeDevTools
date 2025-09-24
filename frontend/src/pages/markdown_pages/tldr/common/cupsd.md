---
title: "Control CUPS Daemon - Manage Print Server | Online Free DevTools by Hexmos"
name: cupsd
path: /freedevtools/tldr/common/cupsd
canonical: "https://hexmos.com/freedevtools/tldr/common/cupsd/"
description: "Control the CUPS daemon with cupsd. Manage print queues, configure printers, and troubleshoot printing issues with this command. Free online tool, no registration required."
category: common
keywords:
- CUPS daemon control
- Print server management
- CUPS configuration
- Printer queue administration
- cupsd command-line
- Linux printing
- macOS printing
- CUPS troubleshooting
- Print job management
- CUPS print server
features:
- Start CUPS daemon in background mode
- Run CUPS daemon in foreground mode for debugging
- Launch CUPS daemon on demand via launchd or systemd
- Load CUPS daemon configuration from a specific file
- Test CUPS configuration files for syntax errors
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cupsd

> Server daemon for the CUPS print server.
> More information: <https://openprinting.github.io/cups/doc/man-cupsd.html>.

- Start `cupsd` in the background, aka. as a daemon:

`cupsd`

- Start `cupsd` on the [f]oreground:

`cupsd -f`

- [l]aunch `cupsd` on-demand (commonly used by `launchd` or `systemd`):

`cupsd -l`

- Start `cupsd` using the specified [`c`]`upsd.conf` configuration file:

`cupsd -c {{path/to/cupsd.conf}}`

- Start `cupsd` using the specified `cups-file`[`s`]`.conf` configuration file:

`cupsd -s {{path/to/cups-files.conf}}`

- [t]est the [`c`]`upsd.conf` configuration file for errors:

`cupsd -t -c {{path/to/cupsd.conf}}`

- [t]est the `cups-file`[`s`]`.conf` configuration file for errors:

`cupsd -t -s {{path/to/cups-files.conf}}`

- Display help:

`cupsd -h`
