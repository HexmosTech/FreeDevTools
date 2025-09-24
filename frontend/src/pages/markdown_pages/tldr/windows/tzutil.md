---
title: "TimeZone Control - Configure System Time Zones | Online Free DevTools by Hexmos"
name: tzutil
path: /freedevtools/tldr/windows/tzutil
canonical: "https://hexmos.com/freedevtools/tldr/windows/tzutil/"
description: "Control system time zones with tzutil on Windows. Configure, list, and manage time zone settings through the command line. Free online tool, no registration required."
category: windows
keywords:
- windows timezone configuration
- tzutil timezone manager
- command line timezone tool
- set windows time zone
- list available timezones
- windows time management
- tzutil commands
- windows date and time
- system timezone settings
- change timezone windows
features:
- Display the current system time zone
- List all available time zones in the system
- Set the system time zone to a specific value
- Configure time zone settings via command line
- Manage time zone configurations effectively
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tzutil

> A tool for displaying or configuring the system time zone.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/tzutil>.

- Get the current time zone:

`tzutil /g`

- Display a list of available time zones:

`tzutil /l`

- Set the system time zone to the specific value:

`tzutil /s {{timezone_id}}`
