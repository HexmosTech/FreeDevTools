---
title: "Sed - Edit Text Scriptably | Online Free DevTools by Hexmos"
name: sed
path: /freedevtools/tldr/osx/sed
canonical: "https://hexmos.com/freedevtools/tldr/osx/sed/"
description: "Edit text scriptably with Sed. Streamline text transformations and automate repetitive tasks using command-line scripting. Free online tool, no registration required."
category: osx
keywords:
- text editor scriptable
- stream editor linux
- sed command osx
- sed regex replace
- sed text manipulation
- sed find and replace
- sed pattern matching
- sed text processing
- sed scripting automation
- sed command line text editor
features:
- Perform find and replace operations on text streams
- Execute complex text transformations using regular expressions
- Automate text editing tasks with scripting
- Filter and manipulate text based on specific patterns
- Edit files in-place with backup options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sed

> Edit text in a scriptable manner.
> See also: `awk`, `ed`.
> More information: <https://keith.github.io/xcode-man-pages/sed.1.html>.

- Replace all `apple` (basic `regex`) occurrences with `mango` (basic `regex`) in all input lines and print the result to `stdout`:

`{{command}} | sed 's/apple/mango/g'`

- Execute a specific script [f]ile and print the result to `stdout`:

`{{command}} | sed -f {{path/to/script_file.sed}}`

- Replace all `apple` (extended `regex`) occurrences with `APPLE` (extended `regex`) in all input lines and print the result to `stdout`:

`{{command}} | sed -E 's/(apple)/\U\1/g'`

- Print just a first line to `stdout`:

`{{command}} | sed -n '1p'`

- Replace all `apple` (basic `regex`) occurrences with `mango` (basic `regex`) in a `file` and save a backup of the original to `file.bak`:

`sed -i bak 's/apple/mango/g' {{path/to/file}}`
