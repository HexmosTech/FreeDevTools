---
title: "Control Shutdown - Manage System Power States | Online Free DevTools by Hexmos"
name: shutdown
path: /freedevtools/tldr/windows/shutdown
canonical: "https://hexmos.com/freedevtools/tldr/windows/shutdown/"
description: "Manage system power states with Control Shutdown. Schedule shutdowns, restarts, hibernation, and logoffs easily. Free online tool, no registration required."
category: windows
keywords:
  - system shutdown command
  - force shutdown command
  - restart command
  - hibernate command
  - log off command
  - schedule shutdown command
  - abort shutdown command
  - remote shutdown command
  - windows shutdown command
  - linux shutdown command
features:
  - Gracefully shutdown the current machine
  - Force-close applications before shutting down
  - Immediately restart the machine
  - Hibernate the current machine to save power
  - Log off the current user session
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shutdown

> A tool for shutting down, restarting or logging off a machine.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/shutdown>.

- Shutdown the current machine:

`shutdown /s`

- Shutdown the current machine force-closing all apps:

`shutdown /s /f`

- Restart the current machine immediately:

`shutdown /r /t 0`

- Hibernate the current machine:

`shutdown /h`

- Log off the current machine:

`shutdown /l`

- Specify a timeout in seconds to wait before shutting down:

`shutdown /s /t {{8}}`

- Abort a shutdown sequence whose timeout is yet to expire:

`shutdown /a`

- Shutdown a remote machine:

`shutdown /m {{\\hostname}}`
