---
title: "Transmission Show - Get Torrent Info | Online Free DevTools by Hexmos"
name: transmission-show
path: "/freedevtools/tldr/transmission/transmission-show/"
canonical: "https://hexmos.com/freedevtools/tldr/transmission/transmission-show/"
description: "Get torrent information with Transmission Show. Generate magnet links and scrape tracker data using the command line. Free online tool, no registration required."
category: common
keywords:
- torrent metadata extraction
- transmission torrent info
- torrent magnet link generator
- scrape torrent trackers
- transmission-cli
- torrent peer count
- torrent file details
- torrent tracker query
- command line torrent tools
- linux transmission
features:
- Display torrent metadata
- Generate magnet links from torrent files
- Query torrent trackers for peer counts
- Show information about a specific torrent
- Extract details from .torrent files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# transmission-show

> Get information about a torrent file.
> See also: `transmission`.
> More information: <https://manned.org/transmission-show>.

- Display metadata for a specific torrent:

`transmission-show {{path/to/file.torrent}}`

- Generate a magnet link for a specific torrent:

`transmission-show {{[-m|--magnet]}} {{path/to/file.torrent}}`

- Query a torrent's trackers and print the current number of peers:

`transmission-show {{[-s|--scrape]}} {{path/to/file.torrent}}`
