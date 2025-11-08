---
title: "Locate Files - Find Files Quickly | Online Free DevTools by Hexmos"
name: locate
path: "/freedevtools/tldr/linux/locate/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/locate/"
description: "Find files quickly with Locate. Efficiently search for filenames using the Locate command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - filename search
  - locate command
  - find files
  - linux locate
  - macos locate
  - command line file search
  - file system search
  - updatedb command
  - filename pattern matching
  - quickly find filenames
features:
  - Search for filenames by pattern
  - Locate files using exact filename
  - Recompute the locate database using updatedb
  - Find recently added files
  - Quickly locate files in the filesystem
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# locate

> Find filenames quickly.
> More information: <https://manned.org/locate>.

- Look for pattern in the database. Note: The database is recomputed periodically (usually weekly or daily):

`locate {{pattern}}`

- Look for a file by its exact filename (a pattern containing no globbing characters is interpreted as `*pattern*`):

`locate '*/{{filename}}'`

- Recompute the database. You need to do it if you want to find recently added files:

`sudo updatedb`
