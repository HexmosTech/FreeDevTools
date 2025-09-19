---
title: "Dolt Merge - Join Development Histories | Online Free DevTools by Hexmos"
name: dolt-merge
path: /freedevtools/tldr/dolt/dolt-merge
canonical: "https://hexmos.com/freedevtools/tldr/dolt/dolt-merge/"
description: "Merge branches with Dolt. Join two development histories together using Dolt merge. Resolve conflicts and manage commit history. Free online tool, no registration required."
category: common
keywords:
- dolt merge tool
- dolt branch merge
- dolt database merge
- dolt version control merge
- dolt data merge
- dolt command line merge
- dolt merge conflicts
- dolt merge squash
- dolt merge no-ff
- dolt merge abort
features:
- Incorporate changes from different branches
- Squash commits during the merge process
- Create merge commits even in fast-forward scenarios
- Resolve conflicts during branch merging
- Abort merge operations in case of issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dolt merge

> Join two or more development histories together.
> More information: <https://docs.dolthub.com/cli-reference/cli#dolt-merge>.

- Incorporate changes from the named commits into the current branch:

`dolt merge {{branch_name}}`

- Incorporate changes from the named commits into the current branch without updating the commit history:

`dolt merge --squash {{branch_name}}`

- Merge a branch and create a merge commit even when the merge resolves as a fast-forward:

`dolt merge --no-ff {{branch_name}}`

- Merge a branch and create a merge commit with a specific commit message:

`dolt merge --no-ff {{[-m|--message]}} "{{message}}" {{branch_name}}`

- Abort the current conflict resolution process:

`dolt merge --abort`
