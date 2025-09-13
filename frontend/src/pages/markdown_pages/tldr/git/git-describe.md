---
title: "Git Describe - Generate Names from Git Refs | Free DevTools"
name: git-describe
path: /freedevtools/tldr/git/git-describe
canonical: "https://hexmos.com/freedevtools/tldr/git/git-describe/"
description: "Generate human-readable names from Git references with Git Describe. Identify commits and tags easily within your repository. Free online tool, no registration required."
category: common
keywords:
- git describe
- git reference name
- git annotated tag
- git commit hash
- git abbreviated hash
- git tag reference
- git branch commit
- git commit naming
- git tag description
- git version naming
features:
- Generate names based on the most recent annotated tag.
- Create names with specified abbreviated commit hash lengths.
- Generate names using the tag reference path.
- Describe specific Git tags by name.
- Describe the last commit of a given branch.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git describe

> Give an object a human-readable name based on an available ref.
> More information: <https://git-scm.com/docs/git-describe>.

- Create a unique name for the current commit (the name contains the most recent annotated tag, the number of additional commits, and the abbreviated commit hash):

`git describe`

- Create a name with 4 digits for the abbreviated commit hash:

`git describe --abbrev={{4}}`

- Generate a name with the tag reference path:

`git describe --all`

- Describe a Git tag:

`git describe {{v1.0.0}}`

- Create a name for the last commit of a given branch:

`git describe {{branch_name}}`
