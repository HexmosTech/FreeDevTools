---
title: "Internet Archive - Manage Files | Online Free DevTools by Hexmos"
name: ia
path: "/freedevtools/tldr/common/ia/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ia/"
description: "Manage files on the Internet Archive with the 'ia' command-line tool. Upload, download, delete items and search for content. Free online tool, no registration required."
category: common
keywords:
- internet archive command
- archive.org cli
- ia upload
- ia download
- internet archive search
- internet archive metadata
- archive.org command line
- digital preservation tools
- archive.org management
- internet archive backup
features:
- Upload files to the Internet Archive
- Download items from archive.org
- Delete files from the archive
- Search the archive using complex queries
- Configure access with API keys
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ia

> Tool to interact with `archive.org`.
> More information: <https://archive.org/services/docs/api/internetarchive/cli.html>.

- Configure `ia` with API keys (some functions won't work without this step):

`ia configure`

- Upload one or more items to `archive.org`:

`ia upload {{identifier}} {{path/to/file}} --metadata="{{mediatype:data}}" --metadata="{{title:example}}"`

- Download one or more items from `archive.org`:

`ia download {{item}}`

- Delete one or more items from `archive.org`:

`ia delete {{identifier}} {{file}}`

- Search on `archive.org`, returning results as JSON:

`ia search '{{subject:"subject" collection:collection}}'`
