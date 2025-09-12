---
title: "Git LFS - Manage Large Files in Git | Free DevTools"
name: git-lfs
path: /freedevtools/tldr/common/git-lfs
canonical: "https://hexmos.com/freedevtools/tldr/common/git-lfs/"
description: "Manage large files with Git LFS. Track, store, and collaborate on large assets efficiently using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- git large file storage
- lfs file management
- git lfs tracking
- git lfs push
- git lfs fetch
- git lfs checkout
- git lfs endpoint configuration
- git large object storage
- version control large files
- git lfs command line
features:
- Track specific file patterns in Git LFS.
- Configure Git LFS endpoint URLs.
- List all tracked patterns within Git LFS.
- Push all Git LFS objects to a remote server.
- Replace pointer files with actual Git LFS objects.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git lfs

> Work with large files in Git repositories.
> More information: <https://github.com/git-lfs/git-lfs/tree/main/docs>.

- Initialize Git LFS:

`git lfs install`

- Track files that match a glob:

`git lfs track '{{*.bin}}'`

- Change the Git LFS endpoint URL (useful if the LFS server is separate from the Git server):

`git config {{[-f|--file]}} .lfsconfig lfs.url {{lfs_endpoint_url}}`

- List tracked patterns:

`git lfs track`

- List tracked files that have been committed:

`git lfs ls-files`

- Push all Git LFS objects to the remote server (useful if errors are encountered):

`git lfs push --all {{remote_name}} {{branch_name}}`

- Fetch all Git LFS objects:

`git lfs fetch`

- Replace pointer files with actual Git LFS objects:

`git lfs checkout`
