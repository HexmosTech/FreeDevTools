---
title: "Deluge Torrent Client - Download Torrents | Online Free DevTools by Hexmos"
name: deluge
path: "/freedevtools/tldr/common/deluge/"
canonical: "https://hexmos.com/freedevtools/tldr/common/deluge/"
description: "Download torrent files easily with Deluge Torrent Client. Manage downloads, configure settings, and optimize performance. Free online tool, no registration required."
category: common
keywords:
- Deluge torrent downloader
- BitTorrent client download
- torrent file management
- Deluge configuration options
- Linux torrent client
- macOS torrent client
- command-line torrent
- seed torrent files
- torrent download automation
- Deluge CLI download
features:
- Download torrent files from URLs, magnet links, or local paths
- Use custom configuration files for advanced settings
- Launch with a specific user interface (GTK, web, console)
- Output logs to a file for debugging and monitoring
- Manage and control torrent downloads via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# deluge

> A BitTorrent client.
> More information: <https://manned.org/deluge>.

- Download a torrent:

`deluge {{url|magnet|path/to/file}}`

- Download a torrent using a specific configuration file:

`deluge {{[-c|--config]}} {{path/to/configuration_file}} {{url|magnet|path/to/file}}`

- Download a torrent and launch the specified user interface:

`deluge -u {{gtk|web|console}} {{url|magnet|path/to/file}}`

- Download a torrent and output the log to a file:

`deluge {{[-l|--logfile]}} {{path/to/log_file}} {{url|magnet|path/to/file}}`
