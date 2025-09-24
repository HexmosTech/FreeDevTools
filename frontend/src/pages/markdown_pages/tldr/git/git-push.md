---
title: "Git Push - Send Commits to Remote Repository | Online Free DevTools by Hexmos"
name: git-push
path: /freedevtools/tldr/git/git-push
canonical: "https://hexmos.com/freedevtools/tldr/git/git-push/"
description: "Push Git commits with Git Push. Transfer changes from local to remote repositories, manage branches, and update remote origins. Free online tool, no registration required."
category: common
keywords:
- git push command
- git remote push
- git push origin
- git branch push
- git push upstream
- git delete remote branch
- git prune remote
- git push all branches
- git push tags
- git repository update
features:
- Push local branch changes to a remote repository
- Set a remote branch as the default push/pull target
- Delete branches in a remote repository
- Update all local branches to their remote counterparts
- Publish tags that are not yet in the remote repository
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git push

> Push commits to a remote repository.
> More information: <https://git-scm.com/docs/git-push>.

- Send local changes in the current branch to its default remote counterpart:

`git push`

- Send changes from a specific local branch to its remote counterpart:

`git push {{remote_name}} {{local_branch}}`

- Send changes from a specific local branch to its remote counterpart, and set the remote one as the default push/pull target of the local one:

`git push {{[-u|--set-upstream]}} {{remote_name}} {{local_branch}}`

- Send changes from a specific local branch to a specific remote branch:

`git push {{remote_name}} {{local_branch}}:{{remote_branch}}`

- Send changes on all local branches to their counterparts in a given remote repository:

`git push --all {{remote_name}}`

- Delete a branch in a remote repository:

`git push {{remote_name}} {{[-d|--delete]}} {{remote_branch}}`

- Remove remote branches that don't have a local counterpart:

`git push --prune {{remote_name}}`

- Publish tags that aren't yet in the remote repository:

`git push --tags`
