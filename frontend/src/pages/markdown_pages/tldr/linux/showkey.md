---
title: "Showkey - Display Keycodes | Online Free DevTools by Hexmos"
name: showkey
path: /freedevtools/tldr/linux/showkey
canonical: "https://hexmos.com/freedevtools/tldr/linux/showkey/"
description: "Display keycodes with Showkey, a command-line tool for Linux keyboard debugging and remapping. Inspect keypresses and diagnose keyboard issues with ease. Free online tool, no registration required."
category: linux
keywords:
- keycode display
- keyboard debugging linux
- linux keyboard remapping
- showkey linux command
- scancode viewer
- linux input monitoring
- keyboard event analysis
- terminal keycode tool
- linux key identifier
- command line keyboard utility
features:
- Displays keycodes of pressed keys
- Shows scancodes in hexadecimal format
- Outputs keycodes in decimal format
- Displays ASCII, decimal, and hexadecimal key representations
- Helps debug keyboard-related issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# showkey

> Display the keycode of pressed keys on the keyboard, helpful for debugging keyboard-related issues and key remapping.
> More information: <https://manned.org/showkey>.

- View keycodes in decimal:

`sudo showkey`

- Display scancodes in hexadecimal:

`sudo showkey {{[-s|--scancodes]}}`

- Display keycodes in decimal (default):

`sudo showkey {{[-k|--keycodes]}}`

- Display keycodes in ASCII, decimal, and hexadecimal:

`sudo showkey {{[-a|--ascii]}}`

- Exit the program:

`<Ctrl d>`
