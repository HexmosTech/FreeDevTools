---
title: "Gradle Build Automation - Automate Builds | Online Free DevTools by Hexmos"
name: gradle
path: /freedevtools/tldr/common/gradle
canonical: "https://hexmos.com/freedevtools/tldr/common/gradle/"
description: "Automate builds with Gradle Build Automation. Streamline your software development process using command line tools. Free online tool, no registration required."
category: common
keywords:
- gradle build automation
- gradle build tool
- android gradle build
- gradle dependency management
- java gradle build
- kotlin gradle build
- gradle command line
- gradle clean build
- gradle assemble
- gradle tasks list
features:
- Compile and package applications using Gradle
- Exclude specific tasks from the build process
- Operate in offline mode to prevent network access during builds
- Clean the build directory to remove previous build artifacts
- List available tasks for project management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gradle

> An open source build automation system.
> More information: <https://gradle.org>.

- Compile a package:

`gradle build`

- Exclude test task:

`gradle build {{[-x|--exclude-task]}} {{test}}`

- Run in offline mode to prevent Gradle from accessing the network during builds:

`gradle build --offline`

- Clear the build directory:

`gradle clean`

- Build an Android Package (APK) in release mode:

`gradle assembleRelease`

- List the main tasks:

`gradle tasks`

- List all the tasks:

`gradle tasks --all`
