---
title: "Cut Text - Extract Fields with Tuc | Online Free DevTools by Hexmos"
name: tuc
path: /freedevtools/tldr/common/tuc
canonical: "https://hexmos.com/freedevtools/tldr/common/tuc/"
description: "Extract text fields quickly with Tuc. A more powerful text cutter with flexible delimiters and field selection. Free online tool, no registration required."
category: common
keywords:
- text cutter
- field extractor
- delimited text
- cut text fields
- linux tuc
- macos tuc
- command line text processing
- regex text cut
- tuc command
- tuc text delimiter
features:
- Extract specific fields based on delimiter
- Rearrange extracted fields in custom order
- Replace delimiters with alternative characters
- Use regular expressions to define delimiters
- Output extracted fields in JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tuc

> Cut text (or bytes) where a delimiter matches, then keep the desired parts.
> A more user-friendly and powerful version of `cut` with sensible defaults.
> More information: <https://github.com/riquito/tuc>.

- Cut and rearrange fields:

`echo "foo bar baz" | tuc {{[-d|--delimiter]}} '{{ }}' {{[-f|--fields]}} {{3,2,1}}`

- Replace the delimiter `space` with an arrow:

`echo "foo bar baz" | tuc {{[-d|--delimiter]}} ' ' {{[-r|--replace-delimiter]}} ' ➡ '`

- Keep a range of fields:

`echo "foo bar    baz" | tuc {{[-d|--delimiter]}} ' ' {{[-f|--fields]}} {{2:}}`

- Cut using `regex`:

`echo "a,b, c" | tuc {{[-e|--regex]}} '{{[, ]+}}' {{[-f|--fields]}} {{1,3}}`

- Emit JSON output:

`echo "foo bar baz" | tuc {{[-d|--delimiter]}} '{{ }}' --json`
