---
title: "Locate Files - Find Files Quickly | Free DevTools"
name: locate
path: /freedevtools/tldr/osx/locate
canonical: "https://hexmos.com/freedevtools/tldr/osx/locate/"
description: "Find files quickly with Locate. Easily search file names and recompute the file database on macOS. Free online tool, no registration required."
category: osx
keywords:
- macOS file search
- locate file names
- find files macOS
- recompute locate database
- command line file search
- osx locate command
- search file by name
- quickly find files
- file system search
- updatedb command
features:
- Search file names based on patterns
- Find files by exact filename
- Update the file database for recent changes
- Search the entire file system quickly
- Use globbing for flexible filename searches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# locate

> Find filenames quickly.
> More information: <https://keith.github.io/xcode-man-pages/locate.1.html>.

- Look for pattern in the database. Note: The database is recomputed periodically (usually weekly or daily):

`locate "{{pattern}}"`

- Look for a file by its exact filename (a pattern containing no globbing characters is interpreted as `*pattern*`):

`locate */{{filename}}`

- Recompute the database. You need to do it if you want to find recently added files:

`sudo /usr/libexec/locate.updatedb`
