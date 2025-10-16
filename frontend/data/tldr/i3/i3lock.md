---
title: "Lock Screen - Secure i3lock with Commands | Online Free DevTools by Hexmos"
name: i3lock
path: "/freedevtools/tldr/i3/i3lock/"
canonical: "https://hexmos.com/freedevtools/tldr/i3/i3lock/"
description: "Secure your i3lock screen with command-line options. Customize appearance and security settings for enhanced privacy using this simple screen locker. Free online tool, no registration required."
category: common
keywords:
- i3lock screen locker
- Linux screen lock
- i3 window manager security
- command line screen lock
- lock screen customization
- PNG background i3lock
- disable unlock indicator i3lock
- colored background i3lock
- failed login attempts i3lock
- screen lock tiling
features:
- Lock screen with a custom image or color.
- Disable the unlock indicator for enhanced privacy.
- Display the number of failed login attempts.
- Tile a background image across multiple monitors.
- Control mouse pointer visibility on the lock screen.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# i3lock

> Simple screen locker built for the i3 window manager.
> More information: <https://manned.org/i3lock>.

- Lock the screen showing a white background:

`i3lock`

- Lock the screen with a simple color background (rrggbb format):

`i3lock {{[-c|--color]}} {{0000ff}}`

- Lock the screen to a PNG background:

`i3lock {{[-i|--image]}} {{path/to/file.png}}`

- Lock the screen and disable the unlock indicator (removes feedback on keypress):

`i3lock {{[-u|--no-unlock-indicator]}}`

- Lock the screen and don't hide the mouse pointer:

`i3lock {{[-p|--pointer]}} {{default}}`

- Lock the screen to a PNG background tiled over all monitors:

`i3lock {{[-i|--image]}} {{path/to/file.png}} {{[-t|--tiling]}}`

- Lock the screen and show the number of failed login attempts:

`i3lock {{[-f|--show-failed-attempts]}}`
