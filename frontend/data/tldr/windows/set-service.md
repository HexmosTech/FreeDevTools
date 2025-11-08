---
title: "Set-Service - Control Windows Services | Online Free DevTools by Hexmos"
name: set-service
path: "/freedevtools/tldr/windows/set-service/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/set-service/"
description: "Control Windows services with Set-Service. Modify service properties like startup type and description using PowerShell. Free online tool, no registration required."
category: windows
keywords:
- Windows service control
- PowerShell service management
- Windows service configuration
- Change service startup type
- Edit service description
- Set service display name
- Windows service automation
- Command-line service utility
- Windows service properties
- PowerShell service commands
features:
- Modify Windows service display names
- Change service startup types (Automatic, Manual, Disabled)
- Update service descriptions
- Start and stop Windows services using PowerShell
- Suspend and resume Windows services
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Set-Service

> Starts, stops, and suspends a service, and changes its properties.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/set-service>.

- Change a display name:

`Set-Service -Name {{hostname}} -DisplayName "{{name}}"`

- Change the startup type of services:

`Set-Service -Name {{service_name}} -StartupType {{Automatic}}`

- Change the description of a service:

`Set-Service -Name {{service_name}} -Description "{{description}}"`
