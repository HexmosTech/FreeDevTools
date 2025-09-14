---
title: "Create Torrent Files - Transmission-Create | Free DevTools"
name: transmission-create
path: "/freedevtools/tldr/transmission/transmission-create"
canonical: "https://hexmos.com/freedevtools/tldr/transmission/transmission-create/"
description: "Create torrent files with Transmission-Create, a powerful BitTorrent client. Generate .torrent files with specific piece sizes and trackers. Free online tool, no registration required."
category: common
keywords:
- torrent file creation
- BitTorrent creator
- transmission-create tool
- .torrent generator
- torrent metadata
- tracker announce URL
- piece size configuration
- private torrent creation
- command-line torrent
- torrent file editor
features:
- Create .torrent files with custom piece sizes.
- Add multiple trackers to torrent files.
- Generate private torrents.
- Include comments in torrent metadata.
- Display help page for command options.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# transmission-create

> Create BitTorrent `.torrent` files.
> See also: `transmission`.
> More information: <https://manned.org/transmission-create>.

- Create a torrent with a specific piece size (in KB):

`transmission-create {{[-o|--outfile]}} {{path/to/example.torrent}} {{[-t|--tracker]}} {{tracker_announce_url}} {{[-s|--piecesize]}} {{2048}} {{path/to/file_or_directory}}`

- Create a private torrent with a specific piece size (in KB):

`transmission-create {{[-p|--private]}} {{[-o|--outfile]}} {{path/to/example.torrent}} {{[-t|--tracker]}} {{tracker_announce_url}} {{[-s|--piecesize]}} {{2048}} {{path/to/file_or_directory}}`

- Create a torrent with a comment:

`transmission-create {{[-o|--outfile]}} {{path/to/example.torrent}} {{[-t|--tracker]}} {{tracker_url1}} {{[-c|--comment]}} {{comment}} {{path/to/file_or_directory}}`

- Create a torrent with multiple trackers:

`transmission-create {{[-o|--outfile]}} {{path/to/example.torrent}} {{[-t|--tracker]}} {{tracker_url1}} {{[-t|--tracker]}} {{tracker_url2}} {{path/to/file_or_directory}}`

- Display help page:

`transmission-create {{[-h|--help]}}`
