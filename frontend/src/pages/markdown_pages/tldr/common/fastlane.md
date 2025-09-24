---
title: "Fastlane - Build Mobile Apps | Online Free DevTools by Hexmos"
name: fastlane
path: /freedevtools/tldr/common/fastlane
canonical: "https://hexmos.com/freedevtools/tldr/common/fastlane/"
description: "Build mobile apps instantly with Fastlane. Automate iOS and Android app deployment, code signing, and release processes. Free online tool, no registration required."
category: common
keywords:
- iOS build automation
- Android build automation
- mobile app deployment
- fastlane automation
- iOS code signing
- Android code signing
- Xcode derived data
- cocoapods cache clean
- fastlane build app
- fastlane cocoapods
features:
- Automate iOS app builds and signing.
- Automate Android app builds and signing.
- Integrate with cocoapods for dependency management.
- Clean Xcode derived data for fresh builds.
- Clear cocoapods cache for faster installations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fastlane

> Build and release mobile applications.
> More information: <https://docs.fastlane.tools/actions/>.

- Build and sign the iOS application in the current directory:

`fastlane run build_app`

- Run `pod install` for the project in the current directory:

`fastlane run cocoapods`

- Delete the derived data from Xcode:

`fastlane run clear_derived_data`

- Remove the cache for pods:

`fastlane run clean_cocoapods_cache`
