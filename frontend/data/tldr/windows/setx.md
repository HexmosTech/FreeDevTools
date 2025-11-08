---
title: "Set Environment Variables - Control with Setx | Online Free DevTools by Hexmos"
name: setx
path: "/freedevtools/tldr/windows/setx/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/setx/"
description: "Control environment variables with Setx on Windows. Persistently set user and system variables, including remote machine configuration. Free online tool, no registration required."
category: windows
keywords:
- windows environment variables
- setx command
- windows system variables
- persistent environment variables
- command line environment variable
- set environment variable windows 10
- registry environment variables
- remote environment variable
- windows batch script environment variable
- environment variable configuration
features:
- Set environment variables for the current user
- Set environment variables for the current machine
- Configure environment variables on a remote machine
- Set environment variables from a registry key value
- Persistently store environment variables
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# setx

> Set persistent environment variables.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/setx>.

- Set an environment variable for the current user:

`setx {{variable}} {{value}}`

- Set an environment variable for the current machine:

`setx {{variable}} {{value}} /M`

- Set an environment variable for a user on a remote machine:

`setx /s {{hostname}} /u {{username}} /p {{password}} {{variable}} {{value}}`

- Set an environment variable from a registry key value:

`setx {{variable}} /k {{registry\key\path}}`
