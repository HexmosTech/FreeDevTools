---
title: "Lock Screen - Control Swaylock Screen Locking | Online Free DevTools by Hexmos"
name: swaylock
path: "/freedevtools/tldr/common/swaylock/"
canonical: "https://hexmos.com/freedevtools/tldr/common/swaylock/"
description: "Control screen locking with Swaylock. Enhance security by locking your Wayland compositor screen quickly and easily. Free online tool, no registration required."
category: common
keywords:
- wayland screen locker
- swaylock configuration
- linux screen lock
- command line screen lock
- swaylock daemonize
- wayland compositor security
- screen lock image
- screen lock color
- swaylock failed attempts
- swaylock config file
features:
- Lock screen with custom configuration
- Lock screen using a specified background color
- Lock screen using a custom image
- Detach from controlling terminal for background operation
- Display number of failed login attempts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swaylock

> Screen locking utility for Wayland compositors.
> More information: <https://manned.org/swaylock>.

- Lock the screen using the config in `$HOME/.swaylock/config` or `$XDG_CONFIG_HOME/swaylock/config`:

`swaylock`

- Lock the screen with a simple color background (`rrggbb` format):

`swaylock {{[-c|--color]}} {{0000ff}}`

- Lock the screen with a background image:

`swaylock {{[-i|--image]}} {{path/to/image}}`

- Lock the screen and disable the unlock indicator (removes feedback on keypress):

`swaylock {{[-u|--no-unlock-indicator]}}`

- Detach from the controlling terminal after locking (like `i3lock`):

`swaylock {{[-f|--daemonize]}}`

- Lock the screen with a background image tiled over all monitors:

`swaylock {{[-i|--image]}} {{path/to/image}} {{[-t|--tiling]}}`

- Lock the screen and show the number of failed login attempts:

`swaylock {{[-F|--show-failed-attempts]}}`

- Load the configuration from a specific file:

`swaylock {{[-C|--config]}} {{path/to/config}}`
