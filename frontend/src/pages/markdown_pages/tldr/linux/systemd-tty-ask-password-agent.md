---
title: "Password Agent - Process System Password Requests | Online Free DevTools by Hexmos"
name: systemd-tty-ask-password-agent
path: /freedevtools/tldr/linux/systemd-tty-ask-password-agent
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-tty-ask-password-agent/"
description: "Process system passwords with systemd-tty-ask-password-agent. List, query, and forward password requests to manage system authentication efficiently. Free online tool, no registration required."
category: linux
keywords:
- systemd password agent
- linux password manager
- systemd authentication
- tty password requests
- command-line password utility
- systemd security
- password prompt tool
- linux system administration
- authentication request handler
- systemd service management
features:
- List pending system password requests
- Continuously monitor and process password requests
- Query users for passwords on the TTY
- Forward password requests to wall
- Manage system authentication from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-tty-ask-password-agent

> List or process pending systemd password requests.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-tty-ask-password-agent.html>.

- List all currently pending system password requests:

`systemd-tty-ask-password-agent --list`

- Continuously process password requests:

`systemd-tty-ask-password-agent --watch`

- Process all currently pending system password requests by querying the user on the calling TTY:

`systemd-tty-ask-password-agent --query`

- Forward password requests to wall instead of querying the user on the calling TTY:

`systemd-tty-ask-password-agent --wall`
