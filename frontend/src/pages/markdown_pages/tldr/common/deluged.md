---
title: "Deluge Daemon - Control BitTorrent Daemon | Free DevTools"
name: deluged
path: /freedevtools/tldr/common/deluged
canonical: "https://hexmos.com/freedevtools/tldr/common/deluged/"
description: "Control your BitTorrent daemon with Deluge Daemon. Manage Deluge settings and logs through command line. Free online tool, no registration required."
category: common
keywords:
- deluge daemon control
- bittorrent daemon manager
- linux deluge daemon
- command line torrent control
- deluge configuration file
- deluge log management
- torrent daemon settings
- deluge daemon port
- deluge cli
- deluge bittorrent client
features:
- Start the Deluge BitTorrent daemon.
- Specify a port for the Deluge daemon.
- Load a custom configuration file.
- Redirect daemon output to a log file.
- Manage Deluge through command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# deluged

> A daemon process for the Deluge BitTorrent client.
> More information: <https://manned.org/deluged>.

- Start the Deluge daemon:

`deluged`

- Start the Deluge daemon on a specific port:

`deluged {{[-p|--port]}} {{port}}`

- Start the Deluge daemon using a specific configuration file:

`deluged {{[-c|--config]}} {{path/to/configuration_file}}`

- Start the Deluge daemon and output the log to a file:

`deluged {{[-l|--logfile]}} {{path/to/log_file}}`
