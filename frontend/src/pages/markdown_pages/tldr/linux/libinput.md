---
title: "Libinput - Interface with Input Devices | Free DevTools"
name: libinput
path: /freedevtools/tldr/linux/libinput
canonical: "https://hexmos.com/freedevtools/tldr/linux/libinput/"
description: "Interface with input devices using Libinput. Debug device events, visualize interactions, and manage tablet axis values with this powerful Linux command-line tool. Free online tool, no registration required."
category: linux
keywords:
- libinput interface
- linux input management
- device event debugging
- wayland input
- input device configuration
- libinput debug events
- tablet axis debugging
- linux input device
- input device management linux
- libinput events visualization
features:
- List all input devices recognized by libinput.
- Print detailed information about all libinput events.
- Visualize libinput events using a graphical user interface.
- Debug tablet axis values for accurate input readings.
- Display help information for libinput commands.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# libinput

> Interface with libinput.
> More information: <https://wayland.freedesktop.org/libinput/doc/latest/>.

- List all devices recognized by libinput:

`sudo libinput list-devices`

- Print all libinput events:

`sudo libinput debug-events`

- Show a GUI to visualize libinput's events:

`sudo libinput debug-gui`

- Debug tablet axis values:

`sudo libinput debug-tablet`

- Display help:

`libinput {{[-h|--help]}}`
