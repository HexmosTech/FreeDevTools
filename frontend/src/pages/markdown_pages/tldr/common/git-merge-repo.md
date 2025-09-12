---
title: "Merge Git Repository - Combine Histories | Free DevTools"
name: git-merge-repo
path: /freedevtools/tldr/common/git-merge-repo
canonical: "https://hexmos.com/freedevtools/tldr/common/git-merge-repo/"
description: "Merge Git repository histories with git-merge-repo. Integrate branches and manage repositories. Free online tool, no registration required."
category: common
keywords:
- git merge repository
- git history merge
- git branch integration
- git combine repositories
- git merge tool
- git repository management
- git merge-repo command
- git extras merge
- git version control
- linux git merge
features:
- Merge repository branches into a directory.
- Integrate remote repository branches.
- Combine histories from multiple repositories.
- Merge branches without preserving full history.
- Streamline repository integration workflows.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git merge-repo

> Merge two repository histories.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-merge-repo>.

- Merge a repository's branch into the current repository's directory:

`git merge-repo {{path/to/repo}} {{branch_name}} {{path/to/directory}}`

- Merge a remote repository's branch into the current repository's directory, not preserving history:

`git merge-repo {{path/to/remote_repo}} {{branch_name}} .`
