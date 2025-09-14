---
title: "Mimikatz Service - Manage Windows Services | Free DevTools"
name: mimikatz-service
path: /freedevtools/tldr/windows/mimikatz-service
canonical: "https://hexmos.com/freedevtools/tldr/windows/mimikatz-service/"
description: "Manage Windows services with Mimikatz Service. Control service startup, shutdown, and deletion through command line. Free online tool, no registration required."
category: windows
keywords:
- windows service management
- mimikatz service control
- windows command line service
- service start windows
- service stop windows
- service delete windows
- windows service command
- mimikatz windows commands
- windows service administration
- windows service hacking
features:
- Start Windows services
- Stop Windows services
- Delete Windows services
- Manage services using Mimikatz
- Execute service commands from command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mimikatz service

> Manage Windows services through mimikatz.
> More information: <https://github.com/gentilkiwi/mimikatz>.

- Start a service:

`mimikatz "service::start service_name"`

- Stop a service:

`mimikatz "service::stop service_name"`

- Delete a service:

`mimikatz "service::delete service_name"`
