---
title: "Mac2unix - Format Line Endings | Online Free DevTools by Hexmos"
name: mac2unix
path: /freedevtools/tldr/linux/mac2unix
canonical: "https://hexmos.com/freedevtools/tldr/linux/mac2unix/"
description: "Format line endings with mac2unix. Convert macOS-style line endings to Unix format quickly. Free online tool, no registration required, supports file conversions."
category: linux
keywords:
- mac2unix line ending conversion
- macOS to Unix converter
- CR to LF conversion linux
- line ending formatter
- file format conversion linux
- unix2dos alternative
- unix2mac alternative
- dos2unix alternative
- byte order mark control
- command line file converter
features:
- Convert macOS line endings to Unix format
- Create a new file with Unix-style line endings
- Display information about line endings in a file
- Keep, add, or remove Byte Order Mark from files
- Supports command-line batch processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mac2unix

> Change macOS-style line endings to Unix-style.
> Replaces CR with LF.
> See also: `unix2dos`, `unix2mac`, `dos2unix`.
> More information: <https://manned.org/mac2unix>.

- Change the line endings of a file:

`mac2unix {{path/to/file}}`

- Create a copy with Unix-style line endings:

`mac2unix {{[-n|--newfile]}} {{path/to/file}} {{path/to/new_file}}`

- Display file information:

`mac2unix {{[-i|--info]}} {{path/to/file}}`

- Keep/add/remove Byte Order Mark:

`mac2unix --{{keep-bom|add-bom|remove-bom}} {{path/to/file}}`
