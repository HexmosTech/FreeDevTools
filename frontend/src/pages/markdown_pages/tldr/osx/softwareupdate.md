---
title: "Software Update - Update macOS Apps | Online Free DevTools by Hexmos"
name: softwareupdate
path: /freedevtools/tldr/osx/softwareupdate
canonical: "https://hexmos.com/freedevtools/tldr/osx/softwareupdate/"
description: "Update macOS software with Software Update.  Download, install, and manage updates via the command line interface. Free online tool, no registration required."
category: osx
keywords:
- macos software update
- app store update
- command line update
- osx package manager
- terminal software update
- macos update cli
- software update mac
- apple software update
- update manager macos
- macos update command
features:
- List available macOS software updates
- Download and install all macOS updates
- Install recommended macOS updates only
- Install specific macOS application updates
- Manage macOS updates via the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# softwareupdate

> Update macOS App Store apps.
> More information: <https://keith.github.io/xcode-man-pages/softwareupdate.8.html>.

- List all available updates:

`softwareupdate --list`

- Download and install all updates:

`softwareupdate --install --all`

- Download and install all [r]ecommended updates:

`softwareupdate --install --recommended`

- Download and install a specific app:

`softwareupdate --install {{update_name}}`
