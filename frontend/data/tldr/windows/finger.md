---
title: 'Finger Command - Check User Information | Online Free DevTools by Hexmos'
name: finger
path: '/freedevtools/tldr/windows/finger/'
canonical: 'https://hexmos.com/freedevtools/tldr/windows/finger/'
description: 'Check user information with Finger Command. Quickly retrieve details about users on a remote system running the Finger service. Free online tool, no registration required.'
category: windows
keywords:
  - user information
  - finger command
  - network utility
  - remote host information
  - user lookup
  - system administration
  - finger protocol
  - user details
  - hostname lookup
  - online finger tool
features:
  - Display information about specific users.
  - Retrieve details for all users on a host.
  - Show user information in a longer format.
  - Access help information.
  - Connect to remote systems for user data.
ogImage: 'https://hexmos.com/freedevtools/site-banner.png'
twitterImage: 'https://hexmos.com/freedevtools/site-banner.png'
---

# finger

> Return information about users on a specified system.
> The remote system must be running the Finger service.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/finger>.

- Display information about a specific user:

`finger {{user}}@{{host}}`

- Display information about all users on the specified host:

`finger @{{host}}`

- Display information in a longer format:

`finger {{user}}@{{host}} -l`

- Display help information:

`finger /?`
