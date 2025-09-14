---
title: "Control E-book Database - Calibredb Command | Free DevTools"
name: calibredb
path: /freedevtools/tldr/common/calibredb
canonical: "https://hexmos.com/freedevtools/tldr/common/calibredb/"
description: "Control your e-book library database with Calibredb. Manage, search, and add books effortlessly with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- e-book database manager
- calibre command line tool
- ebook metadata editor
- calibre library management
- ebook database manipulation
- calibredb add ebooks
- calibredb remove ebooks
- calibredb search ebooks
- calibre ebook management linux
- ebook command line utility
features:
- List e-books with detailed information
- Search e-books using specific terms
- Add e-books individually or recursively from directories
- Remove e-books by their IDs
- Manage and organize large e-book collections
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# calibredb

> Manipulate an e-book database.
> Part of the Calibre e-book library.
> More information: <https://manual.calibre-ebook.com/generated/en/calibredb.html>.

- List e-books in the library with additional information:

`calibredb list`

- Search for e-books displaying additional information:

`calibredb list --search {{search_term}}`

- Search for just ids of e-books:

`calibredb search {{search_term}}`

- Add one or more e-books to the library:

`calibredb add {{path/to/file1 path/to/file2 ...}}`

- Recursively add all e-books under a directory to the library:

`calibredb add {{[-r|--recurse]}} {{path/to/directory}}`

- Remove one or more e-books from the library. You need the e-book IDs (see above):

`calibredb remove {{id1 id2 ...}}`
