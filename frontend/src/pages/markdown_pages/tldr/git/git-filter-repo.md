---
title: "Filter Repo - Rewrite Git History | Free DevTools"
name: git-filter-repo
path: /freedevtools/tldr/git/git-filter-repo
canonical: "https://hexmos.com/freedevtools/tldr/git/git-filter-repo/"
description: "Rewrite Git history with Filter Repo. Remove sensitive data, extract subfolders, and restructure repositories using this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- git history rewriting
- git filter repo command
- git repository cleaning
- git sensitive data removal
- git subfolder extraction
- git path renaming
- git commit filtering
- git repository restructuring
- git large file removal
- git project migration
features:
- Replace sensitive text in Git history
- Extract specific folders from a repository
- Remove unwanted folders from Git history
- Rename paths within a Git repository
- Restructure the file system within a Git repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git filter-repo

> A versatile tool for rewriting Git history.
> See also: `bfg`.
> More information: <https://github.com/newren/git-filter-repo>.

- Replace a sensitive string in all files:

`git filter-repo --replace-text <(echo '{{find}}==>{{replacement}}')`

- Extract a single folder, keeping history:

`git filter-repo --path {{path/to/folder}}`

- Remove a single folder, keeping history:

`git filter-repo --path {{path/to/folder}} --invert-paths`

- Move everything from sub-folder one level up:

`git filter-repo --path-rename {{path/to/folder/:}}`
