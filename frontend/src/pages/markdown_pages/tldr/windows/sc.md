---
title: "Service Control - Manage Windows Services | Free DevTools"
name: sc
path: /freedevtools/tldr/windows/sc
canonical: "https://hexmos.com/freedevtools/tldr/windows/sc/"
description: "Manage Windows services with Service Control (sc). Start, stop, configure, and query services directly from the command line. Free online tool, no registration required."
category: windows
keywords:
- windows service control
- sc command
- service manager windows
- windows service configuration
- sc.exe
- windows service start stop
- windows service query
- windows service type
- windows service management
- command line service control
features:
- Query the status of Windows services
- Start Windows services asynchronously
- Stop Windows services asynchronously
- Configure the type of Windows services
- Create new Windows services
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sc

> Communicate with the Service Control Manager and services.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/sc-query>.

- Show the status of a service (no service name will list all services):

`sc.exe query {{service_name}}`

- Start a service asynchronously:

`sc.exe create {{service_name}} binpath= {{path\to\service_binary_file}}`

- Stop a service asynchronously:

`sc.exe delete {{service_name}}`

- Set the type of a service:

`sc.exe config {{service_name}} type= {{service_type}}`
