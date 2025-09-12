---
title: "Git Prune - Remove Unreachable Objects | Free DevTools"
name: git-prune
path: /freedevtools/tldr/common/git-prune
canonical: "https://hexmos.com/freedevtools/tldr/common/git-prune/"
description: "Remove unreachable objects with Git Prune. Streamline your Git repository and optimize storage space. Free online tool, no registration required."
category: common
keywords:
- git prune
- git object database
- git garbage collection
- git repository cleanup
- prune unreachable objects
- git command line
- git maintenance
- git storage optimization
- git repository management
- git cli
features:
- Delete unreachable objects from a Git repository.
- Report objects that would be removed without actually deleting them.
- Display verbose output of pruned objects.
- Show progress during the pruning process.
- Streamline Git repository storage space.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git prune

> Git command for pruning all unreachable objects from the object database.
> This command is often not used directly but as an internal command that is used by Git gc.
> More information: <https://git-scm.com/docs/git-prune>.

- Report what would be removed by Git prune without removing it:

`git prune {{[-n|--dry-run]}}`

- Prune unreachable objects and display what has been pruned to `stdout`:

`git prune {{[-v|--verbose]}}`

- Prune unreachable objects while showing progress:

`git prune --progress`
