---
title: "Pake - Create Desktop Apps from Webpages | Online Free DevTools by Hexmos"
name: pake
path: "/freedevtools/tldr/common/pake/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pake/"
description: "Create desktop applications with Pake. Package webpages into native apps using Rust/Tauri for cross-platform development. Free online tool, no registration required."
category: common
keywords:
- webpage to app converter
- website to desktop application
- rust tauri app builder
- pake app generator
- cross-platform app creation
- web app packaging tool
- desktop app from url
- native app wrapper
- html to desktop app
- linux macos windows app
features:
- Package websites into native desktop applications.
- Customize app name and icon.
- Set window size and resizability.
- Enable fullscreen mode.
- Create apps with transparent title bars.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pake

> Turn any webpage into a desktop app with Rust/Tauri.
> More information: <https://github.com/tw93/Pake>.

- Package a web page:

`pake {{https://www.google.com/}}`

- Package a web page with a specific window size:

`pake --width {{800}} --height {{600}} {{https://www.google.com/}}`

- Package a web page with a custom application name and icon:

`pake --name {{Google}} --icon {{path/to/icon.ico}} {{https://www.google.com/}}`

- Package a web page with a non-resizable window:

`pake --no-resizable {{https://www.google.com/}}`

- Package a web page with fullscreen mode:

`pake --fullscreen {{https://www.google.com/}}`

- Package a web page with a transparent title bar:

`pake --transparent {{https://www.google.com/}}`
