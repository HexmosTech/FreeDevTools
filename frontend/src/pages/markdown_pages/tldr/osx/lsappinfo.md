---
title: "Control App State - lsappinfo Tool on macOS | Online Free DevTools by Hexmos"
name: lsappinfo
path: "/freedevtools/tldr/osx/lsappinfo"
canonical: "https://hexmos.com/freedevtools/tldr/osx/lsappinfo/"
description: "Control app state on macOS with lsappinfo. Query application details, list running apps, and show front application information. Free online tool, no registration required."
category: osx
keywords:
- macOS app state control
- macOS application information
- lsappinfo command macOS
- macOS process management
- application details macOS
- running apps list macOS
- front application macOS
- CoreApplicationServices query
- macOS application monitoring
- app state management
features:
- List all running applications with their details.
- Show the front application.
- Display detailed information for a specific application.
- Control application state via command line.
- Query CoreApplicationServices for app information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsappinfo

> Control and query CoreApplicationServices about the app state on the system.
> More information: <https://keith.github.io/xcode-man-pages/lsappinfo.8.html>.

- List all running applications with their details:

`lsappinfo list`

- Show the front application:

`lsappinfo front`

- Show the information for a specific application:

`lsappinfo info {{com.apple.calculator}}`
