---
title: "Set-Date - Change System Date | Free DevTools"
name: set-date
path: /freedevtools/tldr/windows/set-date
canonical: "https://hexmos.com/freedevtools/tldr/windows/set-date/"
description: "Change the system date with Set-Date, a command-line tool for Windows. Adjust system time and date for testing or configuration. Free online tool, no registration required."
category: windows
keywords:
- system date change
- date time adjustment
- windows set date
- powershell set date
- command line date
- system clock control
- date modification
- time synchronization
- date time setting
- powershell time span
features:
- Modify the system date
- Adjust the system time
- Add or subtract days from the current date
- Increment or decrement the system clock by minutes
- Change time using PowerShell commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Set-Date

> Changes the system time on the computer to a time that you specify.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/set-date>.

- Add three days to the system date:

`Set-Date -Date (Get-Date).AddDays({{3}})`

- Set the system clock back 10 minutes:

`Set-Date -Adjust -0:10:0 -DisplayHint Time`

- Add 90 minutes to the system clock:

`$90mins = New-TimeSpan -Minutes {{90}}; Set-Date -Adjust $90mins`
