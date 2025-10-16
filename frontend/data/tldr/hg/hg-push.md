---
title: "HG Push - Send Mercurial Changesets | Online Free DevTools by Hexmos"
name: hg-push
path: "/freedevtools/tldr/hg/hg-push/"
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-push/"
description: "Push Mercurial changesets with HG Push. Transfer local commits to a remote repository, manage branches, and update bookmarks using command-line options. Free online tool, no registration required."
category: common
keywords:
- mercurial push
- hg push command
- mercurial changeset
- push remote repository
- mercurial branch push
- mercurial bookmark push
- version control system
- distributed revision control
- hg command line
- hgscm
features:
- Push changes to a remote Mercurial repository
- Create new branches on the remote repository
- Specify a revision to push
- Push a specific branch
- Push a specific bookmark
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hg push

> Push changes from the local repository to a specified destination.
> More information: <https://www.mercurial-scm.org/help/commands/push>.

- Push changes to the "default" remote path:

`hg push`

- Push changes to a specified remote repository:

`hg push {{path/to/destination_repository}}`

- Push a new branch if it does not exist (disabled by default):

`hg push --new-branch`

- Specify a specific revision changeset to push:

`hg push {{[-r|--rev]}} {{revision}}`

- Specify a specific branch to push:

`hg push {{[-b|--branch]}} {{branch}}`

- Specify a specific bookmark to push:

`hg push {{[-B|--bookmark]}} {{bookmark}}`
