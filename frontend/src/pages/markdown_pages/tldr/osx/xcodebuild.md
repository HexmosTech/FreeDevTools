---
title: "Xcode Build - Build iOS/macOS Projects | Free DevTools"
name: xcodebuild
path: /freedevtools/tldr/osx/xcodebuild
canonical: "https://hexmos.com/freedevtools/tldr/osx/xcodebuild/"
description: "Build iOS and macOS projects effortlessly with Xcode Build. Compile code, manage configurations, and generate deliverables using the command line. Free online tool, no registration required."
category: osx
keywords:
- Xcode project builder
- iOS build automation
- macOS build tool
- Command line build
- Xcode command line
- iOS project compilation
- macOS project compilation
- Xcode build configuration
- iOS SDK build
- macOS SDK build
features:
- Build Xcode workspaces and projects
- Specify build configurations and schemes
- Clean build directories before building
- Customize the output directory for build products
- Show available SDKs for building
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xcodebuild

> Build Xcode projects.
> More information: <https://developer.apple.com/library/archive/technotes/tn2339/_index.html>.

- Build workspace:

`xcodebuild -workspace {{workspace_name.workspace}} -scheme {{scheme_name}} -configuration {{configuration_name}} clean build SYMROOT={{SYMROOT_path}}`

- Build project:

`xcodebuild -target {{target_name}} -configuration {{configuration_name}} clean build SYMROOT={{SYMROOT_path}}`

- Show SDKs:

`xcodebuild -showsdks`
