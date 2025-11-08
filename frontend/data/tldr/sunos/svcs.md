---
title: "List SunOS Services - Check Service Status | Online Free DevTools by Hexmos"
name: svcs
path: "/freedevtools/tldr/sunos/svcs/"
canonical: "https://hexmos.com/freedevtools/tldr/sunos/svcs/"
description: "List SunOS services and check their status with the svcs command. Diagnose issues, view logs, and manage dependencies. Free online tool, no registration required."
category: sunos
keywords:
  - sunos service management
  - svcs command sunos
  - check sunos service status
  - sunos service troubleshooting
  - list sunos background processes
  - examine sunos service logs
  - view sunos service dependencies
  - diagnose sunos service issues
  - sunos system administration
  - svcs command examples
features:
  - List all running services on SunOS
  - Identify services that are not running
  - Show detailed information about a specific service
  - Display the location of a service's log file
  - Display the end of a service's log file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# svcs

> List information about running services.
> More information: <https://www.unix.com/man-page/linux/1/svcs>.

- List all running services:

`svcs`

- List services that are not running:

`svcs -vx`

- List information about a service:

`svcs apache`

- Show location of service log file:

`svcs -L apache`

- Display end of a service log file:

`tail $(svcs -L apache)`
