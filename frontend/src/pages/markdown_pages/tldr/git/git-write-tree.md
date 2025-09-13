---
title: "Create Git Tree - Manage Index | Free DevTools"
name: git-write-tree
path: /freedevtools/tldr/git/git-write-tree
canonical: "https://hexmos.com/freedevtools/tldr/git/git-write-tree/"
description: "Create Git Tree objects with git-write-tree. Manage Git index contents to build file system snapshots efficiently. Free online tool, no registration required."
category: common
keywords:
- git tree creation
- git index management
- git object generation
- git snapshot creation
- version control index
- git directory structure
- git repository tree
- git file system state
- git tree object
- git index to tree
features:
- Create a tree object from the current index
- Bypass object existence checks during tree creation
- Generate a tree object for a specific subdirectory
- Manage file system snapshots within a Git repository
- Create tree objects representing subprojects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git write-tree

> Low level utility to create a tree object from the current index.
> More information: <https://git-scm.com/docs/git-write-tree>.

- Create a tree object from the current index:

`git write-tree`

- Create a tree object without checking whether objects referenced by the directory exist in the object database:

`git write-tree --missing-ok`

- Create a tree object that represents a subdirectory (used to write the tree object for a subproject in the named subdirectory):

`git write-tree --prefix {{subdirectory}}/`
