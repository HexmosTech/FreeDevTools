---
title: "Get WUApiVersion - Control Windows Update Agent | Free DevTools"
name: get-wuapiversion
path: /freedevtools/tldr/windows/get-wuapiversion
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-wuapiversion/"
description: "Control the Windows Update Agent version with Get-WUApiVersion. Retrieve the currently installed version and send configuration reports via email. Free online tool, no registration required."
category: windows
keywords:
- windows update agent
- get wuapiversion windows
- powershell wuapiversion
- windows update version
- pswindowsupdate module
- powershell update management
- wuapi report
- windows update automation
- powershell smtp report
- windows update agent version
features:
- Retrieve the current Windows Update Agent version.
- Send the current configuration data via email using SMTP.
- Integrate with the PSWindowsUpdate module in PowerShell.
- Automate Windows Update reporting.
- Provide detailed information about the Windows Update Agent.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Get-WUApiVersion

> Get the Windows Update Agent version. Part of external `PSWindowsUpdate` module.
> This command can only be run under PowerShell.
> More information: <https://github.com/mgajda83/PSWindowsUpdate>.

- Get the currently-installed Windows Update Agent version:

`Get-WUApiVersion`

- Send the current configuration data via email (SMTP):

`Get-WUApiVersion -SendReport -PSWUSettings @{SmtpServer="{{smtp_server}}"; Port={{smtp_port}} From="{{sender_email}}" To="{{receiver_email}}"}`
