---
title: "Control Java Versions - Archlinux-Java | Free DevTools"
name: archlinux-java
path: "/freedevtools/tldr/linux/archlinux-java"
canonical: "https://hexmos.com/freedevtools/tldr/linux/archlinux-java/"
description: "Control Java versions with Archlinux-Java. Manage default JVM environments and fix broken configurations instantly. Free online tool, no registration required."
category: linux
keywords:
- java version manager
- archlinux java manager
- linux java environment
- jvm switcher
- java development linux
- archlinux java configuration
- command line java
- java environment variables
- set java default
- manage java versions linux
features:
- List installed Java environments.
- Set the default Java environment.
- Get the current default Java environment.
- Unset the default Java environment.
- Fix invalid Java configurations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# archlinux-java

> Switch between installed Java environments.
> More information: <https://wiki.archlinux.org/title/Java#Switching_between_JVM>.

- List installed Java environments:

`archlinux-java status`

- Return the short name of the current default Java environment:

`archlinux-java get`

- Set the default Java environment:

`archlinux-java set {{java_environment}}`

- Unset the default Java environment:

`archlinux-java unset`

- Fix an invalid/broken default Java environment configuration:

`archlinux-java fix`
