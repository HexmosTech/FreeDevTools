---
title: "Locate Files - Find Filenames Quickly | Online Free DevTools by Hexmos"
name: plocate
path: "/freedevtools/tldr/common/plocate/"
canonical: "https://hexmos.com/freedevtools/tldr/common/plocate/"
description: "Find filenames quickly with plocate. Search your file system database efficiently and locate files by name or pattern. Free online tool, no registration required."
category: common
keywords:
- filename finder
- plocate file search
- linux file locator
- command line file search
- find file by name
- file system indexing
- quick file search
- linux search command
- terminal file search
- filename pattern search
features:
- Search for filenames using patterns
- Locate files by exact filename
- Utilize an indexed database for rapid searching
- Enable database updates with `updatedb`
- Offer efficient command-line file location
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# plocate

> Find filenames quickly.
> Make sure to run `sudo updatedb` to include new files.
> More information: <https://plocate.sesse.net>.

- Look for patterns in the database (recomputed periodically):

`plocate {{pattern}}`

- Look for a file by its exact filename (a pattern containing no globbing characters is interpreted as `*pattern*`):

`plocate */{{filename}}`
