---
title: "Build Xcode Projects - Control Builds with xctool | Online Free DevTools by Hexmos"
name: xctool
path: /freedevtools/tldr/osx/xctool
canonical: "https://hexmos.com/freedevtools/tldr/osx/xctool/"
description: "Control Xcode builds with xctool. Automate building, testing, and analyzing iOS and macOS projects. Free online tool, no registration required."
category: osx
keywords:
- Xcode build tool
- iOS build automation
- macOS build automation
- xctool build project
- xctool test automation
- Xcode command line tool
- Objective-C build
- Swift build
- OSX build scripts
- Xcode continuous integration
features:
- Build Xcode projects and workspaces
- Clean Xcode projects and workspaces
- Execute tests on Xcode projects and workspaces
- Automate Xcode build processes
- Integrate with continuous integration systems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xctool

> Build Xcode projects.
> More information: <https://github.com/facebookarchive/xctool>.

- Build a single project without any workspace:

`xctool -project {{YourProject.xcodeproj}} -scheme {{YourScheme}} build`

- Build a project that is part of a workspace:

`xctool -workspace {{YourWorkspace.xcworkspace}} -scheme {{YourScheme}} build`

- Clean, build and execute all the tests:

`xctool -workspace {{YourWorkspace.xcworkspace}} -scheme {{YourScheme}} clean build test`
