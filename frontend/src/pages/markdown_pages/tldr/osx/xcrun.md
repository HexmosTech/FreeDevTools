---
title: "XCrun - Locate and Run Dev Tools | Online Free DevTools by Hexmos"
name: xcrun
path: /freedevtools/tldr/osx/xcrun
canonical: "https://hexmos.com/freedevtools/tldr/osx/xcrun/"
description: "Locate and run development tools with XCrun. Manage Xcode development tools and properties. Free online tool, no registration required."
category: osx
keywords:
- xcrun macos
- xcrun xcode
- find developer tools macos
- run developer tools macos
- xcode command line tools
- macos command line utilities
- sdk lookup macos
- toolchain manager macos
- development tool launcher
- command line dev tools
features:
- Locate development tools for specific SDKs
- Run tools from the active developer directory
- Specify toolchains for tool execution
- Display verbose output for debugging
- Find Xcode command line tools
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xcrun

> Run or locate development tools and properties.
> More information: <https://keith.github.io/xcode-man-pages/xcrun.1.html>.

- Find and run a tool from the active developer directory:

`xcrun {{tool}} {{arguments}}`

- Show verbose output:

`xcrun {{tool}} {{arguments}} --verbose`

- Find a tool for a given SDK:

`xcrun --sdk {{sdk_name}}`

- Find a tool for a given toolchain:

`xcrun --toolchain {{name}}`

- Display help:

`xcrun --help`

- Display version:

`xcrun --version`
