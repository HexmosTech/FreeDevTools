---
title: "Convert Line Endings - Unix2Mac Tool | Online Free DevTools by Hexmos"
name: unix2mac
path: /freedevtools/tldr/linux/unix2mac
canonical: "https://hexmos.com/freedevtools/tldr/linux/unix2mac/"
description: "Convert line endings with Unix2Mac. Change Unix-style line feeds to macOS carriage returns for file compatibility. Free online tool, no registration required."
category: linux
keywords:
- macOS line ending conversion
- Unix to Mac file converter
- LF to CR conversion
- Linux file conversion tool
- Unix2Mac command line utility
- Cross-platform line ending tool
- File format conversion tool
- Text file line ending fix
- Mac line ending converter
- Convert Unix text to Mac
features:
- Convert Unix line endings to macOS format
- Create a new file with macOS line endings
- Display file information regarding line endings
- Keep, add, or remove Byte Order Mark (BOM)
- Modify line endings in place
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# unix2mac

> Change Unix-style line endings to macOS-style.
> Replaces LF with CR.
> See also: `unix2dos`, `dos2unix`, `mac2unix`.
> More information: <https://manned.org/unix2mac>.

- Change the line endings of a file:

`unix2mac {{path/to/file}}`

- Create a copy with macOS-style line endings:

`unix2mac {{[-n|--newfile]}} {{path/to/file}} {{path/to/new_file}}`

- Display file information:

`unix2mac {{[-i|--info]}} {{path/to/file}}`

- Keep/add/remove Byte Order Mark:

`unix2mac --{{keep-bom|add-bom|remove-bom}} {{path/to/file}}`
