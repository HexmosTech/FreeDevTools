---
title: "Package Electron Apps - Build Cross-Platform Apps | Online Free DevTools by Hexmos"
name: electron-packager
path: /freedevtools/tldr/common/electron-packager
canonical: "https://hexmos.com/freedevtools/tldr/common/electron-packager/"
description: "Package Electron apps easily with electron-packager. Build cross-platform executables for Windows, Linux, and macOS. Free online tool, no registration required."
category: common
keywords:
- Electron app packaging
- Cross-platform app builder
- Windows Electron executable
- Linux Electron executable
- macOS Electron executable
- Electron packager command line
- Electron app distribution
- Electron build tool
- Package.json electron app
- Desktop app builder
features:
- Build Electron apps for Windows, Linux, and macOS
- Package apps for multiple architectures simultaneously
- Create executables from a package.json file
- Supports building for specific platforms and architectures
- Distribute desktop applications built with Electron
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# electron-packager

> Build Electron app executables for Windows, Linux and macOS.
> Requires a valid package.json in the application directory.
> More information: <https://github.com/electron/electron-packager>.

- Package an application for the current architecture and platform:

`electron-packager "{{path/to/app}}" "{{app_name}}"`

- Package an application for all architectures and platforms:

`electron-packager "{{path/to/app}}" "{{app_name}}" --all`

- Package an application for 64-bit Linux:

`electron-packager "{{path/to/app}}" "{{app_name}}" --platform="{{linux}}" --arch="{{x64}}"`

- Package an application for ARM macOS:

`electron-packager "{{path/to/app}}" "{{app_name}}" --platform="{{darwin}}" --arch="{{arm64}}"`
