---
title: "Manage Cocoa Dependencies - Control Pods on OSX | Online Free DevTools by Hexmos"
name: pod
path: /freedevtools/tldr/osx/pod
canonical: "https://hexmos.com/freedevtools/tldr/osx/pod/"
description: "Manage Cocoa dependencies efficiently with Pod. Install, update, and remove pods for your Swift and Objective-C projects on macOS. Free online tool, no registration required."
category: osx
keywords:
- cocoapods dependency manager
- swift package manager osx
- objective-c dependency management
- ios dependency control
- pod install command
- pod update command
- podfile generator
- xcode project dependency
- osx development pods
- cocoa pods management
features:
- Install CocoaPods dependencies from a Podfile.
- Update existing pods to the latest available versions.
- List all available CocoaPods packages.
- Initialize a new Podfile with default settings.
- Remove CocoaPods integration from Xcode projects.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pod

> Dependency manager for Swift and Objective-C Cocoa projects.
> More information: <https://guides.cocoapods.org/terminal/commands.html>.

- Create a Podfile for the current project with the default contents:

`pod init`

- Download and install all pods defined in the Podfile (that haven't been installed before):

`pod install`

- List all available pods:

`pod list`

- Show the outdated pods (of those currently installed):

`pod outdated`

- Update all currently installed pods to their newest version:

`pod update`

- Update a specific (previously installed) pod to its newest version:

`pod update {{pod_name}}`

- Remove CocoaPods from a Xcode project:

`pod deintegrate {{xcode_project}}`
