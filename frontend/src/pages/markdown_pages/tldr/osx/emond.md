---
title: "Event Monitor - Control System Events | Free DevTools"
name: emond
path: /freedevtools/tldr/osx/emond
canonical: "https://hexmos.com/freedevtools/tldr/osx/emond/"
description: "Control system events with emond, the Event Monitor daemon. Configure rules to trigger actions based on events, such as running commands or sending notifications. Free online tool, no registration required."
category: osx
keywords:
- osx event monitor
- macos event daemon
- system event automation
- event rule engine
- command line event control
- emond configuration
- osx system monitoring
- event action triggers
- macos automation tools
- event notification system
features:
- Start the emond daemon
- Define event processing rules from a file or directory
- Use a custom configuration file
- Monitor and react to system events
- Execute commands based on triggered events
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# emond

> Event Monitor service that accepts events from various services, runs them through a simple rules engine, and takes action.
> The actions can run commands, send email, or SMS messages.
> More information: <https://manpagez.com/man/8/emond/>.

- Start the daemon:

`emond`

- Specify rules for emond to process by giving a path to a file or directory:

`emond -r {{path/to/file_or_directory}}`

- Use a specific configuration file:

`emond -c {{path/to/config_file}}`
