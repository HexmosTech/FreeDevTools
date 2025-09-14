---
title: "Automate Content with FlexGet - Automation Tool | Free DevTools"
name: flexget
path: /freedevtools/tldr/common/flexget
canonical: "https://hexmos.com/freedevtools/tldr/common/flexget/"
description: "Automate content management with FlexGet. Schedule tasks, download torrents, manage podcasts, and organize media files. Free online tool, no registration required."
category: common
keywords:
- FlexGet automation
- content management system
- torrent downloader
- podcast manager
- media organizer
- FlexGet CLI
- FlexGet configuration
- FlexGet task scheduler
- FlexGet daemon
- FlexGet series management
features:
- Automate torrent and NZB downloading based on defined rules
- Schedule and execute tasks for recurring content management
- Manage and organize series, movies, and podcasts
- Run FlexGet as a daemon for continuous background processing
- List and manage series tracked by FlexGet
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flexget

> A multipurpose automation tool for content like torrents, nzbs, podcasts, comics, series, movies, etc.
> More information: <https://flexget.com/en/CLI>.

- Run all Flexget tasks now:

`flexget execute --now`

- Start the Flexget daemon and daemonize its process:

`flexget daemon start --daemonize`

- List all series recorded in Flexget:

`flexget series list`

- Run a task from a configuration file:

`flexget -c {{path/to/config.yml}} execute --task {{task_name}}`
