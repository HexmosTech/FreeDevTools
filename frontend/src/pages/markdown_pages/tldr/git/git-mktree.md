---
title: "Create Git Trees - Build Tree Objects | Free DevTools"
name: git-mktree
path: /freedevtools/tldr/git/git-mktree
canonical: "https://hexmos.com/freedevtools/tldr/git/git-mktree/"
description: "Create Git trees with git mktree. Generate tree objects from ls-tree formatted output and manage repository structures. Free online tool, no registration required."
category: common
keywords:
- git tree
- git mktree
- git object
- create git tree
- ls-tree output
- git repository
- git command
- version control
- git data structure
- git index
features:
- Build a Git tree object from ls-tree formatted text
- Allow missing objects during tree creation
- Process NUL-terminated ls-tree output
- Enable batch creation of multiple tree objects
- Sort and build trees from standard input
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git mktree

> Build a tree object using `ls-tree` formatted text.
> More information: <https://git-scm.com/docs/git-mktree>.

- Build a tree object and verify that each tree entry's hash identifies an existing object:

`git mktree`

- Allow missing objects:

`git mktree --missing`

- Read the NUL ([z]ero character) terminated output of the tree object (`ls-tree -z`):

`git mktree -z`

- Allow the creation of multiple tree objects:

`git mktree --batch`

- Sort and build a tree from `stdin` (non-recursive `git ls-tree` output format is required):

`git mktree < {{path/to/tree.txt}}`
