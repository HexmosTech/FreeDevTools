---
title: "Control Brew Services - Manage Daemons on macOS | Online Free DevTools by Hexmos"
name: brew-services
path: /freedevtools/tldr/brew/brew-services
canonical: "https://hexmos.com/freedevtools/tldr/brew/brew-services/"
description: "Control brew services with this tool. Manage, start, stop, and restart background processes using launchctl and systemctl. Free online tool, no registration required."
category: common
keywords:
- brew services manager
- macOS service control
- linux service control
- launchctl management
- systemctl management
- homebrew service
- daemon controller
- background process manager
- service start stop restart
- brew services cleanup
features:
- List all managed services for the current user
- Start a service and register it to launch at login
- Stop a service and unregister it from launching at login
- Restart a service immediately
- Remove all unused services
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# brew services

> Manage background services with `launchctl` on macOS or `systemctl` on Linux.
> More information: <https://docs.brew.sh/Manpage#services-subcommand>.

- List all managed services for the current user:

`brew services`

- List more information about all managed services:

`brew services info --all`

- Start a service immediately and register it to launch at login (or boot):

`brew services start {{formula}}`

- Stop the service immediately and unregister it from launching at login (or boot):

`brew services stop {{formula}}`

- Stop (if necessary) and start the service immediately and register it to launch at login (or boot):

`brew services restart {{formula}}`

- Remove all unused services:

`brew services cleanup`
