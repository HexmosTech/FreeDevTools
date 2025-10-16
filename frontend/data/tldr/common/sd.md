---
title: "Replace Text - Find and Replace with sd | Online Free DevTools by Hexmos"
name: sd
path: "/freedevtools/tldr/common/sd/"
canonical: "https://hexmos.com/freedevtools/tldr/common/sd/"
description: "Replace text efficiently with sd, an intuitive find and replace tool. Perform regex replacements and manipulate text using command line. Free online tool, no registration required."
category: common
keywords:
- text replace
- find and replace
- regex replace
- command line replace
- sed alternative
- string manipulation
- linux text replace
- macos text replace
- file replace
- text editor
features:
- Trim whitespace using regular expressions
- Replace words using capture groups
- Find and replace in specific files
- Find and replace in all files in a project
- Perform replacements via standard input/output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sd

> Intuitive find and replace.
> More information: <https://github.com/chmln/sd>.

- Trim some whitespace using a `regex` (output stream: `stdout`):

`{{echo 'lorem ipsum 23   '}} | sd '\s+$' ''`

- Replace words using capture groups (output stream: `stdout`):

`{{echo 'cargo +nightly watch'}} | sd '(\w+)\s+\+(\w+)\s+(\w+)' 'cmd: $1, channel: $2, subcmd: $3'`

- Find and replace in a specific file (output stream: `stdout`):

`sd {{[-p|--preview]}} {{'window.fetch'}} {{'fetch'}} {{path/to/file.js}}`

- Find and replace in all files in the current project (output stream: `stdout`):

`sd {{'from "react"'}} {{'from "preact"'}} "$(find . -type f)"`
