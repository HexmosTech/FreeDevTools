---
title: "Manage Bookmarks - Control Browser Bookmarks with Buku | Online Free DevTools by Hexmos"
name: buku
path: "/freedevtools/tldr/common/buku/"
canonical: "https://hexmos.com/freedevtools/tldr/common/buku/"
description: "Manage browser bookmarks efficiently with Buku. Organize, tag, and search your bookmarks from the command line. Free online tool, no registration required."
category: common
keywords:
- bookmark manager
- command line bookmarks
- browser bookmark tool
- buku bookmark
- terminal bookmark manager
- bookmark tagging
- bookmark searching
- linux bookmark manager
- command line utilities
- open source bookmark
features:
- Add bookmarks with custom tags
- Delete bookmarks by ID
- Update existing bookmarks
- Search bookmarks with keywords and tags
- Open bookmarks in an editor
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# buku

> Browser-independent bookmark manager.
> More information: <https://github.com/jarun/Buku#usage>.

- Display all bookmarks matching "keyword" and with "privacy" tag:

`buku {{keyword}} {{[-t|--stag]}} {{privacy}}`

- Add bookmark with tags "search engine" and "privacy":

`buku {{[-a|--add]}} {{https://example.com}} {{search engine}}, {{privacy}}`

- Delete a bookmark:

`buku {{[-d|--delete]}} {{bookmark_id}}`

- Open editor to edit a bookmark:

`buku {{[-w|--write]}} {{bookmark_id}}`

- Remove "search engine" tag from a bookmark:

`buku {{[-u|--update]}} {{bookmark_id}} --tag - {{search engine}}`
