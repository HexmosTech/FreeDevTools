---
title: "Cherry-Pick Git - Apply Commit Changes | Online Free DevTools by Hexmos"
name: git-cherry-pick
path: /freedevtools/tldr/git/git-cherry-pick
canonical: "https://hexmos.com/freedevtools/tldr/git/git-cherry-pick/"
description: "Apply git commit changes with Git Cherry-Pick. Easily integrate specific commits into current branch for focused updates. Free online tool, no registration required."
category: common
keywords:
- git cherry-pick
- cherry-pick commit
- git apply commit
- git commit patch
- git specific commit
- git merge commit
- git commit changes
- command line cherry-pick
- git cherry-pick range
- git cherry-pick multiple
features:
- Apply single commits to the current branch
- Apply a range of commits
- Apply multiple non-sequential commits
- Integrate commit changes without creating a new commit
- Selectively merge changes from other branches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git cherry-pick

> Apply the changes introduced by existing commits to the current branch.
> To apply changes to another branch, first use `git checkout` to switch to the desired branch.
> More information: <https://git-scm.com/docs/git-cherry-pick>.

- Apply a commit to the current branch:

`git cherry-pick {{commit}}`

- Apply a range of commits to the current branch (see also: `git rebase --onto`):

`git cherry-pick {{start_commit}}~..{{end_commit}}`

- Apply multiple (non-sequential) commits to the current branch:

`git cherry-pick {{commit1 commit2 ...}}`

- Add the changes of a commit to the working directory, without creating a commit:

`git cherry-pick {{[-n|--no-commit]}} {{commit}}`
