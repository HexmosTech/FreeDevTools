---
title: "Deluge Console - Control BitTorrent Client | Online Free DevTools by Hexmos"
name: deluge-console
path: /freedevtools/tldr/common/deluge-console
canonical: "https://hexmos.com/freedevtools/tldr/common/deluge-console/"
description: "Control your BitTorrent client with Deluge Console. Manage torrents, connect to daemons, and view torrent info. Free online tool, no registration required."
category: common
keywords:
- deluge console client
- bittorrent control console
- deluge torrent manager
- command-line torrent client
- torrent management linux
- deluge daemon control
- torrent add console
- torrent info console
- deluge pause resume
- torrent remove console
features:
- Connect to Deluge daemon instances remotely
- Add torrents via URL, magnet link, or file path
- Display detailed information about all torrents
- Pause and resume individual torrents
- Remove torrents from the daemon
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# deluge-console

> An interactive interface for the Deluge BitTorrent client.
> More information: <https://deluge-torrent.org/userguide/thinclient/>.

- Start the interactive console interface:

`deluge-console`

- Connect to a Deluge daemon instance:

`connect {{hostname}}:{{port}}`

- Add a torrent to the daemon:

`add {{url|magnet|path/to/file}}`

- Display information about all torrents:

`info`

- Display information about a specific torrent:

`info {{torrent_id}}`

- Pause a torrent:

`pause {{torrent_id}}`

- Resume a torrent:

`resume {{torrent_id}}`

- Remove a torrent from the daemon:

`rm {{torrent_id}}`
