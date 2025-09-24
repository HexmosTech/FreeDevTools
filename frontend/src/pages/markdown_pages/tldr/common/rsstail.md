---
title: "RSSTail - Monitor RSS Feeds | Online Free DevTools by Hexmos"
name: rsstail
path: /freedevtools/tldr/common/rsstail
canonical: "https://hexmos.com/freedevtools/tldr/common/rsstail/"
description: "Monitor RSS feeds with RSSTail. Track website updates, new content, and blog posts in real-time directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- RSS feed monitoring
- command line RSS reader
- terminal RSS feed
- live RSS feed updates
- RSS feed tail
- website change tracker
- news feed monitor
- linux RSS reader
- macos RSS reader
- common command
features:
- Display RSS feed content
- Monitor for new feed entries
- Show feeds in reverse chronological order
- Customize update interval
- Display publication date and link
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rsstail

> `tail` for RSS feeds.
> More information: <https://manned.org/rsstail>.

- Show the feed of a given URL and wait for new entries appearing at the bottom:

`rsstail -u {{url}}`

- Show the feed in reverse chronological order (newer at the bottom):

`rsstail -r -u {{url}}`

- Include publication date and link:

`rsstail -pl -u {{url}}`

- Set update interval:

`rsstail -u {{url}} -i {{interval_in_seconds}}`

- Show feed and exit:

`rsstail -1 -u {{url}}`
