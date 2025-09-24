---
title: "Start Service - Control Windows Services | Online Free DevTools by Hexmos"
name: start-service
path: /freedevtools/tldr/windows/start-service
canonical: "https://hexmos.com/freedevtools/tldr/windows/start-service/"
description: "Control Windows Services with Start-Service. Easily manage and start stopped services using PowerShell. Free online tool, no registration required."
category: windows
keywords:
- Windows service control
- PowerShell start service
- Windows service manager
- Service start command
- Windows service automation
- Start disabled service
- Stop and start service
- Windows server management
- PowerShell service administration
- Windows service troubleshooting
features:
- Start stopped Windows services by name
- Display information about a service without starting it
- Start a disabled Windows service
- Automate service startup with PowerShell
- Manage Windows services from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Start-Service

> Starts stopped services.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/start-service>.

- Start a service by using its name:

`Start-Service -Name {{service_name}}`

- Display information without starting a service:

`Start-Service -DisplayName *{{name}}* -WhatIf`

- Start a disabled service:

`Set-Service {{service_name}} -StartupType {{manual}}; Start-Service {{service_name}}`
