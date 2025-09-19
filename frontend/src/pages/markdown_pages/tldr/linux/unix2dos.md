---
title: "Unix2dos - Convert Line Endings to DOS | Online Free DevTools by Hexmos"
name: unix2dos
path: "/freedevtools/tldr/linux/unix2dos"
canonical: "https://hexmos.com/freedevtools/tldr/linux/unix2dos/"
description: "Convert line endings to DOS format with Unix2dos. Easily change LF to CRLF on Linux files. Free online tool, no registration required."
category: linux
keywords:
- "line ending converter"
- "unix to dos converter"
- "lf to crlf converter"
- "linux file converter"
- "dos file format"
- "unix2dos linux"
- "text file converter"
- "batch file conversion"
- "line ending formatting"
- "unix text processing"
features:
- "Convert Unix line endings to DOS line endings"
- "Create new files with DOS-style line endings"
- "Display file information about line endings"
- "Manage Byte Order Mark (BOM) presence"
- "Process multiple files in batch"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# unix2dos

> Change Unix-style line endings to DOS-style.
> Replaces LF with CRLF.
> See also: `unix2mac`, `dos2unix`, `mac2unix`.
> More information: <https://manned.org/unix2dos>.

- Change the line endings of a file:

`unix2dos {{path/to/file}}`

- Create a copy with DOS-style line endings:

`unix2dos {{[-n|--newfile]}} {{path/to/file}} {{path/to/new_file}}`

- Display file information:

`unix2dos {{[-i|--info]}} {{path/to/file}}`

- Keep/add/remove Byte Order Mark:

`unix2dos --{{keep-bom|add-bom|remove-bom}} {{path/to/file}}`
