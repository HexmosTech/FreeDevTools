---
title: "Search and Replace - Control Text with Ned | Online Free DevTools by Hexmos"
name: ned
path: /freedevtools/tldr/common/ned
canonical: "https://hexmos.com/freedevtools/tldr/common/ned/"
description: "Control text with Ned, a powerful search and replace command line tool. Edit text recursively and non-linearly. Free online tool, no registration required."
category: common
keywords:
- text search and replace
- command line text editor
- recursive text search
- non-line oriented editing
- regex replace tool
- command line text manipulation
- linux text search
- macos text search
- regular expression tool
- search and replace utility
features:
- Perform recursive searches in directories
- Replace text using regular expressions
- Utilize numbered group references in replacements
- Preview find and replace results without modifying files
- Exclude specific files during the search process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ned

> Like `grep` but with powerful replace capabilities.
> Unlike `sed`, as it isn't restricted to line oriented editing.
> More information: <https://github.com/nevdelap/ned>.

- Recursively search starting in the current directory, ignoring case:

`ned --ignore-case --recursive '{{^[dl]og}}' {{.}}`

- Search always showing colored output:

`ned --colors '{{^[dl]og}}' {{.}}`

- Search never showing colored output:

`ned --colors=never '{{^[dl]og}}' {{.}}`

- Search ignoring certain files:

`ned --recursive --exclude '{{*.htm}}' '{{^[dl]og}}' {{.}}`

- Simple replace:

`ned '{{dog}}' --replace '{{cat}}' {{.}}`

- Replace using numbered group references:

`ned '{{the ([a-z]+) dog and the ([a-z]+) dog}}' --replace '{{the $2 dog and the $1 dog}}' {{.}}`

- Replace changing case:

`ned '{{([a-z]+) dog}}' --case-replacements --replace '{{\U$1\E! dog}}' --stdout {{.}}`

- Preview results of a find and replace without updating the target files:

`ned '{{^[sb]ad}}' --replace '{{happy}}' --stdout {{.}}`
