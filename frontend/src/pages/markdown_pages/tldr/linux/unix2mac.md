---
title: "Convert Line Endings with Unix2Mac - Linux Command | Online Free DevTools by Hexmos"
name: unix2mac
path: /freedevtools/tldr/linux/unix2mac
canonical: "https://hexmos.com/freedevtools/tldr/linux/unix2mac/"
description: "Convert Unix line endings to macOS format with Unix2Mac.  Change LF to CR line feeds for file compatibility. This free online tool provides a command reference and examples. No registration required."
category: linux
keywords:
  - unix line ending conversion
  - unix to mac file conversion
  - lf to cr conversion linux
  - linux file line ending converter
  - unix2mac command line tool
  - cross-platform line ending converter
  - text file format conversion linux
  - linux text file line ending fix
  - mac line ending converter linux
  - convert unix text to mac linux
features:
  - Convert Unix line endings (LF) to macOS line endings (CR).
  - Create a new file with converted macOS line endings.
  - Display detailed file information, including line ending type.
  - Manage Byte Order Marks (BOM): keep, add, or remove.
  - Modify line endings in place, without creating a new file.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
