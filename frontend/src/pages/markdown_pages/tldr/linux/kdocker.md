---
title: "Dock Applications - Control System Tray Apps | Free DevTools"
name: kdocker
path: /freedevtools/tldr/unknown/kdocker
canonical: "https://hexmos.com/freedevtools/tldr/unknown/kdocker/"
description: "Control applications in the system tray with KDocker. Easily minimize apps to the tray and manage their visibility. Free online tool, no registration required."
category: unknown
keywords:
- system tray application
- dock application linux
- minimize app to tray
- kdocker system tray
- linux system tray
- application window docker
- window management linux
- application docking tool
- system tray manager
- linux command line tool
features:
- Dock applications to the system tray.
- Send focused window to the system tray.
- Customize the tray icon for docked applications.
- Minimize applications to the tray upon losing focus.
- Control application visibility through the system tray.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kdocker

> Easily dock applications to the system tray.
> More information: <https://github.com/user-none/KDocker>.

- Display a cursor to send a window to the system tray when pressing the left mouse button (press any other mouse button to cancel):

`kdocker`

- Open an application and send it to the system tray:

`kdocker {{application}}`

- Send focused window to the system tray:

`kdocker -f`

- Display a cursor to send a window to the system tray with a custom icon when pressing the left mouse button:

`kdocker -i /{{path/to/icon}}`

- Open an application, send it to the system tray and if focus is lost, minimize it:

`kdocker -l {{application}}`

- Display version:

`kdocker --version`
