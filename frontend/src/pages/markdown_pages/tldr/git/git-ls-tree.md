---
title: "Git List Tree - List Tree Contents | Free DevTools"
name: git-ls-tree
path: /freedevtools/tldr/common/git-ls-tree
canonical: "https://hexmos.com/freedevtools/tldr/common/git-ls-tree/"
description: "List tree contents with Git ls-tree. Inspect file structures and commit history using Git commands. Free online tool, no registration required."
category: common
keywords:
- git list tree
- git ls-tree command
- git tree contents
- git commit history
- git file structure
- git tree object
- git directory listing
- git repository files
- linux git
- macos git
features:
- List contents of a specific branch
- Recurse into subtrees of a commit
- List only the filenames of a tree
- Print filenames in a tree structure
- Inspect file structures using Git
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git ls-tree

> List the contents of a tree object.
> More information: <https://git-scm.com/docs/git-ls-tree>.

- List the contents of the tree on a branch:

`git ls-tree {{branch_name}}`

- List the contents of the tree on a commit, recursing into subtrees:

`git ls-tree -r {{commit_hash}}`

- List only the filenames of the tree on a commit:

`git ls-tree --name-only {{commit_hash}}`

- Print the filenames of the current branch head in a tree structure (Note: `tree --fromfile` is not supported on Windows):

`git ls-tree -r --name-only HEAD | tree --fromfile`
