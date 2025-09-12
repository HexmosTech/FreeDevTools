---
title: "PlatformIO Remote - Manage Remote Agents | Free DevTools"
name: pio-remote
path: "/freedevtools/tldr/common/pio-remote"
canonical: "https://hexmos.com/freedevtools/tldr/common/pio-remote/"
description: "Manage PlatformIO Remote Agents with pio-remote. List agents, start new ones, connect to remote devices, and run tasks. Free online tool, no registration required."
category: common
keywords:
- PlatformIO remote agent management
- PlatformIO remote development
- remote device access
- remote build execution
- PlatformIO core update remote
- PlatformIO remote testing
- PlatformIO agent serial monitor
- pio remote command line
- PlatformIO distributed development
- PlatformIO cross-platform remote build
features:
- List available PlatformIO Remote Agents.
- Start and share new PlatformIO Remote Agents.
- Connect to serial ports of remote devices.
- Execute builds and tests on remote agents.
- Update PlatformIO core and libraries on remote agents.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio remote

> Helper command for PlatformIO Remote Development.
> `pio remote [command]` takes the same arguments as its locally executing counterpart `pio [command]`.
> More information: <https://docs.platformio.org/en/latest/core/userguide/remote/index.html>.

- List all active Remote Agents:

`pio remote agent list`

- Start a new Remote Agent with a specific name and share it with friends:

`pio remote agent start {{[-n|--name]}} {{agent_name}} {{[-s|--share]}} {{example1@example.com}} {{[-s|--share]}} {{example2@example.com}}`

- List devices from specified Agents (omit `--agent` to specify all Agents):

`pio remote --agent {{agent_name1}} --agent {{agent_name2}} device list`

- Connect to the serial port of a remote device:

`pio remote --agent {{agent_name}} device monitor`

- Run all targets on a specified Agent:

`pio remote --agent {{agent_name}} run`

- Update installed core packages, development platforms and global libraries on a specific Agent:

`pio remote --agent {{agent_name}} update`

- Run all tests in all environments on a specific Agent:

`pio remote --agent {{agent_name}} test`
