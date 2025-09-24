---
title: "Create Git Reverts - Undo Changes | Online Free DevTools by Hexmos"
name: git-revert
path: /freedevtools/tldr/git/git-revert
canonical: "https://hexmos.com/freedevtools/tldr/git/git-revert/"
description: "Create Git reverts with git-revert to undo changes in your repository. Easily reverse commits and manage your project history. Free online tool, no registration required."
category: common
keywords:
- git revert
- git undo changes
- git history manipulation
- git commit reversal
- git commit history
- git revert command
- version control revert
- revert last commit
- revert multiple commits
- git revert specific commit
features:
- Revert specific commits in Git history
- Undo the effects of previous commits
- Create new commits to reverse changes
- Handle merge conflicts during reverts
- Revert a range of commits in Git
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git revert

> Create new commits which reverse the effect of earlier ones.
> More information: <https://git-scm.com/docs/git-revert>.

- Revert the most recent commit:

`git revert {{HEAD}}`

- Revert the 5th last commit:

`git revert HEAD~{{4}}`

- Revert a specific commit:

`git revert {{0c01a9}}`

- Revert multiple commits:

`git revert {{branch_name~5..branch_name~2}}`

- Don't create new commits, just change the working tree:

`git revert {{[-n|--no-commit]}} {{0c01a9..9a1743}}`

- Cancel a Git revert after a merge conflict:

`git revert --abort`
