---
title: "Get-Date - Display Date and Time | Free DevTools"
name: get-date
path: /freedevtools/tldr/windows/get-date
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-date/"
description: "Display current date and time with Get-Date. Convert timestamps and format output on Windows. Free online tool, no registration required."
category: windows
keywords:
- date and time display
- powershell get-date
- windows date command
- timestamp conversion
- datetime formatting
- utc conversion
- iso 8601 format
- unix timestamp
- powershell command
- date and time
features:
- Display the current date and time in various formats.
- Convert Unix timestamps to datetime objects.
- Format date and time output using .NET format specifiers.
- Display date and time in UTC.
- Output date and time in ISO 8601 format.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Get-Date

> Get the current date and time.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/get-date>.

- Display the current date and time:

`Get-Date`

- Display the current date and time with a .NET format specifier:

`Get-Date -Format "{{yyyy-MM-dd HH:mm:ss}}"`

- Display the current date and time in UTC and ISO 8601 format:

`(Get-Date).ToUniversalTime()`

- Convert a Unix timestamp:

`Get-Date -UnixTimeSeconds {{1577836800}}`
