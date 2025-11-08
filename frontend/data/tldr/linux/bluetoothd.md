---
title: "Control Bluetooth Devices - Bluetoothd Management | Online Free DevTools by Hexmos"
name: bluetoothd
path: "/freedevtools/tldr/linux/bluetoothd/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/bluetoothd/"
description: "Control Bluetooth devices on Linux with bluetoothd. Start, configure, and debug your Bluetooth daemon easily. Free online tool, no registration required."
category: linux
keywords:
- linux bluetooth management
- bluetooth daemon control
- bluetoothd configuration
- linux bluetooth troubleshooting
- bluetoothctl alternative
- systemd bluetooth service
- bluetooth adapter manager
- bluetooth device discovery linux
- command line bluetooth
- bluetoothd debug
features:
- Start the Bluetooth daemon
- Configure Bluetooth daemon with a specific file
- Debug Bluetooth daemon output to stderr
- Specify debugging output from particular source files
- Run the Bluetooth daemon without detaching from the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bluetoothd

> Daemon to manage bluetooth devices.
> More information: <https://manned.org/bluetoothd>.

- Start the daemon:

`bluetoothd`

- Start the daemon, logging to `stdout`:

`bluetoothd {{[-n|--nodetach]}}`

- Start the daemon with a specific configuration file (defaults to `/etc/bluetooth/main.conf`):

`bluetoothd {{[-f|--configfile]}} {{path/to/file}}`

- Start the daemon with verbose output to `stderr`:

`bluetoothd {{[-d|--debug]}}`

- Start the daemon with verbose output coming from specific files in the bluetoothd or plugins source:

`bluetoothd {{[-d|--debug=]}}{{path/to/file1:path/to/file2:...}}`
