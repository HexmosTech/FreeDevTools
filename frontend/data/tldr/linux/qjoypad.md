---
title: "Control Gamepads - QJoypad Keyboard/Mouse Translator | Online Free DevTools by Hexmos"
name: qjoypad
path: "/freedevtools/tldr/linux/qjoypad/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qjoypad/"
description: "Translate gamepad input into keyboard strokes and mouse actions with QJoypad.  Configure custom layouts and manage multiple devices. Free online tool, no registration required."
category: linux
keywords:
  - gamepad keyboard translator
  - joystick keyboard mapper
  - gamepad mouse emulator
  - linux gamepad controller
  - qjoypad configuration
  - joystick input translator
  - gamepad mapping software
  - custom gamepad layouts
  - keyboard remapper gamepad
  - gamepad to mouse converter
features:
  - Translates gamepad inputs to keyboard strokes and mouse clicks.
  - Supports custom layouts for personalized control schemes.
  - Allows specifying input devices from a specific directory.
  - Offers options for managing system tray icon visibility.
  - Enables updating device and layout lists in a running instance.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qjoypad

> Translate input from gamepads or joysticks into keyboard strokes or mouse actions.
> More information: <https://qjoypad.sourceforge.net/doc/doc_index.html>.

- Start QJoyPad:

`qjoypad`

- Start QJoyPad and look for devices in a specific directory:

`qjoypad --device={{path/to/directory}}`

- Start QJoyPad but don't show a system tray icon:

`qjoypad --notray`

- Start QJoyPad and force the window manager to use a system tray icon:

`qjoypad --force-tray`

- Force a running instance of QJoyPad to update its list of devices and layouts:

`qjoypad --update`

- Load the given layout in an already running instance of QJoyPad, or start QJoyPad using the given layout:

`qjoypad "{{layout}}"`
