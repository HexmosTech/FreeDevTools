---
title: "Look - Search Sorted File Lines | Free DevTools"
name: look
path: /freedevtools/tldr/common/look
canonical: "https://hexmos.com/freedevtools/tldr/common/look/"
description: "Search sorted file lines with Look, quickly finding lines beginning with a prefix in a sorted file. Free online tool, no registration required."
category: common
keywords:
- sorted file search
- line prefix lookup
- file content filtering
- command line search
- text pattern matching
- openbsd look command
- linux look command
- macos look command
- case-insensitive search
- alphanumeric search
features:
- Search for lines beginning with a given prefix
- Perform case-insensitive searches
- Search only on alphanumeric characters
- Specify a string termination character
- Search the system dictionary file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# look

> Display lines beginning with a prefix in a sorted file.
> Note: The lines in the file must be sorted.
> See also: `grep`, `sort`.
> More information: <https://man.openbsd.org/look>.

- Search for lines beginning with a specific prefix in a specific file:

`look {{prefix}} {{path/to/file}}`

- Case-insensitively search only on alphanumeric characters:

`look {{[-f|--ignore-case]}} {{[-d|--alphanum]}} {{prefix}} {{path/to/file}}`

- Specify a string termination character (space by default):

`look {{[-t|--terminate]}} {{,}}`

- Search in `/usr/share/dict/words` (`--alphanum` and `--ignore-case` are assumed):

`look {{prefix}}`
