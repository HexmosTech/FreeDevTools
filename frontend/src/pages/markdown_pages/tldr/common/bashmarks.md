---
title: "Bashmarks - Manage Directories with Single Character Commands | Online Free DevTools by Hexmos"
name: bashmarks
path: /freedevtools/tldr/common/bashmarks
canonical: "https://hexmos.com/freedevtools/tldr/common/bashmarks/"
description: "Manage directories efficiently with Bashmarks. Quickly save and jump to common locations using one-character commands in your terminal. Free online tool, no registration required."
category: common
keywords:
- bash directory manager
- command line bookmarks
- shell navigation tool
- quick directory access
- bash alias manager
- linux directory shortcuts
- terminal bookmark tool
- command line directory navigation
- bashmarks command
- directory jump command
features:
- Save frequently used directories
- Jump to bookmarked directories with a single command
- List available directory bookmarks
- Delete existing directory bookmarks
- Print the contents of a bookmarked directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bashmarks

> Save and jump to commonly used directories using 1 character commands.
> See also: `autojump`.
> More information: <https://github.com/huyng/bashmarks>.

- Add the bashmark aliases to your shell:

`source /usr/share/bashmarks/bashmarks.sh`

- List available bookmarks:

`l`

- Save the current directory as "bookmark_name":

`s {{bookmark_name}}`

- Go to a bookmarked directory:

`g {{bookmark_name}}`

- Print a bookmarked directory's contents:

`p {{bookmark_name}}`

- Delete a bookmark:

`d {{bookmark_name}}`
