---
title: "Look Command - Find Text Prefixes | Free DevTools"
name: look
path: /freedevtools/tldr/freebsd/look
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/look/"
description: "Find text prefixes quickly with Look Command. Display matching lines in sorted files effortlessly. Free online tool, no registration required."
category: freebsd
keywords:
- text prefix search
- sorted file lookup
- fast dictionary search
- case insensitive search
- alphanumeric text search
- string termination character
- default words file search
- pattern matching in text
- text manipulation command
- freebsd dictionary access
features:
- search lines by prefix matching
- perform case-insensitive prefix search
- filter alphanumeric prefix matches
- customize the termination character
- search default dictionary
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# look

> Display lines beginning with a prefix in a sorted file.
> See also: `grep`, `sort`.
> More information: <https://man.freebsd.org/cgi/man.cgi?look>.

- Search for lines beginning with a specific prefix in a specific file:

`look {{prefix}} {{path/to/file}}`

- Case-insensitively search only on alphanumeric characters:

`look {{[-f|--ignore-case]}} {{[-d|--alphanum]}} {{prefix}} {{path/to/file}}`

- Specify a string termination character (space by default):

`look {{[-t|--terminate]}} {{,}}`

- Search in `/usr/share/dict/words` (`--ignore-case` and `--alphanum` are assumed):

`look {{prefix}}`
