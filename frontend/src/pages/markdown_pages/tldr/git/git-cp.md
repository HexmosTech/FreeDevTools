---
title: "Git Copy - Copy Files with History | Free DevTools"
name: git-cp
path: /freedevtools/tldr/git/git-cp
canonical: "https://hexmos.com/freedevtools/tldr/git/git-cp/"
description: "Copy files with Git Copy, preserving history and moving between locations. Streamline version control with this simple command. Free online tool, no registration required."
category: common
keywords:
- git copy file
- git preserve history
- git move file
- git rename file with history
- git version control copy
- command line copy
- git extras copy
- git cp command
- linux copy file
- macos copy file
features:
- Copy files within a Git repository.
- Preserve the complete file history during the copy.
- Copy files to new locations within the repository.
- Rename files while preserving their history.
- Integrate seamlessly with existing Git workflows.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git cp

> Copy an existing file to a new location, preserving history.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-cp>.

- Copy an existing file in a Git repo, staying in the same directory:

`git cp {{file}} {{new_file}}`

- Copy an existing file in a Git repo and place it elsewhere:

`git cp {{path/to/file}} {{path/to/new_file}}`
