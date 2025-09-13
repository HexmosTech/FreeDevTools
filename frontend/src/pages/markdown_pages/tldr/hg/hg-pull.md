---
title: "Hg Pull - Retrieve Remote Repository Changes | Free DevTools"
name: hg-pull
path: /freedevtools/tldr/common/hg-pull
canonical: "https://hexmos.com/freedevtools/tldr/common/hg-pull/"
description: "Retrieve Mercurial repository changes with Hg Pull. Sync your local repository with remote branches and revisions. Free online tool, no registration required."
category: common
keywords:
- mercurial pull
- hg pull command
- pull mercurial repository
- mercurial sync
- hg update
- hg branch
- hg revision
- version control
- distributed version control
- mercurial command line
features:
- Pull changes from the default remote repository.
- Specify a custom source repository for pulling.
- Update the local repository to the latest remote head.
- Force pulling changes from unrelated repositories.
- Pull changes up to a specific revision changeset.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hg pull

> Pull changes from a specified repository to the local repository.
> More information: <https://www.mercurial-scm.org/help/commands/pull>.

- Pull from the "default" source path:

`hg pull`

- Pull from a specified source repository:

`hg pull {{path/to/source_repository}}`

- Update the local repository to the head of the remote:

`hg pull {{[-u|--update]}}`

- Pull changes even when the remote repository is unrelated:

`hg pull {{[-f|--force]}}`

- Specify a specific revision changeset to pull up to:

`hg pull {{[-r|--rev]}} {{revision}}`

- Specify a specific branch to pull:

`hg pull {{[-b|--branch]}} {{branch}}`

- Specify a specific bookmark to pull:

`hg pull {{[-B|--bookmark]}} {{bookmark}}`
