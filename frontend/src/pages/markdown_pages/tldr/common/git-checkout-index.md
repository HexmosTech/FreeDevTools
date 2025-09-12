---
title: "Checkout Index - Restore Git Files | Free DevTools"
name: git-checkout-index
path: /freedevtools/tldr/common/git-checkout-index
canonical: "https://hexmos.com/freedevtools/tldr/common/git-checkout-index/"
description: "Restore files with Git Checkout Index, recover deleted or modified files from the Git index effortlessly. Free online tool, no registration required."
category: common
keywords:
- git checkout index
- git restore files
- git recover deleted files
- git working tree
- git index restore
- git file recovery
- git command line
- git bash
- linux git
- macos git
features:
- Restore deleted files from the index
- Recover modified files from the index
- Force overwrite of existing files
- Export entire tree to a specified directory
- Create files that do not exist
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git checkout-index

> Copy files from the index to the working tree.
> More information: <https://git-scm.com/docs/git-checkout-index>.

- Restore any files deleted since the last commit:

`git checkout-index {{[-a|--all]}}`

- Restore any files deleted or changed since the last commit:

`git checkout-index {{[-a|--all]}} {{[-f|--force]}}`

- Restore any files changed since the last commit, ignoring any files that were deleted:

`git checkout-index {{[-a|--all]}} {{[-f|--force]}} {{[-n|--no-create]}}`

- Export a copy of the entire tree at the last commit to the specified directory (the trailing slash is important):

`git checkout-index {{[-a|--all]}} {{[-f|--force]}} --prefix {{path/to/export_directory}}/`
