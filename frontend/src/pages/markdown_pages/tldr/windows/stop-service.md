---
title: "Stop Service - Control Windows Services | Free DevTools"
name: stop-service
path: /freedevtools/tldr/windows/stop-service
canonical: "https://hexmos.com/freedevtools/tldr/windows/stop-service/"
description: "Control Windows services with Stop-Service. Manage service states, including stopping dependent services. Free online tool, no registration required."
category: windows
keywords:
- Windows service stop
- PowerShell stop service
- Windows service management
- Stop Windows service command
- Force stop service
- Windows service control
- PowerShell service manager
- Stop service dependency
- Windows service command line
- PowerShell service stop
features:
- Stop a specified Windows service
- Forcefully stop services with dependencies
- Stop services by service name
- Stop services using display name
- Confirm service stop operation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Stop-Service

> Stops running services.
> Note: This command can only be used through PowerShell.
> More information: <https://learn.microsoft.com/powershell/module/microsoft.powershell.management/stop-service>.

- Stop a service on the local computer:

`Stop-Service -Name {{service_name}}`

- Stop a service by using the display name:

`Stop-Service -DisplayName "{{name}}"`

- Stop a service that has dependent services:

`Stop-Service -Name {{service_name}} -Force -Confirm`
