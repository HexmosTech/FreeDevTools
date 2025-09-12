---
title: "Git Bundle - Package Git Objects into Archives | Free DevTools"
name: git-bundle
path: /freedevtools/tldr/common/git-bundle
canonical: "https://hexmos.com/freedevtools/tldr/common/git-bundle/"
description: "Package Git objects into archives with Git Bundle. Create, verify, and unbundle Git repositories for offline transfer and backup. Free online tool, no registration required."
category: common
keywords:
- git bundle create
- git bundle verify
- git bundle unbundle
- git repository archive
- git offline transfer
- git backup bundle
- git bundle command
- git bundle management
- git bundle branch
- git clone from bundle
features:
- Package Git objects and references into a single file
- Verify the integrity of a Git bundle file
- Extract references from a Git bundle
- Clone a new repository from a Git bundle file
- Transfer Git repositories offline without a network connection
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git bundle

> Package objects and references into an archive.
> More information: <https://git-scm.com/docs/git-bundle>.

- Create a bundle file that contains all objects and references of a specific branch:

`git bundle create {{path/to/file.bundle}} {{branch_name}}`

- Create a bundle file of all branches:

`git bundle create {{path/to/file.bundle}} --all`

- Create a bundle file of the last 5 commits of the current branch:

`git bundle create {{path/to/file.bundle}} -5 {{HEAD}}`

- Create a bundle file of the latest 7 days:

`git bundle create {{path/to/file.bundle}} --since 7.days {{HEAD}}`

- Verify that a bundle file is valid and can be applied to the current repository:

`git bundle verify {{path/to/file.bundle}}`

- Print to `stdout` the list of references contained in a bundle:

`git bundle unbundle {{path/to/file.bundle}}`

- Unbundle a specific branch from a bundle file into the current repository:

`git pull {{path/to/file.bundle}} {{branch_name}}`

- Create a new repository from a bundle:

`git clone {{path/to/file.bundle}}`
