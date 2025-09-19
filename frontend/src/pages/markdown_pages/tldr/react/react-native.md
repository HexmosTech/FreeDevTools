---
title: "React Native - Create Native Apps with React | Online Free DevTools by Hexmos"
name: react-native
path: /freedevtools/tldr/react/react-native
canonical: "https://hexmos.com/freedevtools/tldr/react/react-native/"
description: "Create native apps instantly with React Native. Build cross-platform mobile applications for iOS and Android using a single JavaScript codebase. Free online tool, no registration required."
category: common
keywords:
- react native framework
- native app builder
- cross platform mobile development
- javascript mobile development
- react native cli
- ios app development
- android app development
- mobile app development tools
- react native project setup
- metro bundler
features:
- Initialize new React Native projects
- Start and manage the Metro bundler
- Build and run apps on Android devices and emulators
- Build and run apps on iOS simulators
- Stream logs from Android and iOS devices
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# react-native

> A framework for building native apps with React.
> More information: <https://reactnative.dev>.

- Initialize a new React Native project in a directory of the same name:

`react-native init {{project_name}}`

- Start the metro bundler:

`react-native start`

- Start the metro bundler with a clean cache:

`react-native start --reset-cache`

- Build the current application and start it on a connected Android device or emulator:

`react-native run-android`

- Build the current application and start it on an iOS simulator:

`react-native run-ios`

- Build the current application in `release` mode and start it on a connected Android device or emulator:

`react-native run-android --variant={{release}}`

- Start `logkitty` and print logs to `stdout`:

`react-native log-android`

- Start `tail system.log` for an iOS simulator and print logs to `stdout`:

`react-native log-ios`
