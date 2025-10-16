---
title: "Cage Kiosk - Open Applications in Kiosk Mode | Online Free DevTools by Hexmos"
name: cage
path: "/freedevtools/tldr/linux/cage/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/cage/"
description: "Open applications instantly with Cage Kiosk. Create a kiosk mode environment, restrict application access, and enhance security. Free online tool, no registration required."
category: linux
keywords:
  - kiosk mode application
  - cage kiosk tool
  - application kiosk mode
  - linux kiosk environment
  - secure application launcher
  - kiosk mode manager
  - kiosk mode configuration
  - application lockdown tool
  - restricted environment setup
  - kiosk mode display settings
features:
  - Launch applications in kiosk mode.
  - Run applications with custom arguments.
  - Hide window decorations for a cleaner interface.
  - Allow terminal switching for debugging.
  - Display command-line help information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cage

> Open an applications in a kiosk mode.
> More information: <https://github.com/cage-kiosk/cage/blob/master/cage.1.scd>.

- Run an application:

`cage {{application}}`

- Give the application arguments:

`cage -- {{application}} {{arguments}}`

- Hide window [d]ecorations (this can lock you from accessing the terminal):

`cage -d {{application}}`

- Allow [s]witching terminals with `<Ctrl Alt F2>`:

`cage -s {{application}}`

- Display help:

`cage -h`
