---
title: "Transmission Edit - Modify Torrent Announce URLs | Online Free DevTools by Hexmos"
name: transmission-edit
path: /freedevtools/tldr/transmission/transmission-edit
canonical: "https://hexmos.com/freedevtools/tldr/transmission/transmission-edit/"
description: "Modify torrent announce URLs with Transmission Edit. Update tracker lists and passcodes with this command line tool. Free online tool, no registration required."
category: common
keywords:
- torrent announce url editor
- transmission tracker list modifier
- modify torrent trackers
- transmission announce url update
- torrent passcode changer
- transmission tracker editor linux
- torrent tracker manager
- transmission command line tool
- transmission torrent editor
- transmission edit tool
features:
- Add URLs to torrent announce lists
- Remove URLs from torrent announce lists
- Replace tracker passcodes in torrent files
- Modify multiple torrent files at once
- Update torrent tracker information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# transmission-edit

> Modify announce URLs from torrent files.
> See also: `transmission`.
> More information: <https://manned.org/transmission-edit>.

- Add a URL to a torrent's announce list:

`transmission-edit {{[-a|--add]}} {{http://example.com}} {{path/to/file.torrent}}`

- Remove a URL from a torrent's announce list:

`transmission-edit {{[-d|--delete]}} {{http://example.com}} {{path/to/file.torrent}}`

- Update a tracker's passcode in a torrent file:

`transmission-edit {{[-r|--replace]}} {{old-passcode}} {{new-passcode}} {{path/to/file.torrent}}`
