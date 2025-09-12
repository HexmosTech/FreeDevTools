---
title: "Pmset - Control macOS Power Management | Free DevTools"
name: pmset
path: /freedevtools/tldr/osx/pmset
canonical: "https://hexmos.com/freedevtools/tldr/osx/pmset/"
description: "Control macOS power management settings with pmset. Optimize battery life, schedule wake-ups, and manage display sleep options. Free online tool, no registration required."
category: osx
keywords:
- macos power management
- pmset command line
- osx energy saver
- mac sleep settings
- battery optimization mac
- schedule wake up mac
- display sleep macos
- system power settings mac
- mac power configuration
- mac power management terminal
features:
- Configure display sleep settings
- Manage system sleep schedule
- Control battery usage options
- Schedule automatic wake-up times
- Restore default power settings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pmset

> Configure macOS power management settings, as one might do in System Preferences > Energy Saver.
> Commands that modify settings must begin with `sudo`.
> More information: <https://keith.github.io/xcode-man-pages/pmset.1.html>.

- Display the current power management settings:

`pmset -g`

- Display the current power source and battery levels:

`pmset -g batt`

- Put display to sleep immediately:

`pmset displaysleepnow`

- Set display to never sleep when on charger power:

`sudo pmset -c displaysleep 0`

- Set display to sleep after 15 minutes when on battery power:

`sudo pmset -b displaysleep 15`

- Schedule computer to automatically wake up every weekday at 9 AM:

`sudo pmset repeat wake MTWRF 09:00:00`

- Restore to system defaults:

`sudo pmset -a displaysleep 10 disksleep 10 sleep 30 womp 1`
