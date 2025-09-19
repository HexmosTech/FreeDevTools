---
title: "XDG Settings - Manage Desktop Environment Settings | Online Free DevTools by Hexmos"
name: xdg-settings
path: /freedevtools/tldr/linux/xdg-settings
canonical: "https://hexmos.com/freedevtools/tldr/linux/xdg-settings/"
description: "Manage XDG desktop environment settings with xdg-settings. Configure default applications, URL handlers and more on Linux. Free online tool, no registration required."
category: linux
keywords:
- xdg settings manager
- desktop environment configuration
- linux default application
- url scheme handler linux
- mime type association linux
- xdg open settings
- default web browser linux
- default pdf viewer linux
- freedesktop.org standards
- linux configuration tool
features:
- Set the default web browser
- Configure the default mail handler
- Assign default application for specific file types
- View current desktop environment settings
- Manage URI scheme associations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xdg-settings

> Manage settings of XDG-compatible desktop environments.
> More information: <https://portland.freedesktop.org/doc/xdg-settings.html>.

- Print the default web browser:

`xdg-settings get {{default-web-browser}}`

- Set the default web browser to Firefox:

`xdg-settings set {{default-web-browser}} {{firefox.desktop}}`

- Set the default mail URL scheme handler to Evolution:

`xdg-settings set {{default-url-scheme-handler}} {{mailto}} {{evolution.desktop}}`

- Set the default PDF document viewer:

`xdg-settings set {{pdf-viewer.desktop}}`

- Display help:

`xdg-settings --help`
