---
title: "Xcode Runtimes - Manage iOS Simulators | Online Free DevTools by Hexmos"
name: xcodes-runtimes
path: /freedevtools/tldr/osx/xcodes-runtimes
canonical: "https://hexmos.com/freedevtools/tldr/osx/xcodes-runtimes/"
description: "Manage iOS Simulator runtimes with Xcode Runtimes. Download, install, and configure runtimes for different iOS versions. Free online tool, no registration required."
category: osx
keywords:
- Xcode Simulator Runtimes
- iOS Simulator Management
- macOS Simulator Download
- Xcode Runtime Installer
- iOS SDK Management
- WatchOS Simulator
- TVOS Simulator
- VisionOS Simulator
- Xcodes CLI tool
- Xcode Developer Tools
features:
- Download available Xcode Simulator runtimes.
- Install Xcode Simulator runtimes for specified iOS versions.
- Manage runtimes for iOS, watchOS, tvOS and visionOS.
- Configure the download directory for runtime archives.
- Preserve downloaded runtime archives after installation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xcodes runtimes

> Manage Xcode Simulator runtimes.
> More information: <https://github.com/xcodesorg/xcodes>.

- Display all available Simulator runtimes:

`xcodes runtimes --include-betas`

- Download a Simulator runtime:

`xcodes runtimes download {{runtime_name}}`

- Download and install a Simulator runtime:

`xcodes runtimes install {{runtime_name}}`

- Download/install a Simulator runtime for specific iOS/watchOS/tvOS/visionOS version (must be written as case-sensitive):

`xcodes runtimes {{download|install}} "{{iOS|watchOS|tvOS|visionOS}} {{runtime_version}}"`

- Set a specific location where the runtime archive will be first downloaded (defaults to `~/Downloads`):

`xcodes runtimes {{download|install}} {{runtime_name}} --directory {{path/to/directory}}`

- Do not delete the downloaded archive when the Simulator is successfully installed:

`xcodes runtimes install {{runtime_name}} --keep-archive`
