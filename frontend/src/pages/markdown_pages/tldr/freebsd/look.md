---
title: look
name: look
path: /freedevtools/tldr/freebsd/look
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/look/"
description: Display lines beginning with a prefix in a sorted file.
category: freebsd
keywords:
- search for prefixes in sorted files
- find lines matching a given prefix
- quickly locate entries in a dictionary
- case insensitive prefix searching
- alphanumeric prefix searching
- string termination character specification
- search in the default words file
- display lines beginning with a pattern
- text manipulation and searching
- accessing word lists and dictionaries
features:
- search for lines based on prefix matching
- perform case-insensitive searches
- filter searches to alphanumeric characters only
- customize the string termination character
- search in the system's default dictionary file
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
