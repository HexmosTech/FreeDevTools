---
title: "Read RSS Feeds - Control Newsboat from Terminal | Online Free DevTools by Hexmos"
name: newsboat
path: "/freedevtools/tldr/common/newsboat"
canonical: "https://hexmos.com/freedevtools/tldr/common/newsboat/"
description: "Read RSS feeds efficiently with Newsboat, a text-based terminal feed reader. Subscribe, refresh, and manage feeds directly from your command line. Free online tool, no registration required."
category: common
keywords:
- rss feed reader
- atom feed reader
- terminal feed reader
- command line rss
- newsboat rss
- newsboat atom
- opml import
- newsboat config
- linux rss reader
- console feed reader
features:
- Import feed URLs from OPML files
- Manually add and subscribe to feeds
- Refresh all feeds on startup
- Execute commands in non-interactive mode
- Display keyboard shortcuts for easy navigation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# newsboat

> An RSS/Atom feed reader for text terminals.
> More information: <https://newsboat.org/releases/2.40/docs/newsboat.html#_first_steps>.

- First import feed URLs from an OPML file:

`newsboat {{[-i|--import-from-opml]}} {{my-feeds.xml}}`

- Alternatively, add feeds manually:

`echo {{http://example.com/path/to/feed}} >> "${HOME}/.newsboat/urls"`

- Start Newsboat and refresh all feeds on startup:

`newsboat {{[-r|--refresh-on-start]}}`

- Execute one or more commands in non-interactive mode:

`newsboat {{[-x|--execute]}} {{reload print-unread ...}}`

- See keyboard shortcuts (the most relevant are visible in the status line):

`<?>`
