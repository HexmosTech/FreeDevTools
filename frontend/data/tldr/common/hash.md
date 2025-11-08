---
title: "Hash Command - View Executable Locations | Online Free DevTools by Hexmos"
name: hash
path: "/freedevtools/tldr/common/hash/"
canonical: "https://hexmos.com/freedevtools/tldr/common/hash/"
description: "View executable locations with Hash Command. Manage cached command paths and optimize shell performance. Free online tool, no registration required."
category: common
keywords:
- hash command
- bash hash
- shell hash table
- executable location
- command lookup
- linux command hash
- macos command hash
- unix hash
- cached command path
- bash shell builtin
features:
- Display cached command locations
- Clear the hash table
- Delete specific commands from the hash table
- Print the full path of a command
- Provide help documentation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hash

> View cached executable locations.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-hash>.

- View cached command locations for the current shell:

`hash`

- Clear the hash table:

`hash -r`

- Delete a specific command from the hash table:

`hash -d {{command}}`

- Print the full path of `command`:

`hash -t {{command}}`

- Display help:

`hash --help`
