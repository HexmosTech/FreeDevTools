---
title: "Git Merge - Merge Branches | Free DevTools"
name: git-merge
path: /freedevtools/tldr/common/git-merge
canonical: "https://hexmos.com/freedevtools/tldr/common/git-merge/"
description: "Merge branches effortlessly with Git Merge. Resolve conflicts, edit merge messages, and control your git history. Free online tool, no registration required."
category: common
keywords:
- git merge branches
- git branch merge
- merge git repository
- git merge conflicts
- git merge command line
- git merge abort
- git merge strategy
- git merge no ff
- git merge edit message
- git version control merge
features:
- Merge a specified branch into the current branch
- Edit the merge message before committing
- Create a merge commit even when a fast-forward is possible
- Abort an ongoing merge operation in case of conflicts
- Merge using specific strategies and options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git merge

> Merge branches.
> More information: <https://git-scm.com/docs/git-merge>.

- Merge a branch into your current branch:

`git merge {{branch_name}}`

- Edit the merge message:

`git merge {{[-e|--edit]}} {{branch_name}}`

- Merge a branch and create a merge commit:

`git merge --no-ff {{branch_name}}`

- Abort a merge in case of conflicts:

`git merge --abort`

- Merge using a specific strategy:

`git merge {{[-s|--strategy]}} {{strategy}} {{[-X|--strategy-option]}} {{strategy_option}} {{branch_name}}`
