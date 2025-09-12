---
title: "Xcode Select - Control Xcode Versions | Free DevTools"
name: xcode-select
path: /freedevtools/tldr/osx/xcode-select
canonical: "https://hexmos.com/freedevtools/tldr/osx/xcode-select/"
description: "Control Xcode versions quickly with Xcode Select. Switch developer directories, update Xcode paths, and manage command-line tools with ease. Free online tool, no registration required."
category: osx
keywords:
- Xcode version manager
- macOS developer tools
- Xcode command line utility
- Xcode developer directory selection
- macOS Xcode path configuration
- Xcode CLI tool
- Xcode development environment management
- Xcode toolchain selection
- Xcode SDK configuration
- Xcode command-line tools installer
features:
- Switch between multiple Xcode versions
- Update Xcode path after moving the application
- Print the currently selected developer directory
- Reset the developer directory to the default search mechanism
- Install Xcode's command-line tools
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xcode-select

> Switch between different versions of Xcode and the included developer tools.
> Also used to update the path to Xcode if it is moved after installation.
> More information: <https://developer.apple.com/library/archive/technotes/tn2339/_index.html>.

- Install Xcode's command-line tools:

`xcode-select --install`

- Select a given path as the active developer directory:

`xcode-select --switch {{path/to/Xcode.app/Contents/Developer}}`

- Select a given Xcode instance and use its developer directory as the active one:

`xcode-select --switch {{path/to/Xcode_file.app}}`

- Print the currently selected developer directory:

`xcode-select --print-path`

- Discard any user-specified developer directory so that it will be found via the default search mechanism:

`sudo xcode-select --reset`
