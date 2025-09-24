---
title: "BFG Cleaner - Remove Git Data | Online Free DevTools by Hexmos"
name: bfg
path: /freedevtools/tldr/common/bfg
canonical: "https://hexmos.com/freedevtools/tldr/common/bfg/"
description: "Remove unwanted data with BFG Cleaner, efficiently cleaning Git repository history. Delete large files and sensitive information. Free online tool, no registration required."
category: common
keywords:
- git repository cleaner
- bfg git cleaner
- git history rewrite
- remove large files git
- delete sensitive data git
- git password removal
- git data scrubbing
- git commit history editor
- bfg command line
- git repository optimization
features:
- Delete specified files from Git history
- Replace text content across all commits
- Clean large files from the repository
- Rewrite Git history to remove unwanted data
- Purge sensitive information like passwords from history
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bfg

> Remove large files or passwords from Git history like git-filter-branch.
> Note: If your repository is connected to a remote, you will need to force push to it.
> More information: <https://rtyley.github.io/bfg-repo-cleaner/>.

- Remove a file with sensitive data but leave the latest commit untouched:

`bfg --delete-files {{file_with_sensitive_data}}`

- Remove all text mentioned in the specified file wherever it can be found in the repository's history:

`bfg --replace-text {{path/to/file.txt}}`
