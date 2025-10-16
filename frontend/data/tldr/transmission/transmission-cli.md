---
title: "Torrent Downloader - Control Downloads with transmission-cli | Online Free DevTools by Hexmos"
name: transmission-cli
path: "/freedevtools/tldr/transmission/transmission-cli/"
canonical: "https://hexmos.com/freedevtools/tldr/transmission/transmission-cli/"
description: "Control torrent downloads easily with transmission-cli, a lightweight command-line BitTorrent client. Manage download speed and encryption. Free online tool, no registration required."
category: common
keywords:
- torrent downloader
- command line torrent client
- cli torrent downloader
- linux torrent download
- magnet link downloader
- torrent speed control
- transmission command line
- bittorrent client
- torrent encryption
- peer blocklist
features:
- Download torrents from URLs, magnet links, or local files
- Limit download and upload speeds for torrents
- Force encryption for peer connections to enhance privacy
- Create new torrent files from existing files or directories
- Utilize Bluetack-formatted peer blocklists to filter connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# transmission-cli

> A lightweight, command-line BitTorrent client.
> This tool has been deprecated, please see `transmission-remote`.
> More information: <https://manned.org/transmission-cli>.

- Download a specific torrent:

`transmission-cli {{url|magnet|path/to/file}}`

- Download a torrent to a specific directory:

`transmission-cli {{[-w|--download-dir]}} {{path/to/download_directory}} {{url|magnet|path/to/file}}`

- Create a torrent file from a specific file or directory:

`transmission-cli --new {{path/to/source_file_or_directory}}`

- Specify the download speed limit (in KB/s):

`transmission-cli {{[-d|--downlimit]}} {{50}} {{url|magnet|path/to/file}}`

- Specify the upload speed limit (in KB/s):

`transmission-cli {{[-u|--uplimit]}} {{50}} {{url|magnet|path/to/file}}`

- Use a specific port for connections:

`transmission-cli {{[-p|--port]}} {{port_number}} {{url|magnet|path/to/file}}`

- Force encryption for peer connections:

`transmission-cli {{[-er|--encryption-required]}} {{url|magnet|path/to/file}}`

- Use a Bluetack-formatted peer blocklist:

`transmission-cli {{[-b|--blocklist]}} {{blocklist_url|path/to/blocklist}} {{url|magnet|path/to/file}}`
