---
title: "Hash Identifier - Identify Password Hashes | Free DevTools"
name: hashid
path: /freedevtools/tldr/common/hashid
canonical: "https://hexmos.com/freedevtools/tldr/common/hashid/"
description: "Identify password hashes instantly with Hash Identifier. Discover hash types and formats. Free online tool, no registration required."
category: common
keywords:
- hash identifier
- password hash identifier
- data hash identification
- identify hash type
- crack hash
- hashcat mode
- john format
- linux hash identifier
- macos hash identifier
- common hash identifier
features:
- Identify hash types from stdin
- Identify multiple hashes simultaneously
- Analyze hashes from a file
- Show hashcat's mode number
- Save output to a file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hashid

> Python3 program that identifies data and password hashes.
> More information: <https://github.com/psypanda/hashID>.

- Identify hashes from `stdin` (through typing, copying and pasting, or piping the hash into the program):

`hashid`

- Identify one or more hashes:

`hashid {{hash1 hash2 ...}}`

- Identify hashes on a file (one hash per line):

`hashid {{path/to/hashes.txt}}`

- Show all possible hash types (including salted hashes):

`hashid --extended {{hash}}`

- Show `hashcat`'s mode number and `john`'s format string of the hash types:

`hashid --mode --john {{hash}}`

- Save output to a file instead of printing to `stdout`:

`hashid --outfile {{path/to/output.txt}} {{hash}}`
