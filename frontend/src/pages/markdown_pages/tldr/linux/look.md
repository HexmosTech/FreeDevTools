---
title: "Look - Display Sorted File Lines | Free DevTools"
name: look
path: /freedevtools/tldr/linux/look
canonical: "https://hexmos.com/freedevtools/tldr/linux/look/"
description: "Display sorted file lines with Look. Quickly find lines beginning with a specific prefix in a file. Free online tool, no registration required."
category: linux
keywords:
  - sorted file search
  - prefix search
  - command line look
  - linux look command
  - text search tool
  - file content filtering
  - sorted data lookup
  - pattern matching
  - string termination
  - dictionary search
features:
  - Search sorted files for lines beginning with a prefix
  - Perform case-insensitive searches
  - Ignore non-alphanumeric characters during search
  - Specify custom string termination characters
  - Search default dictionary files like `/usr/share/dict/words`
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# look

> Display lines beginning with a prefix in a file.
> Note: The lines in the file must be sorted.
> See also: `grep`, `sort`.
> More information: <https://manned.org/look>.

- Search for lines beginning with a specific prefix in a specific file:

`look {{prefix}} {{path/to/file}}`

- Case-insensitively search only on blank and alphanumeric characters:

`look {{[-f|--ignore-case]}} {{[-d|--alphanum]}} {{prefix}} {{path/to/file}}`

- Specify a string termination character (space by default):

`look {{[-t|--terminate]}} {{,}}`

- Search in `/usr/share/dict/words` (`--ignore-case` and `--alphanum` are assumed):

`look {{prefix}}`

- Search in `/usr/share/dict/web2` (`--ignore-case` and `--alphanum` are assumed):

`look {{[-a|--alternative]}} {{prefix}}`
