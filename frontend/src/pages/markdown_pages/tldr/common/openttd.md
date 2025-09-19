---
title: "Control OpenTTD - Manage Transport Tycoon Games | Online Free DevTools by Hexmos"
name: openttd
path: /freedevtools/tldr/common/openttd
canonical: "https://hexmos.com/freedevtools/tldr/common/openttd/"
description: "Control OpenTTD with ease. Manage Transport Tycoon Deluxe games, load saves, customize configurations and start dedicated servers. Free online tool, no registration required."
category: common
keywords:
- OpenTTD command
- Transport Tycoon command line
- OpenTTD server setup
- OpenTTD configuration
- OpenTTD save game
- OpenTTD game control
- OpenTTD resolution settings
- OpenTTD dedicated server
- OpenTTD network game
- OpenTTD sound drivers
features:
- Launch OpenTTD with custom resolution settings
- Load saved games directly from the command line
- Configure OpenTTD using a custom configuration file
- Start and manage dedicated OpenTTD servers
- Connect to OpenTTD servers with password support
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# openttd

> Open source clone of the Microprose game "Transport Tycoon Deluxe".
> More information: <https://wiki.openttd.org/en/Manual/Command%20line>.

- Start a new game:

`openttd -g`

- Load save game at start:

`openttd -g {{path/to/file}}`

- Start with the specified window resolution:

`openttd -r {{1920x1080}}`

- Start with a custom configuration file:

`openttd -c {{path/to/file}}`

- Start with selected video, sound, and music drivers:

`openttd -v {{video_driver}} -s {{sound_driver}} -m {{music_driver}}`

- Start a dedicated server, forked in the background:

`openttd -f -D {{host}}:{{port}}`

- Join a server with a password:

`openttd -n {{host}}:{{port}}#{{player_name}} -p {{password}}`
