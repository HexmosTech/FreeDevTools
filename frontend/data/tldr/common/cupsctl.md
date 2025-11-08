---
title: "CUPS Control - Manage Printing System Configuration | Online Free DevTools by Hexmos"
name: cupsctl
path: "/freedevtools/tldr/common/cupsctl/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cupsctl/"
description: "Manage CUPS printing system configuration with CUPS Control. Configure printer settings and manage server options efficiently. Free online tool, no registration required."
category: common
keywords:
- CUPS configuration
- printer configuration tool
- print server settings
- cupsctl command
- CUPS administration
- Linux printer configuration
- macOS printer configuration
- common printing system
- CUPS server control
- print management command
features:
- Display current CUPS configuration values
- Configure CUPS server options remotely
- Enable or disable encryption for CUPS connections
- Control debug logging for CUPS
- Manage remote administration settings for CUPS
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cupsctl

> Update or query a server's `cupsd.conf`.
> More information: <https://openprinting.github.io/cups/doc/man-cupsctl.html>.

- Display the current configuration values:

`cupsctl`

- Display the configuration values of a specific server:

`cupsctl -h {{server[:port]}}`

- Enable encryption on the connection to the scheduler:

`cupsctl -E`

- Enable or disable debug logging to the `error_log` file:

`cupsctl {{--debug-logging|--no-debug-logging}}`

- Enable or disable remote administration:

`cupsctl {{--remote-admin|--no-remote-admin}}`

- Parse the current debug logging state:

`cupsctl | grep '^_debug_logging' | awk -F= '{print $2}'`
