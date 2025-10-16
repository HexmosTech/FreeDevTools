---
title: "Format Data with Git Column - Display Data in Columns | Online Free DevTools by Hexmos"
name: git-column
path: "/freedevtools/tldr/git/git-column/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-column/"
description: "Format data with Git Column to display information in organized columns. Customize width and padding for clear output. Free online tool, no registration required."
category: common
keywords:
- git column formatting
- git columnar output
- git display columns
- linux column formatting
- macos column formatting
- command line column tool
- format stdin columns
- git text alignment
- git terminal formatting
- git table formatting
features:
- Format stdin into multiple columns
- Customize column width for optimized display
- Adjust column padding for improved readability
- Display data in a structured columnar format
- Support configurable modes for column rendering
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git column

> Display data in columns.
> More information: <https://git-scm.com/docs/git-column>.

- Format `stdin` as multiple columns:

`ls | git column --mode={{column}}`

- Format `stdin` as multiple columns with a maximum width of `100`:

`ls | git column --mode=column --width={{100}}`

- Format `stdin` as multiple columns with a maximum padding of `30`:

`ls | git column --mode=column --padding={{30}}`
