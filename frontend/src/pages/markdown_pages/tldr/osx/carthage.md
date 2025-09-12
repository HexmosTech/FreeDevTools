---
title: "Control Carthage Dependencies - Manage Cocoa Apps | Free DevTools"
name: carthage
path: /freedevtools/tldr/osx/carthage
canonical: "https://hexmos.com/freedevtools/tldr/osx/carthage/"
description: "Control Cocoa app dependencies with Carthage. Manage, update, and build dependencies for your iOS and macOS projects. Free online tool, no registration required."
category: osx
keywords:
- carthage dependency manager
- cocoa dependency management
- ios dependency management
- osx dependency management
- carthage update
- carthage bootstrap
- carthage build
- carthage command line tool
- carthage framework integration
- carthage package management
features:
- Update dependencies to latest versions
- Build dependencies for specific platforms (iOS, macOS)
- Rebuild specific dependencies individually
- Bootstrap existing dependencies without updating
- Download and build all dependencies defined in Cartfile
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# carthage

> A dependency management tool for Cocoa applications.
> More information: <https://github.com/Carthage/Carthage>.

- Download the latest version of all dependencies mentioned in Cartfile, and build them:

`carthage update`

- Update dependencies, but only build for iOS:

`carthage update --platform ios`

- Update dependencies, but don't build any of them:

`carthage update --no-build`

- Download and rebuild the current version of dependencies (without updating them):

`carthage bootstrap`

- Rebuild a specific dependency:

`carthage build {{dependency}}`
