---
title: "Control Notifications - Manage OSX Notifications | Free DevTools"
name: notifyd
path: /freedevtools/tldr/osx/notifyd
canonical: "https://hexmos.com/freedevtools/tldr/osx/notifyd/"
description: "Control system notifications with notifyd, the OSX notification server. Manage alerts, debug notification behavior, and configure logging. Free online tool, no registration required."
category: osx
keywords:
- osx notification server
- macos notification manager
- notifyd command line
- osx notifyd logging
- system notifications osx
- debug osx notifications
- notification control osx
- manage notifyd
- osx alerts configuration
- notifyd debug messages
features:
- Start the notifyd daemon
- Log debug messages to a specified file
- Manage system notifications on OSX
- Configure notification server behavior
- Enable debugging of notification delivery
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# notifyd

> Notification server.
> It should not be invoked manually.
> More information: <https://keith.github.io/xcode-man-pages/notifyd.8.html>.

- Start the daemon:

`notifyd`

- Log debug messages to the default log file (`/var/log/notifyd.log`):

`notifyd -d`

- Log debug messages to an alternate log file:

`notifyd -d -log_file {{path/to/log_file}}`
