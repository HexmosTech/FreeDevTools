---
title: "W32tm - Control Windows Time Service | Online Free DevTools by Hexmos"
name: w32tm
path: "/freedevtools/tldr/windows/w32tm/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/w32tm/"
description: "Control time synchronization with w32tm, the Windows Time service tool. Query status, force resync, and debug time issues easily. Free online tool, no registration required."
category: windows
keywords:
- windows time service
- w32tm command
- time synchronization windows
- windows time sync
- ntp client windows
- w32time configuration
- force time sync windows
- windows time server
- windows command line time
- synchronize windows clock
features:
- Query time synchronization status and details
- Force immediate time resynchronization
- Display time offset graph against a time server
- Show NTP reply from a specified time server
- Enable and write w32time debug logs to a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# w32tm

> Query and control the w32time time synchronization service.
> More information: <https://learn.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings>.

- Show the current status of time synchronization:

`w32tm /query /status /verbose`

- Show a time offset graph against a time server:

`w32tm /stripchart /computer:{{time_server}}`

- Show an NTP reply from a time server:

`w32tm /stripchart /packetinfo /samples:1 /computer:{{time_server}}`

- Show the state of the currently used time servers:

`w32tm /query /peers`

- Show configuration of the w32time service (run in elevated console):

`w32tm /query /configuration`

- Force time resynchronization immediately (run in elevated console):

`w32tm /resync /force`

- Write w32time debug logs into a file (run in elevated console):

`w32tm /debug /enable /file:{{path\to\debug.log}} /size:{{10000000}} /entries:{{0-300}}`
