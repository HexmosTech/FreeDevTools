---
title: "ArchWiki Reader - Search and Read ArchWiki Pages | Online Free DevTools by Hexmos"
name: archwiki-rs
path: /freedevtools/tldr/common/archwiki-rs
canonical: "https://hexmos.com/freedevtools/tldr/common/archwiki-rs/"
description: "Search ArchWiki pages efficiently with ArchWiki-rs. Read, search, and download content. Access up-to-date information on Arch Linux. Free online tool, no registration required."
category: common
keywords:
- ArchWiki reader
- ArchWiki search
- Arch Linux wiki
- ArchWiki downloader
- command line ArchWiki
- ArchWiki offline
- ArchWiki markdown
- ArchWiki plain text
- Linux ArchWiki
- ArchWiki articles
features:
- Read ArchWiki pages from the command line
- Search ArchWiki for specific text
- Download ArchWiki pages in various formats
- Access a local copy of the ArchWiki
- Support for plain text, markdown, and HTML formats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# archwiki-rs

> Read, search and download pages from the ArchWiki.
> More information: <https://gitlab.com/lucifayr/archwiki-rs>.

- Read a page from the ArchWiki:

`archwiki-rs read-page {{page_title}}`

- Read a page from the ArchWiki in the specified format:

`archwiki-rs read-page {{page_title}} --format {{plain-text|markdown|html}}`

- Search the ArchWiki for pages containing the provided text:

`archwiki-rs search "{{search_text}}" --text-search`

- Download a local copy of all ArchWiki pages into a specific directory:

`archwiki-rs local-wiki /{{path/to/local_wiki}} --format {{plain-text|markdown|html}}`
