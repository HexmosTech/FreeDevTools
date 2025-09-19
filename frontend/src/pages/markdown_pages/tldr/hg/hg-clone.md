---
title: "Hg Clone - Create Repository Copies | Online Free DevTools by Hexmos"
name: hg-clone
path: /freedevtools/tldr/hg/hg-clone
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-clone/"
description: "Create repository copies with Hg Clone. Quickly clone Mercurial repositories locally or from remote sources. Free online tool, no registration required."
category: common
keywords:
- mercurial clone
- hg clone repository
- repository cloning
- mercurial repository
- version control clone
- hg branch clone
- hg revision clone
- hg noupdate clone
- mercurial command
- distributed version control
features:
- Clone a repository to a specified directory
- Clone a repository to a specific branch
- Clone a repository without checking out files
- Clone a repository to a specific revision, tag or branch
- Clone a repository up to a specific revision
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hg clone

> Create a copy of an existing repository in a new directory.
> More information: <https://www.mercurial-scm.org/help/commands/clone>.

- Clone a repository to a specified directory:

`hg clone {{remote_repository_source}} {{destination_path}}`

- Clone a repository to the head of a specific branch, ignoring later commits:

`hg clone {{[-b|--branch]}} {{branch}} {{remote_repository_source}}`

- Clone a repository with only the `.hg` directory, without checking out files:

`hg clone {{[-U|--noupdate]}} {{remote_repository_source}}`

- Clone a repository to a specific revision, tag or branch, keeping the entire history:

`hg clone {{[-u|--updaterev]}} {{revision}} {{remote_repository_source}}`

- Clone a repository up to a specific revision without any newer history:

`hg clone {{[-r|--rev]}} {{revision}} {{remote_repository_source}}`
