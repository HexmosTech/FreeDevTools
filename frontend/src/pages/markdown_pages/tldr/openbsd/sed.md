---
title: "Edit Text with Sed - Scriptable Text Editing | Online Free DevTools by Hexmos"
name: sed
path: /freedevtools/tldr/openbsd/sed
canonical: "https://hexmos.com/freedevtools/tldr/openbsd/sed/"
description: "Edit text effectively with Sed, a powerful scriptable text editing tool. Perform complex text manipulations using regular expressions. Free online tool, no registration required."
category: openbsd
keywords:
  - text editor sed
  - sed command
  - sed regex
  - stream editor
  - sed script
  - find and replace sed
  - sed text manipulation
  - sed linux
  - sed macos
  - sed awk compare
features:
  - Replace text using regular expressions
  - Execute sed scripts from files
  - Perform in-place file editing
  - Use extended regular expressions
  - Print specific lines to stdout
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sed

> Edit text in a scriptable manner.
> See also: `awk`, `ed`.
> More information: <https://man.openbsd.org/sed.1>.

- Replace all `apple` (basic `regex`) occurrences with `mango` (basic `regex`) in all input lines and print the result to `stdout`:

`{{command}} | sed 's/apple/mango/g'`

- Execute a specific script [f]ile and print the result to `stdout`:

`{{command}} | sed -f {{path/to/script.sed}}`

- Delay opening each file until a command containing the related `w` function or flag is applied to a line of input:

`{{command}} | sed -fa {{path/to/script.sed}}`

- Replace all `apple` (extended `regex`) occurrences with `APPLE` (extended `regex`) in all input lines and print the result to `stdout`:

`{{command}} | sed -E 's/(apple)/\U\1/g'`

- Print just a first line to `stdout`:

`{{command}} | sed -n '1p'`

- Replace all `apple` (basic `regex`) occurrences with `mango` (basic `regex`) in a specific file and overwrite the original file in place:

`sed -i 's/apple/mango/g' {{path/to/file}}`
