---
title: "Create Torrent Files - Generate Metainfo with mktorrent | Online Free DevTools by Hexmos"
name: mktorrent
path: "/freedevtools/tldr/common/mktorrent/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mktorrent/"
description: "Create torrent files with mktorrent, a command-line tool for generating metainfo files. Build torrents with custom piece size and trackers. Free online tool, no registration required."
category: common
keywords:
- Torrent Metainfo Generator
- BitTorrent File Creation
- Mktorrent Command Line Tool
- Torrent Tracker Management
- Private Torrent Creator
- Linux Torrent Creation
- MacOS Torrent Generator
- Command Line Torrent Utility
- Torrent Seed Management
- Metainfo File Editor
features:
- Generate BitTorrent metainfo files
- Specify custom piece sizes
- Add multiple tracker announce URLs
- Create private torrents
- Include web seed URLs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mktorrent

> Create BitTorrent metainfo files.
> More information: <https://github.com/Rudde/mktorrent>.

- Create a torrent with 2^21 KB as the piece size:

`mktorrent {{[-a|--announce]}} {{tracker_announce_url}} {{[-l|--piece-length]}} {{21}} {{[-o|--output]}} {{path/to/example.torrent}} {{path/to/file_or_directory}}`

- Create a private torrent with a 2^21 KB piece size:

`mktorrent {{[-p|--private]}} {{[-a|--announce]}} {{tracker_announce_url}} {{[-l|--piece-length]}} {{21}} {{[-o|--output]}} {{path/to/example.torrent}} {{path/to/file_or_directory}}`

- Create a torrent with a comment:

`mktorrent {{[-c|--comment]}} "{{comment}}" {{[-a|--announce]}} {{tracker_announce_url}} {{[-l|--piece-length]}} {{21}} {{[-o|--output]}} {{path/to/example.torrent}} {{path/to/file_or_directory}}`

- Create a torrent with multiple trackers:

`mktorrent {{[-a|--announce]}} {{tracker_announce_url,tracker_announce_url_2}} {{[-l|--piece-length]}} {{21}} {{[-o|--output]}} {{path/to/example.torrent}} {{path/to/file_or_directory}}`

- Create a torrent with web seed URLs:

`mktorrent {{[-a|--announce]}} {{tracker_announce_url}} -w {{web_seed_url}} {{[-l|--piece-length]}} {{21}} {{[-o|--output]}} {{path/to/example.torrent}} {{path/to/file_or_directory}}`
