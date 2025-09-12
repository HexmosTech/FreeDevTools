---
title: "Manage Latte-Dock - Customize Plasma Dock | Free DevTools"
name: latte-dock
path: /freedevtools/tldr/linux/latte-dock
canonical: "https://hexmos.com/freedevtools/tldr/linux/latte-dock/"
description: "Customize your Plasma desktop dock with Latte-Dock.  Manage layouts, import custom configurations, and clear the cache for optimal performance. Free online tool, no registration required."
category: linux
keywords:
  - plasma dock manager
  - kde dock customization
  - latte-dock commands
  - linux desktop customization
  - plasma layout control
  - latte-dock configuration
  - qml cache clearing
  - layout import latte-dock
  - desktop dock management
  - custom plasma dock
features:
  - Clear the Latte-Dock QML cache for improved performance.
  - Import and load the default Latte-Dock layout.
  - Load a specific named layout on startup.
  - Import and load a custom layout from a file.
  - Manage and customize the appearance of the Plasma dock.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# latte-dock

> Replacement dock for Plasma desktop.
> More information: <https://github.com/KDE/latte-dock>.

- Clear QML cache:

`latte-dock --clear-cache`

- Import and load default layout on startup:

`latte-dock --default-layout`

- Load a specific layout on startup:

`latte-dock --layout {{layout_name}}`

- Import and load a specific layout:

`latte-dock --import-layout {{path/to/file}}`
