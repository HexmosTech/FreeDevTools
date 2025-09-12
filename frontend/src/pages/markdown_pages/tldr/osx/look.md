---
title: "Look - Display Lines in Sorted File | Free DevTools"
name: look
path: /freedevtools/tldr/unknown/look
canonical: "https://hexmos.com/freedevtools/tldr/unknown/look/"
description: "Display lines with Look in a sorted file. Find lines beginning with a specific prefix in a file. Free online tool, no registration required."
category: unknown
keywords:
- sorted file search
- file line prefix
- look command
- command line file search
- text file filtering
- linux look command
- macos look command
- file content viewer
- prefix based search
- dictionary word search
features:
- Search for lines beginning with a specific prefix
- Perform case-insensitive searches
- Search only on alphanumeric characters
- Specify a custom string termination character
- Search in the system's dictionary file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# look

> Display lines beginning with a prefix in a sorted file.
> See also: `grep`, `sort`.
> More information: <https://keith.github.io/xcode-man-pages/look.1.html>.

- Search for lines beginning with a specific prefix in a specific file:

`look {{prefix}} {{path/to/file}}`

- Case-insensitively search only on alphanumeric characters:

`look {{[-f|--ignore-case]}} {{[-d|--alphanum]}} {{prefix}} {{path/to/file}}`

- Specify a string termination character (space by default):

`look {{[-t|--terminate]}} {{,}}`

- Search in `/usr/share/dict/words` (`--ignore-case` and `--alphanum` are assumed):

`look {{prefix}}`
