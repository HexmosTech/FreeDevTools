---
title: "Ripgrep All - Search Files Easily | Online Free DevTools by Hexmos"
name: rga
path: /freedevtools/tldr/common/rga
canonical: "https://hexmos.com/freedevtools/tldr/common/rga/"
description: "Search files quickly with Ripgrep All, a ripgrep wrapper supporting diverse file types. Easily find text within documents, archives, and media. Free online tool, no registration required."
category: common
keywords:
- ripgrep all search
- file content search
- text search tool
- recursive file search
- grep alternative
- document search
- archive search
- media file search
- linux file search
- macos file search
features:
- Recursively search for patterns in various file types
- List available file type adapters
- Customize adapters for specific file type support
- Search by MIME type for accurate results
- Display help information and usage instructions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rga

> Ripgrep wrapper with rich file type searching capabilities.
> More information: <https://github.com/phiresky/ripgrep-all>.

- Search recursively for a pattern in all files in the current directory:

`rga {{regex}}`

- List available adapters:

`rga --rga-list-adapters`

- Change which adapters to use (e.g. ffmpeg, pandoc, poppler etc.):

`rga --rga-adapters={{adapter1,adapter2}} {{regex}}`

- Search for a pattern using the mime type instead of the file extension (slower):

`rga --rga-accurate {{regex}}`

- Display help:

`rga --help`
