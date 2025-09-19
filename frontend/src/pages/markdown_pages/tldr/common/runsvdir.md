---
title: "Run Services - Control Service Directory with runsvdir | Online Free DevTools by Hexmos"
name: runsvdir
path: /freedevtools/tldr/common/runsvdir
canonical: "https://hexmos.com/freedevtools/tldr/common/runsvdir/"
description: "Control a service directory with runsvdir. Manage and start services as user or root, run in separate sessions. Free online tool, no registration required."
category: common
keywords:
- service directory manager
- linux service control
- runsvdir command
- supervise services
- systemd alternative
- service process management
- service directory control
- process supervisor
- daemon management
- linux process control
features:
- Start and manage services in a specified directory.
- Run services as the current user.
- Run services as root using sudo.
- Start services in separate sessions.
- Supervise service processes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# runsvdir

> Run an entire directory of services.
> More information: <https://manned.org/runsvdir.8>.

- Start and manage all services in a directory as the current user:

`runsvdir {{path/to/services}}`

- Start and manage all services in a directory as root:

`sudo runsvdir {{path/to/services}}`

- Start services in separate sessions:

`runsvdir -P {{path/to/services}}`
