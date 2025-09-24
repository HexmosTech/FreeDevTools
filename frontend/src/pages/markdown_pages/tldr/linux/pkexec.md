---
title: "Execute Commands as User - Control Privileges | Online Free DevTools by Hexmos"
name: pkexec
path: /freedevtools/tldr/linux/pkexec
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkexec/"
description: "Execute commands with pkexec. Control user privileges and run commands as another user with this utility. Free online tool, no registration required."
category: linux
keywords:
  - execute commands as user
  - pkexec linux
  - linux command execution
  - privilege escalation linux
  - user switching linux
  - linux root access
  - polkit pkexec
  - command execution utility
  - run command as root
  - linux command line tools
features:
  - Execute commands as root user
  - Switch user to root
  - Run commands as a specific user
  - Request graphical password authentication
  - Execute programs with elevated privileges
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkexec

> Execute commands as another user.
> Asks for password in a GUI if available.
> More information: <https://polkit.pages.freedesktop.org/polkit/pkexec.1.html>.

- Run command as root:

`pkexec {{command}}`

- Switch user to root:

`pkexec`

- Run command as a specific user:

`pkexec --user {{username}} {{command}}`
