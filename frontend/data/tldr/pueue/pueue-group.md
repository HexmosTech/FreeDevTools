---
title: "Pueue Group - Manage Task Groups | Online Free DevTools by Hexmos"
name: pueue-group
path: "/freedevtools/tldr/pueue/pueue-group/"
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-group/"
description: "Manage task groups with Pueue Group. Add, remove, and display task groups for efficient task management. Free online tool, no registration required."
category: common
keywords:
- pueue group manager
- task group management
- pueue command-line tool
- parallel job groups
- pueue task control
- linux task management
- macos task management
- command-line task grouping
- pueue task organization
- queue group manipulation
features:
- Display all Pueue groups and their statuses
- Add custom task groups to the Pueue queue
- Remove existing task groups from the Pueue queue
- Move tasks from removed groups to the default group
- Control the number of parallel jobs within groups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue group

> Display, add or remove groups.
> More information: <https://github.com/Nukesor/pueue>.

- Show all groups with their statuses and number of parallel jobs:

`pueue group`

- Add a custom group:

`pueue group add "{{group_name}}"`

- Remove a group and move its tasks to the default group:

`pueue group remove "{{group_name}}"`
