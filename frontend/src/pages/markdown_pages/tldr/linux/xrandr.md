---
title: "xrandr - Control Screen Resolution | Online Free DevTools by Hexmos"
name: xrandr
path: /freedevtools/tldr/linux/xrandr
canonical: "https://hexmos.com/freedevtools/tldr/linux/xrandr/"
description: "Control screen resolution and orientation with xrandr.  Manage multiple displays, set brightness, and configure output settings easily. Free online tool, no registration required."
category: linux
keywords:
  - screen resolution configuration
  - xrandr command linux
  - display management linux
  - monitor configuration linux
  - output settings xrandr
  - xrandr resolution change
  - linux display settings
  - xrandr brightness control
  - multiple monitor setup xrandr
  - xrandr command examples
features:
  - Set screen resolution and refresh rate.
  - Configure display orientation (landscape, portrait).
  - Manage multiple display outputs (e.g., HDMI, DisplayPort).
  - Enable and disable display outputs.
  - Adjust display brightness levels.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xrandr

> Set the size, orientation and/or reflection of the outputs for a screen.
> More information: <https://www.x.org/releases/current/doc/man/man1/xrandr.1.xhtml>.

- Display the current state of the system (known screens, resolutions, ...):

`xrandr {{[-q|--query]}}`

- Disable disconnected outputs and enable connected ones with default settings:

`xrandr --auto`

- Change the resolution and update frequency of DisplayPort 1 to 1920x1080, 60Hz:

`xrandr --output DP1 --mode 1920x1080 {{[-r|--rate]}} 60`

- Set the resolution of HDMI2 to 1280x1024 and put it on the right of DP1:

`xrandr --output HDMI2 --mode 1280x1024 --right-of DP1`

- Disable the VGA1 output:

`xrandr --output VGA1 --off`

- Set the brightness for LVDS1 to 50%:

`xrandr --output LVDS1 --brightness 0.5`

- Display the current state of any X server:

`xrandr {{[-d|--display]}} :{{0}} {{[-q|--query]}}`
