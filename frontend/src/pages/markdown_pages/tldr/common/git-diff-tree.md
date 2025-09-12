---
title: "Diff Tree - Compare Git Trees | Free DevTools"
name: git-diff-tree
path: /freedevtools/tldr/common/git-diff-tree
canonical: "https://hexmos.com/freedevtools/tldr/common/git-diff-tree/"
description: "Compare Git trees with Diff Tree, identify changes between commits and explore modifications in your repository. Free online tool, no registration required."
category: common
keywords:
- git diff tree
- git compare trees
- git commit differences
- git tree changes
- git diff patch
- git file differences
- git directory differences
- linux git diff tree
- macos git diff tree
- version control diff
features:
- Compare two git tree objects to identify changes.
- Display changes between two specific commits.
- Show the differences in patch format.
- Filter changes based on a specific file or directory.
- Examine content and mode differences between blobs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git diff-tree

> Compares the content and mode of blobs found via two tree objects.
> More information: <https://git-scm.com/docs/git-diff-tree>.

- Compare two tree objects:

`git diff-tree {{tree-ish1}} {{tree-ish2}}`

- Show changes between two specific commits:

`git diff-tree -r {{commit1}} {{commit2}}`

- Display changes in patch format:

`git diff-tree {{[-p|--patch]}} {{tree-ish1}} {{tree-ish2}}`

- Filter changes by a specific path:

`git diff-tree {{tree-ish1}} {{tree-ish2}} -- {{path/to/file_or_directory}}`
