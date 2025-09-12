---
title: "Sed Stream Editor - Edit Text with Scripting | Free DevTools"
name: sed
path: /freedevtools/tldr/common/sed
canonical: "https://hexmos.com/freedevtools/tldr/common/sed/"
description: "Edit text streams powerfully with the Sed stream editor.  Perform complex text manipulations using regular expressions. Free online tool, no registration required."
category: common
keywords:
  - text stream editor
  - sed command
  - linux sed
  - unix sed
  - regex text editor
  - script based text editing
  - command line text processing
  - sed scripting examples
  - powerful text manipulation
  - text file processing
features:
  - Perform in-place or streamed text substitution
  - Use regular expressions for pattern matching
  - Execute complex text transformations using scripts
  - Efficiently process large text files
  - Automate repetitive text editing tasks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sed

> Edit text in a scriptable manner.
> See also: `awk`, `ed`.
> More information: <https://manned.org/sed.1posix>.

- Replace all `apple` (basic `regex`) occurrences with `mango` (basic `regex`) in all input lines and print the result to `stdout`:

`{{command}} | sed 's/apple/mango/g'`

- Execute a specific script [f]ile and print the result to `stdout`:

`{{command}} | sed -f {{path/to/script.sed}}`

- Print just a first line to `stdout`:

`{{command}} | sed -n '1p'`
