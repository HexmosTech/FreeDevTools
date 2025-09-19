---
title: "D-Bus Daemon - Control Message Bus | Online Free DevTools by Hexmos"
name: dbus-daemon
path: /freedevtools/tldr/linux/dbus-daemon
canonical: "https://hexmos.com/freedevtools/tldr/linux/dbus-daemon/"
description: "Control message exchange with D-Bus Daemon. Configure system-wide and session-specific message buses and manage process communication. Free online tool, no registration required."
category: linux
keywords:
  - d-bus daemon control
  - linux message bus daemon
  - interprocess communication
  - session message daemon
  - system message daemon
  - dbus configuration
  - message bus management
  - linux dbus daemon
  - dbus address configuration
  - dbus syslog
features:
  - Configure D-Bus message buses with specified configuration files.
  - Manage session-specific message bus instances.
  - Manage system-wide message bus instances.
  - Set custom listening addresses for the message bus.
  - Output the process ID to facilitate monitoring.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dbus-daemon

> The D-Bus message daemon, allowing multiple programs to exchange messages.
> More information: <https://dbus.freedesktop.org/doc/dbus-daemon.1.html>.

- Run the daemon with a configuration file:

`dbus-daemon --config-file {{path/to/file}}`

- Run the daemon with the standard per-login-session message bus configuration:

`dbus-daemon --session`

- Run the daemon with the standard systemwide message bus configuration:

`dbus-daemon --system`

- Set the address to listen on and override the configuration value for it:

`dbus-daemon --address {{address}}`

- Output the process ID to `stdout`:

`dbus-daemon --print-pid`

- Force the message bus to write to the system log for messages:

`dbus-daemon --syslog`
