---
title: "Manage Finder Favorites - Control Sidebar Items | Online Free DevTools by Hexmos"
name: mysides
path: /freedevtools/tldr/osx/mysides
canonical: "https://hexmos.com/freedevtools/tldr/osx/mysides/"
description: "Manage Finder favorites with mysides. Add, list, and remove sidebar items quickly and easily on macOS. Free online tool, no registration required."
category: osx
keywords:
- finder favorites manager
- macos sidebar editor
- osx finder control
- finder sidebar items
- add finder favorites command line
- remove finder favorites terminal
- macos sidebar customization
- mysides command
- finder shortcuts manager
- osx finder automation
features:
- Add new items to the macOS Finder sidebar
- List existing sidebar favorites from the command line
- Remove items from the macOS Finder sidebar by name
- Add the current directory to the sidebar
- Automate Finder sidebar management tasks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mysides

> Add, list and remove finder favorites.
> More information: <https://github.com/mosen/mysides>.

- List sidebar favorites:

`mysides list`

- Add a new item to the end of the sidebar favorites:

`mysides add {{example}} {{file:///Users/Shared/example}}`

- Remove an item by name:

`mysides remove {{example}}`

- Add the current directory to the sidebar:

`mysides add $(basename $(pwd)) file:///$(pwd)`

- Remove the current directory from the sidebar:

`mysides remove $(basename $(pwd))`
