---
title: "Create updatedb Database - Refresh File Index | Free DevTools"
name: updatedb
path: /freedevtools/tldr/linux/updatedb
canonical: "https://hexmos.com/freedevtools/tldr/linux/updatedb/"
description: "Create and refresh updatedb file index database with updatedb. Find files quickly on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- updatedb file index
- linux file database
- updatedb command line
- linux locate database
- file system indexer
- updatedb cron job
- file search optimization
- linux file locator
- updatedb verbose mode
- file index management
features:
- Refresh the entire file system database
- Quickly index file paths for `locate` command
- Update the database via command line
- Run in verbose mode to display files found
- Integrate with cron for scheduled updates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# updatedb

> Create or update the database used by `locate`.
> It is usually run daily by cron.
> More information: <https://manned.org/updatedb>.

- Refresh database content:

`sudo updatedb`

- Display file names as soon as they are found:

`sudo updatedb {{[-v|--verbose]}}`
