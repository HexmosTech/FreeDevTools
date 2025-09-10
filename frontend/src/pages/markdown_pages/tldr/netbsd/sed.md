---
title: sed
name: sed
path: /freedevtools/tldr/netbsd/sed
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/sed/"
description: Edit text in a scriptable manner.
category: netbsd
keywords:
- stream editor for text manipulation
- text substitution using regular expressions
- batch editing of text files
- command line text processing
- scripted text transformations
- pattern matching and replacement
- in-place file modification
- global search and replace
- advanced text editing utilities
- text processing automation tool
features:
- perform text substitution with regular expressions
- execute scripts for complex text transformations
- delay file opening for optimized processing
- use GNU regex extensions for advanced pattern matching
- modify files in place without creating temporary copies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sed

> Edit text in a scriptable manner.
> See also: `awk`, `ed`.
> More information: <https://man.netbsd.org/sed.1>.

- Replace all `apple` (basic `regex`) occurrences with `mango` (basic `regex`) in all input lines and print the result to `stdout`:

`{{command}} | sed 's/apple/mango/g'`

- Execute a specific script [f]ile and print the result to `stdout`:

`{{command}} | sed -f {{path/to/script.sed}}`

- Delay opening each file until a command containing the related `w` function or flag is applied to a line of input:

`{{command}} | sed -fa {{path/to/script.sed}}`

- Turn on GNU re[g]ex extension:

`{{command}} | sed -fg {{path/to/script.sed}}`

- Replace all `apple` (extended `regex`) occurrences with `APPLE` (extended `regex`) in all input lines and print the result to `stdout`:

`{{command}} | sed -E 's/(apple)/\U\1/g'`

- Print just a first line to `stdout`:

`{{command}} | sed -n '1p'`

- Replace all `apple` (basic `regex`) occurrences with `mango` (basic `regex`) in a specific file and overwrite the original file in place:

`sed -i 's/apple/mango/g' {{path/to/file}}`
