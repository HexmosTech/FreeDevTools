---
title: "Manage RSS Feeds - Feedreader Client | Online Free DevTools by Hexmos"
name: feedreader
path: /freedevtools/tldr/linux/feedreader
canonical: "https://hexmos.com/freedevtools/tldr/linux/feedreader/"
description: "Manage RSS feeds easily with Feedreader, a desktop RSS client for Linux. Add feeds, grab articles, and download media directly from the command line. Free online tool, no registration required."
category: linux
keywords:
- RSS Feed Client
- Linux RSS Reader
- Desktop Feed Aggregator
- Command Line RSS
- Feedreader Linux
- RSS Article Downloader
- Linux Media Downloader
- Feed Management Linux
- RSS Feed Management
- Linux RSS Client
features:
- Print the count of unread RSS articles
- Add a URL for a feed to follow
- Grab a specific article using its URL
- Download all images from a specific article
- Play media from a URL
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# feedreader

> A GUI desktop RSS client.
> Note: FeedReader is no longer being maintained.
> More information: <https://github.com/jangernert/FeedReader>.

- Print the count of unread articles:

`feedreader --unreadCount`

- Add a URL for a feed to follow:

`feedreader --addFeed={{feed_url}}`

- Grab a specific article using its URL:

`feedreader --grabArticle={{article_url}}`

- Download all images from a specific article:

`feedreader --url={{feed_url}} --grabImages={{article_path}}`

- Play media from a URL:

`feedreader --playMedia={{article_url}}`
