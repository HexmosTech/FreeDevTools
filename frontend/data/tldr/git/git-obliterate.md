---
title: "Obliterate Git History - Remove Files | Online Free DevTools by Hexmos"
name: git-obliterate
path: "/freedevtools/tldr/git/git-obliterate/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-obliterate/"
description: "Remove files with Git Obliterate and erase their history permanently. Securely sanitize your repository and protect sensitive data. Free online tool, no registration required."
category: common
keywords:
- git history removal
- git file deletion
- git obliterate history
- git sensitive data removal
- git repository cleanup
- git data sanitization
- git commit history editor
- git commit history eraser
- git permanent file delete
- linux git obliterate
features:
- Erase specific files completely from Git history.
- Remove files across a specified range of commits.
- Sanitize repositories to remove sensitive information.
- Permanently delete files to comply with data protection policies.
- Improve repository size by removing unwanted file history.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git obliterate

> Delete files and erase their history from a Git repository.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-obliterate>.

- Erase the existence of specific files:

`git obliterate {{file_1 file_2 ...}}`

- Erase the existence of specific files between 2 commits:

`git obliterate {{file_1 file_2 ...}} -- {{commit_hash_1}}..{{commit_hash_2}}`
