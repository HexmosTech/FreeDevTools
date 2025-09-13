---
title: "Update Build Requires - SFDK Dependency Manager | Free DevTools"
name: sfdk-build-requires
path: /freedevtools/tldr/common/sfdk-build-requires
canonical: "https://hexmos.com/freedevtools/tldr/common/sfdk-build-requires/"
description: "Manage Sailfish OS build dependencies with SFDK Build Requires. Refresh cache, install updates and compare environments. Free online tool, no registration required."
category: common
keywords:
- SFDK build requires
- Sailfish OS dependencies
- SFDK dependency manager
- build time dependencies
- Sailfish build environment
- qtc command line
- SFDK build tools
- build configuration
- dependency updater
- Sailfish SDK
features:
- Update build-time dependencies for Sailfish OS projects.
- Refresh the cache for build requires subcommands.
- Reset dependencies to omit extra ones.
- Show the difference between current and clean build environments.
- Install or update build-time dependencies.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk build-requires

> Updates build time dependencies.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/20-building-mb2/doc/command.build-requires.adoc>.

- Run a subcommand refreshing the cache:

`sfdk build-requires --refresh {{subcommand}}`

- Run a subcommand without refreshing the cache:

`sfdk build-requires --no-refresh {{subcommand}}`

- Install or update the build-time dependencies:

`sfdk build-requires pull`

- Install or update the build-time dependencies, omitting all extra ones:

`sfdk build-requires reset`

- Show the difference between current and clean build environments:

`sfdk build-requires diff`
