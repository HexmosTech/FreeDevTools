---
title: "Metadata Control - Manage Spotlight Indexing | Online Free DevTools by Hexmos"
name: mdutil
path: /freedevtools/tldr/osx/mdutil
canonical: "https://hexmos.com/freedevtools/tldr/osx/mdutil/"
description: "Manage spotlight indexing with mdutil on macOS. Control indexing status, enable/disable indexing, and erase metadata stores using the command line. Free online tool, no registration required."
category: osx
keywords:
- macos spotlight indexing
- spotlight metadata management
- mdutil command macos
- osx indexing control
- spotlight index rebuild
- macos metadata store
- disable spotlight indexing
- enable spotlight indexing
- macos command line tools
- spotlight indexing status
features:
- Show the indexing status of volumes.
- Enable or disable Spotlight indexing for specific volumes.
- Enable or disable Spotlight indexing for all volumes.
- Erase the metadata stores for a volume.
- Restart the Spotlight indexing process.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mdutil

> Manage the metadata stores used by Spotlight for indexing.
> More information: <https://keith.github.io/xcode-man-pages/mdutil.1.html>.

- Show the indexing status of the startup volume:

`mdutil -s {{/}}`

- Turn on/off the Spotlight indexing for a given volume:

`mdutil -i {{on|off}} {{path/to/volume}}`

- Turn on/off indexing for all volumes:

`mdutil -a -i {{on|off}}`

- Erase the metadata stores and restart the indexing process:

`mdutil -E {{path/to/volume}}`
