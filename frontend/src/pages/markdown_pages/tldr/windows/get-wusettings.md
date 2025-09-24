---
title: "Get Windows Update Settings - Control WUA Configuration | Online Free DevTools by Hexmos"
name: get-wusettings
path: /freedevtools/tldr/windows/get-wusettings
canonical: "https://hexmos.com/freedevtools/tldr/windows/get-wusettings/"
description: "Get Windows Update settings with Get-WUSettings. Easily control Windows Update Agent configuration and retrieve current settings using PowerShell. Free online tool, no registration required."
category: windows
keywords:
- windows update settings
- powershell windows update
- wua configuration
- get windows update agent
- windows update agent settings
- powershell wusettings
- windows update automation
- ps windows update module
- windows update configuration
- get wua settings
features:
- Retrieve current Windows Update Agent configuration
- Send configuration report via email (SMTP)
- Manage Windows Update settings using PowerShell
- Automate Windows Update configuration tasks
- Access detailed information on Windows Update Agent settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Get-WUSettings

> Get the current Windows Update Agent configuration. Part of external `PSWindowsUpdate` module.
> This command can only be run under PowerShell.
> More information: <https://github.com/mgajda83/PSWindowsUpdate>.

- Get the current Windows Update Agent configuration:

`Get-WUSettings`

- Send the current configuration data via email (SMTP):

`Get-WUSettings -SendReport -PSWUSettings @{SmtpServer="{{smtp_server}}"; Port={{smtp_port}} From="{{sender_email}}" To="{{receiver_email}}"}`
