---
title: "FlexGet Automation - Manage Content with CLI | Online Free DevTools by Hexmos"
name: flexget
path: /freedevtools/tldr/common/flexget
canonical: "https://hexmos.com/freedevtools/tldr/common/flexget/"
description: "Automate content management with FlexGet, a command-line tool for downloading torrents, managing podcasts, and organizing media files.  Schedule tasks, handle series, and more. Free online tool, no registration required."
category: common
keywords:
- FlexGet automation
- FlexGet CLI commands
- torrent download automation
- podcast management automation
- media file organization automation
- FlexGet series tracking
- FlexGet task scheduling
- FlexGet daemon control
- command-line content management
- automated content downloading
features:
- Automate downloading of torrents and NZBs based on customizable rules.
- Schedule recurring tasks for consistent content updates.
- Manage and organize series, movies, and podcasts efficiently.
- Run FlexGet as a background daemon for continuous operation.
- Track and manage multiple series with detailed control.
ogImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
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
