---
title: "SDK Manager - Manage Multiple SDK Versions | Online Free DevTools by Hexmos"
name: sdk
path: "/freedevtools/tldr/common/sdk/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sdk/"
description: "Manage SDK versions easily with SDK Manager. Install, use, upgrade, and uninstall multiple SDKs. Free online tool, no registration required."
category: common
keywords:
- SDK version manager
- Java SDK management
- Groovy SDK management
- Scala SDK management
- Kotlin SDK management
- Gradle SDK management
- Maven SDK management
- Vert.x SDK management
- Software Development Kit manager
- Command line SDK tools
features:
- Install specific versions of SDKs
- Use specific SDK versions for current session
- Show the stable version of available SDKs
- Upgrade SDKs to the latest stable versions
- Uninstall specific versions of SDKs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sdk

> Manage parallel versions of multiple Software Development Kits.
> Supports Java, Groovy, Scala, Kotlin, Gradle, Maven, Vert.x and many others.
> More information: <https://sdkman.io/usage>.

- Install an SDK version:

`sdk install {{sdk_name}} {{sdk_version}}`

- Use a specific SDK version for the current terminal session:

`sdk use {{sdk_name}} {{sdk_version}}`

- Show the stable version of any available SDK:

`sdk current {{sdk_name}}`

- Show the stable versions of all installed SDKs:

`sdk current`

- List all available SDKs:

`sdk list`

- List all versions of an SDK:

`sdk list {{sdk_name}}`

- Upgrade an SDK to the latest stable version:

`sdk upgrade {{sdk_name}}`

- Uninstall a specific SDK version:

`sdk rm {{sdk_name}} {{sdk_version}}`
