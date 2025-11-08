---
title: "ERN - Create Native Apps and Containers | Online Free DevTools by Hexmos"
name: ern
path: "/freedevtools/tldr/common/ern/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ern/"
description: "Create native applications and manage containers with ERN. Streamline your iOS and Android app development process using the command line. Free online tool, no registration required."
category: common
keywords:
- electrode native
- ern command
- create miniapp
- run miniapp
- create container
- publish container
- transform container
- ios development
- android development
- mobile app development
features:
- Generate Electrode Native applications (MiniApps)
- Run MiniApps in iOS and Android Runner applications
- Create Electrode Native containers for iOS and Android
- Publish Electrode Native containers to local Maven repositories
- Transform iOS containers into pre-compiled binary frameworks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ern

> Electrode Native platform client.
> More information: <https://native.electrode.io/reference/index-6>.

- Create a new `ern` application (`MiniApp`):

`ern create-miniapp {{application_name}}`

- Run one or more `MiniApps` in the iOS/Android Runner application:

`ern run-{{ios|android}}`

- Create an Electrode Native container:

`ern create-container --miniapps /{{path/to/miniapp_directory}} --platform {{ios|android}}`

- Publish an Electrode Native container to a local Maven repository:

`ern publish-container --publisher {{maven}} --platform {{android}} --extra {{'{"groupId":"com.walmart.ern","artifactId":"quickstart"}'}}`

- Transform an iOS container into a pre-compiled binary framework:

`ern transform-container --platform {{ios}} --transformer {{xcframework}}`

- List all installed versions of Electrode Native:

`ern platform versions`

- Set a logging level:

`ern platform config set logLevel {{trace|debug}}`
