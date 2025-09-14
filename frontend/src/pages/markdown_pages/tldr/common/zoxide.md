---
title: "Control Directories - Zoxide Directory Jumper | Free DevTools"
name: zoxide
path: /freedevtools/tldr/common/zoxide
canonical: "https://hexmos.com/freedevtools/tldr/common/zoxide/"
description: "Control directories quickly with Zoxide, a smart directory jumper for command line. Navigate efficiently based on ranking algorithm. Free online tool, no registration required."
category: common
keywords:
- directory jumper
- zoxide navigation
- command line directory
- ranked directory access
- shell directory tool
- terminal directory change
- directory history
- linux directory navigation
- macos directory jumper
- frequent directory access
features:
- Jumps to the best matching directory based on frequency
- Allows interactive directory search with fzf
- Enables adding and ranking directories
- Provides command aliases for quick access
- Facilitates removing directories from the database
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zoxide

> Keep track of the most frequently used directories.
> Uses a ranking algorithm to navigate to the best match.
> More information: <https://github.com/ajeetdsouza/zoxide>.

- Go to the highest-ranked directory that contains "foo" in the name:

`zoxide query {{foo}}`

- Go to the highest-ranked directory that contains "foo" and then "bar":

`zoxide query {{foo}} {{bar}}`

- Start an interactive directory search (requires `fzf`):

`zoxide query --interactive`

- Add a directory or increment its rank:

`zoxide add {{path/to/directory}}`

- Remove a directory from `zoxide`'s database:

`zoxide remove {{path/to/directory}}`

- Generate shell configuration for command aliases (`z`, `zi`):

`zoxide init {{bash|elvish|fish|nushell|posix|powershell|tcsh|xonsh|zsh}}`
