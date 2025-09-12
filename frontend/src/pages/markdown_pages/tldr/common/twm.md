---
title: "Control twm - X Window Manager | Free DevTools"
name: twm
path: /freedevtools/tldr/common/twm
canonical: "https://hexmos.com/freedevtools/tldr/common/twm/"
description: "Control windows with twm, the X Window Manager. Configure X server connections, manage screens, and customize startup files. Free online tool, no registration required."
category: common
keywords:
- X Window Manager
- twm
- X server connection
- window management
- X display configuration
- X startup file
- window manager configuration
- Linux window manager
- Unix window manager
- X11 window manager
features:
- Connect to default or specified X servers
- Manage only the default X screen
- Use a custom startup file for configuration
- Enable verbose mode for debugging
- Control window placement and behavior
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# twm

> A window manager for the X Window system.
> More information: <https://manned.org/twm>.

- Connect to the default X server:

`twm`

- Connect to a specific X server:

`twm {{[-d|-display]}} {{display}}`

- Only manage the default screen:

`twm {{[-s|-single]}}`

- Use a specific startup file:

`twm {{[-f|-file]}} {{path/to/file}}`

- Enable verbose mode and print unexpected errors in X:

`twm {{[-v|-verbose]}}`
