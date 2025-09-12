---
title: "Control X Server - Manage X Settings | Free DevTools"
name: xset
path: /freedevtools/tldr/unknown/xset
canonical: "https://hexmos.com/freedevtools/tldr/unknown/xset/"
description: "Control X server user preferences with xset. Disable screensaver, adjust bell sound, and manage DPMS settings easily. Free online tool, no registration required."
category: unknown
keywords:
- x server control
- xset configuration
- linux display settings
- x display manager
- screensaver disable
- dpms management
- bell sound control
- x server query
- x window system settings
- x server preferences
features:
- Disable the X server screensaver
- Disable the X server bell sound
- Configure screensaver timeout settings
- Enable or disable DPMS energy saving features
- Query information on any X server display
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xset

> User preference utility for X.
> More information: <https://manned.org/xset>.

- Disable the screensaver:

`xset s off`

- Disable the bell sound:

`xset b off`

- Set the screensaver to start after 60 minutes of inactivity:

`xset s 3600 3600`

- Disable DPMS (Energy Star) features:

`xset -dpms`

- Enable DPMS (Energy Star) features:

`xset +dpms`

- Query information on any X server:

`xset -display :{{0}} q`
