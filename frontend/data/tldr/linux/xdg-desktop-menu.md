---
title: "Manage Desktop Menus - Control App Menus with xdg-desktop-menu | Online Free DevTools by Hexmos"
name: xdg-desktop-menu
path: "/freedevtools/tldr/linux/xdg-desktop-menu/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/xdg-desktop-menu/"
description: "Control and manage desktop application menus with xdg-desktop-menu.  Install, uninstall, and update desktop menu entries easily. Free online tool, no registration required."
category: linux
keywords:
  - linux desktop menu manager
  - xdg-desktop-menu commands
  - manage application menus linux
  - install desktop entries linux
  - uninstall desktop entries linux
  - update desktop menu linux
  - desktop menu management tool
  - linux application menu control
  - xdg-utils desktop menu
  - command-line menu manager
features:
  - Install desktop application menu entries.
  - Uninstall desktop application menu entries.
  - Force an update of the desktop menu system.
  - Manage menu entries with vendor prefix control.
  - Integrate applications seamlessly into the desktop environment's menu.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xdg-desktop-menu

> Install or uninstall desktop menu items.
> More information: <https://manned.org/xdg-desktop-menu>.

- Install an application to the desktop menu system:

`xdg-desktop-menu install {{path/to/file.desktop}}`

- Install an application to the desktop menu system with the vendor prefix check disabled:

`xdg-desktop-menu install --novendor {{path/to/file.desktop}}`

- Uninstall an application from the desktop menu system:

`xdg-desktop-menu uninstall {{path/to/file.desktop}}`

- Force an update of the desktop menu system:

`xdg-desktop-menu forceupdate --mode {{user|system}}`
