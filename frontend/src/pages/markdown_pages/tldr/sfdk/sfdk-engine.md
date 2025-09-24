---
title: "SFDK Engine - Control Build Processes | Online Free DevTools by Hexmos"
name: sfdk-engine
path: /freedevtools/tldr/sfdk/sfdk-engine
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-engine/"
description: "Control build processes with SFDK Engine. Manage engine properties, execute commands, and monitor build status for Sailfish OS. Free online tool, no registration required."
category: common
keywords:
- SFDK build engine
- Sailfish OS build
- build process control
- engine property management
- Sailfish SDK command
- SFDK command line
- QTCreator build tool
- build environment management
- application development
- Sailfish IDE engine
features:
- Start and stop the SFDK build engine
- Set and display engine properties
- Execute commands directly on the build engine
- Show current status of the build engine
- Open an interactive shell on the build engine
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfdk engine

> Maintains and controls the build engine.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/30-building-maintain/doc/command.engine.adoc>.

- Start the build engine:

`sfdk engine start`

- Stop the build engine:

`sfdk engine stop`

- Show the build engine status:

`sfdk engine status`

- Set an engine property:

`sfdk engine set {{property}}={{value}}`

- Show the engine properties:

`sfdk engine show`

- Execute a command on the build engine:

`sfdk engine exec {{command}}`

- Start an interactive shell on the build engine:

`sfdk engine exec`
