---
title: "Autojump Directory - Navigate Faster | Free DevTools"
name: autojump
path: /freedevtools/tldr/common/autojump
canonical: "https://hexmos.com/freedevtools/tldr/common/autojump/"
description: "Navigate directories faster with Autojump directory navigation. Quickly jump to frequently used folders and purge old entries. Free online tool, no registration required."
category: common
keywords:
- autojump directory navigation
- command line directory jump
- terminal folder shortcut
- bash directory alias
- zsh directory alias
- fish directory alias
- linux directory navigation
- macos directory jump
- quickly jump directories
- terminal directory management
features:
- Jump to directories by pattern matching
- Jump to subdirectories by pattern matching
- Open directories in the OS file manager
- Purge non-existent directories from the database
- Display entries in the Autojump database
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# autojump

> Quickly jump among the directories you visit the most.
> Aliases like `j` or `jc` are provided for even less typing.
> See also: `bashmarks`.
> More information: <https://github.com/wting/autojump>.

- Add the `autojump` aliases to your shell:

`source /usr/share/autojump/autojump.{{bash|fish|zsh}}`

- Jump to a directory that contains the given pattern:

`j {{pattern}}`

- Jump to a sub-directory (child) of the current directory that contains the given pattern:

`jc {{pattern}}`

- Open a directory that contains the given pattern in the operating system file manager:

`jo {{pattern}}`

- Remove non-existing directories from the `autojump` database:

`j --purge`

- Show the entries in the `autojump` database:

`j {{[-s|--stat]}}`
