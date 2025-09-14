---
title: "Convert Kanji - Format Text Encodings | Free DevTools"
name: nkf
path: /freedevtools/tldr/common/nkf
canonical: "https://hexmos.com/freedevtools/tldr/common/nkf/"
description: "Convert Kanji encodings with nkf. Reformat text between UTF-8, SHIFT_JIS, and other formats. Free online tool, no registration required."
category: common
keywords:
- kanji converter
- character encoding converter
- text encoding tool
- UTF-8 converter
- SHIFT_JIS converter
- Japanese text encoding
- character set conversion
- nkf command line
- linux text converter
- macos text converter
features:
- Convert text files between different encodings
- Overwrite files with the converted encoding
- Change newline characters (LF/CRLF)
- Decrypt MIME encoded files
- Support for multiple Japanese character encodings
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nkf

> Network kanji filter: convert kanji code from one encoding to another.
> More information: <https://manned.org/nkf>.

- Convert to UTF-8 encoding:

`nkf -w {{path/to/file.txt}}`

- Convert to SHIFT_JIS encoding:

`nkf -s {{path/to/file.txt}}`

- Convert to UTF-8 encoding and overwrite the file:

`nkf -w --overwrite {{path/to/file.txt}}`

- Use LF as the new line code and overwrite (UNIX type):

`nkf -d --overwrite {{path/to/file.txt}}`

- Use CRLF as the new line code and overwrite (windows type):

`nkf -c --overwrite {{path/to/file.txt}}`

- Decrypt mime file and overwrite:

`nkf -m --overwrite {{path/to/file.txt}}`
