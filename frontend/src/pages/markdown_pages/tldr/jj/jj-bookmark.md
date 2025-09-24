---
title: "Create jj Bookmarks - Manage Repository Bookmarks | Online Free DevTools by Hexmos"
name: jj-bookmark
path: /freedevtools/tldr/jj/jj-bookmark
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-bookmark/"
description: "Create bookmarks with jj for effective repository management. Track, move, and delete bookmarks in your jj repositories. Free online tool, no registration required."
category: common
keywords:
- jj bookmark creation
- jj repository management
- jj bookmark tracking
- jj bookmark deletion
- jj version control bookmark
- jj command-line bookmarks
- jj git branch bookmark
- jj remote bookmark management
- jj revision bookmark
- jj bookmark list
features:
- Create a new bookmark at a specified revision
- List all existing bookmarks and their targets
- Move an existing bookmark to a different revision
- Track remote bookmarks from specified remotes
- Delete bookmarks and propagate deletion to remotes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj bookmark

> Manage bookmarks in a `jj` repository.
> When using a Git backend, bookmarks correspond to Git branches.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-bookmark>.

- Create a new bookmark at the given revision:

`jj {{[b|bookmark]}} {{[c|create]}} {{[-r|--revision]}} {{revision}} {{name}}`

- List all existing bookmarks and their targets:

`jj {{[b|bookmark]}} {{[l|list]}}`

- Move an existing bookmark to another revision:

`jj {{[b|bookmark]}} {{[m|move]}} {{[-t|--to]}} {{revision}} {{name}}`

- Track given remote bookmarks:

`jj {{[b|bookmark]}} {{[t|track]}} {{name}}@{{remote}}`

- Delete a bookmark, and propagate the deletion to remotes on the next push:

`jj {{[b|bookmark]}} {{[d|delete]}} {{name}}`

- Forget a bookmark locally, without marking its deletion to be pushed:

`jj {{[b|bookmark]}} {{[f|forget]}} {{name}}`
