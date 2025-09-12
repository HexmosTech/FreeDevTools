---
title: "Control Lock Screen - Betterlockscreen Command | Free DevTools"
name: betterlockscreen
path: /freedevtools/tldr/unknown/betterlockscreen
canonical: "https://hexmos.com/freedevtools/tldr/unknown/betterlockscreen/"
description: "Control lock screen appearance with Betterlockscreen. Customize background images, display custom text, and set monitor timeout with ease. Free online tool, no registration required."
category: unknown
keywords:
- lock screen manager
- linux lock screen
- betterlockscreen command
- command-line lock
- screen locker customization
- background image manager
- monitor timeout command
- linux security tools
- terminal lock screen
- lock screen automation
features:
- Customize lock screen background images
- Display custom text on the lock screen
- Set a custom monitor off timeout
- Lock the screen via command line
- Automate lock screen configuration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# betterlockscreen

> Simple, minimal lock screen.
> More information: <https://github.com/betterlockscreen/betterlockscreen#usage>.

- Lock the screen:

`betterlockscreen {{[-l|--lock]}}`

- Change the lock screen background:

`betterlockscreen {{[-u|--update]}} {{path/to/image.png}}`

- Lock the screen, showing some custom text:

`betterlockscreen {{[-l|--lock]}} pixel --text "{{custom lock screen text}}"`

- Lock the screen, with a custom monitor off timeout in seconds:

`betterlockscreen --off {{5}} {{[-l|--lock]}}`
