---
title: "Foreman - Manage Procfile Apps | Online Free DevTools by Hexmos"
name: foreman
path: /freedevtools/tldr/linux/foreman
canonical: "https://hexmos.com/freedevtools/tldr/linux/foreman/"
description: "Manage Procfile-based applications with Foreman. Start, check, and run processes effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - procfile management
  - foreman command
  - application process manager
  - procfile runner
  - command execution environment
  - application deployment
  - process automation
  - foreman start
  - foreman check
  - foreman run
features:
  - Start applications from Procfiles
  - Validate Procfile syntax and format
  - Run commands with process environments
  - Start specific application processes
  - Control process formation with overrides
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# foreman

> Manage Procfile-based applications.
> More information: <https://manned.org/foreman>.

- Start an application with the Procfile in the current directory:

`foreman start`

- Start an application with a specified Procfile:

`foreman start {{[-f|--procfile]}} {{Procfile}}`

- Start a specific application:

`foreman start {{process}}`

- Validate Procfile format:

`foreman check`

- Run one-off commands with the process's environment:

`foreman run {{command}}`

- Start all processes except the one named "worker":

`foreman start {{[-m|--formation]}} all=1,{{worker}}=0`
