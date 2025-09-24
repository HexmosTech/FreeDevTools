---
title: "Manage Bookmarks - Shiori Bookmark Manager | Online Free DevTools by Hexmos"
name: shiori
path: /freedevtools/tldr/common/shiori
canonical: "https://hexmos.com/freedevtools/tldr/common/shiori/"
description: "Manage bookmarks easily with Shiori Bookmark Manager. Import, save, list, and open bookmarks using the command line. Free online tool, no registration required."
category: common
keywords:
- bookmark manager
- shiori bookmark
- command line bookmark
- go shiori
- netscape bookmark import
- url bookmarking
- terminal bookmark manager
- shiori server
- bookmark cli
- shiori linux
features:
- Import bookmarks from HTML files
- Save URLs as bookmarks from the command line
- List all saved bookmarks in the terminal
- Open bookmarks directly in a browser
- Serve a web interface for bookmark management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shiori

> Simple bookmark manager built with Go.
> More information: <https://github.com/go-shiori/shiori/blob/master/docs/Usage.md>.

- Import bookmarks from HTML Netscape bookmark format file:

`shiori import {{path/to/bookmarks.html}}`

- Save the specified URL as bookmark:

`shiori add {{url}}`

- List the saved bookmarks:

`shiori print`

- Open the saved bookmark in a browser:

`shiori open {{bookmark_id}}`

- Start the web interface for managing bookmarks at port 8181:

`shiori serve --port {{8181}}`
