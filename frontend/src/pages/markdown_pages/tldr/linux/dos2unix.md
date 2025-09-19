---
title: "Format Line Endings - dos2unix Converter | Online Free DevTools by Hexmos"
name: dos2unix
path: /freedevtools/tldr/linux/dos2unix
canonical: "https://hexmos.com/freedevtools/tldr/linux/dos2unix/"
description: "Format line endings with dos2unix, converting DOS to Unix style.  Easily manage CRLF and LF characters in your files. Free online tool, no registration required."
category: linux
keywords:
  - dos to unix converter
  - unix line endings converter
  - file format converter
  - dos2unix command
  - text file converter
  - line ending converter
  - CRLF to LF converter
  - file encoding converter
  - windows to unix conversion
  - linux file conversion
features:
  - Converts DOS (CRLF) line endings to Unix (LF) line endings.
  - Creates a new file with converted line endings, leaving the original untouched.
  - Provides informative output about file line endings.
  - Allows manipulation of Byte Order Marks (BOM).
  - Supports batch processing of multiple files (not explicitly stated, but implied).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dos2unix

> Change DOS-style line endings to Unix-style.
> Replaces CRLF with LF.
> See also: `unix2dos`, `unix2mac`, `mac2unix`.
> More information: <https://manned.org/dos2unix>.

- Change the line endings of a file:

`dos2unix {{path/to/file}}`

- Create a copy with Unix-style line endings:

`dos2unix {{[-n|--newfile]}} {{path/to/file}} {{path/to/new_file}}`

- Display file information:

`dos2unix {{[-i|--info]}} {{path/to/file}}`

- Keep/add/remove Byte Order Mark:

`dos2unix --{{keep-bom|add-bom|remove-bom}} {{path/to/file}}`
