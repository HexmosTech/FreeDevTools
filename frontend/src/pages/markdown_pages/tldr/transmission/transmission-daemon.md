---
title: "Transmission Daemon - Control Torrents | Online Free DevTools by Hexmos"
name: transmission-daemon
path: /freedevtools/tldr/transmission/transmission-daemon
canonical: "https://hexmos.com/freedevtools/tldr/transmission/transmission-daemon/"
description: "Control torrent downloads with Transmission Daemon, a lightweight and efficient BitTorrent client. Manage downloads remotely and automate torrent handling. Free online tool, no registration required."
category: common
keywords:
- transmission daemon
- bittorrent daemon
- torrent control
- headless torrent client
- transmission-remote
- linux torrent
- macos torrent
- common torrent
- torrent automation
- command-line torrent
features:
- Start a headless Transmission session.
- Monitor a directory for new torrents.
- Dump daemon settings to a JSON file.
- Configure web interface authentication.
- Specify allowed IP addresses for web interface access.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# transmission-daemon

> Daemon controlled with `transmission-remote` or its web interface.
> See also: `transmission`.
> More information: <https://manned.org/transmission-daemon>.

- Start a headless `transmission` session:

`transmission-daemon`

- Start and watch a specific directory for new torrents:

`transmission-daemon {{[-c|--watch-dir]}} {{path/to/directory}}`

- Dump daemon settings in JSON format:

`transmission-daemon {{[-d|--dump-settings]}} > {{path/to/file.json}}`

- Start with specific settings for the web interface:

`transmission-daemon {{[-t|--auth]}} {{[-u|--username]}} {{username}} {{[-v|--password]}} {{password}} {{[-p|--port]}} {{9091}} {{[-a|--allowed]}} {{127.0.0.1}}`
