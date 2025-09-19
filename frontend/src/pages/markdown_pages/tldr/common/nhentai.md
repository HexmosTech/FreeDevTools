---
title: "NHentai Downloader - Download Doujinshis | Online Free DevTools by Hexmos"
name: nhentai
path: /freedevtools/tldr/common/nhentai
canonical: "https://hexmos.com/freedevtools/tldr/common/nhentai/"
description: "Download doujinshis with NHentai Downloader. Effortlessly retrieve comics from nhentai using command-line. Free online tool, no registration required."
category: common
keywords:
- nhentai downloader
- nhentai command line tool
- doujinshi downloader
- comic downloader
- manga downloader
- nhentai cli
- nhentai batch download
- nhentai bulk download
- nhentai gallery downloader
- nhentai favorites download
features:
- Download specific doujinshis by ID
- Download pages from your nhentai favorites
- Set cookies for authenticated downloads
- Delay download speed to avoid blocking
- Batch download multiple doujinshis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nhentai

> Download doujinshis from nhentai.
> More information: <https://github.com/RicterZ/nhentai>.

- Set cookies:

`nhentai --cookie "csrftoken={{TOKEN}}; sessionid={{ID}}"`

- Download a specific doujin:

`nhentai --id {{number}}`

- Download the first page of your favorites:

`nhentai --favorites --download --delay 1`

- Download specific pages of your favorites:

`nhentai --favorites --pages {{start_page}}-{{end_page}} --download --delay 1`
