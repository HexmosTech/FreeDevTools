---
title: "Access KJV Bible - Read Scriptures on Your Desktop | Free DevTools"
name: kjv
path: /freedevtools/tldr/unknown/kjv
canonical: "https://hexmos.com/freedevtools/tldr/unknown/kjv/"
description: "Access KJV Bible verses directly from your desktop with KJV. A command-line tool for scripture lookup and study. Free online tool, no registration required."
category: unknown
keywords:
- KJV Bible CLI
- Scripture command line tool
- Bible verse lookup
- KJV text search
- Command line bible reader
- Desktop scripture access
- Bible verse retriever
- KJV command reference
- Scripture study tool
- Text-based bible search
features:
- Display specific books of the Bible
- Open a specific chapter by book name
- Retrieve a specific verse by chapter and verse number
- Display a range of verses within a chapter
- Search for verses matching a specific pattern
- Display verses across multiple chapters
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kjv

> The word of God available right on your desktop.
> More information: <https://github.com/bontibon/kjv>.

- Display books:

`kjv -l`

- Open a specific book:

`kjv {{Genesis}}`

- Open a specific chapter of a book:

`kjv {{Genesis}} {{2}}`

- Open a specific verse of a specific chapter of a book:

`kjv {{John}} {{3}}:{{16}}`

- Open a specific range of verses of a book's chapter:

`kjv {{Proverbs}} {{3}}:{{1-6}}`

- Display a specific range of verses of a book from different chapters:

`kjv {{Matthew}} {{1}}:{{7}}-{{2}}:{{6}}`

- Display all verses that match a pattern:

`kjv /{{Plagues}}`

- Display all verses that match a pattern in a specific book:

`kjv {{1Jn}}/{{antichrist}}`
