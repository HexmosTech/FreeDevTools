---
title: "Topgrade - Update System Applications | Online Free DevTools by Hexmos"
name: topgrade
path: "/freedevtools/tldr/common/topgrade/"
canonical: "https://hexmos.com/freedevtools/tldr/common/topgrade/"
description: "Update system applications easily with Topgrade. Streamline software updates and system maintenance across multiple platforms. Free online tool, no registration required."
category: common
keywords:
- system update manager
- topgrade update tool
- application updater
- linux update command
- macos update command
- common platform update
- cross platform updater
- system maintenance tool
- software upgrade command
- automated update utility
features:
- Update all system applications
- Clean up temporary and old files
- Disable specific update operations
- Perform only specified update operations
- Edit the Topgrade configuration file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# topgrade

> Update all applications on the system.
> More information: <https://github.com/r-darwish/topgrade>.

- Run updates:

`topgrade`

- Say yes to all updates:

`topgrade {{[-y|--yes]}}`

- Cleanup temporary/old files:

`topgrade {{[-c|--cleanup]}}`

- Disable a certain update operation:

`topgrade --disable {{operation}}`

- Only perform a certain update operation:

`topgrade --only {{operation}}`

- Edit the configuration file with default editor:

`topgrade --edit-config`
