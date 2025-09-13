---
title: "Concatenate PO Files - Combine Translations | Free DevTools"
name: msgcat
path: "/freedevtools/tldr/common/msgcat"
canonical: "https://hexmos.com/freedevtools/tldr/common/msgcat/"
description: "Combine translations with msgcat, a command-line tool for merging .po files. Easily consolidate language catalogs for software localization. Free online tool, no registration required."
category: common
keywords:
- PO file concatenation
- message catalog merging
- translation file combination
- gettext msgcat
- language localization tools
- .po file merge
- combine translations linux
- concatenate PO files macos
- msgcat command
- combine .po files
features:
- Concatenate multiple .po files into a single file
- Merge translation catalogs efficiently
- Filter and combine translations based on specified criteria
- Set the output encoding for combined translation files
- Output only unique messages from multiple .po files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# msgcat

> Concatenate and merge multiple `.po` translation files.
> Useful in software localization pipelines to combine message catalogs with filtering options.
> More information: <https://www.gnu.org/software/gettext/manual/gettext.html#msgcat-Invocation>.

- Combine multiple `.po` files into one:

`msgcat {{file1.po file2.po ...}} {{[-o|--output-file]}} {{combined.po}}`

- Combine input files listed in a text file:

`msgcat {{[-f|--files-from]}} {{path/to/file_list.txt}} {{[-o|--output-file]}} {{combined.po}}`

- Set the output encoding (e.g. UTF-8):

`msgcat {{[-t|--to-code]}} {{UTF-8}} {{input.po}} {{[-o|--output-file]}} {{output.po}}`

- Output only unique messages (appearing in one file only):

`msgcat {{[-u|--unique]}} {{file1.po file2.po ...}} {{[-o|--output-file]}} {{unique.po}}`

- Use the first available translation for duplicate entries:

`msgcat --use-first {{file1.po file2.po ...}} {{[-o|--output-file]}} {{output.po}}`

- Display help:

`msgcat {{[-h|--help]}}`
