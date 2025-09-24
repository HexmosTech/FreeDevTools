---
title: "Find Duplicate Files - rmlint File Cleaner | Online Free DevTools by Hexmos"
name: rmlint
path: /freedevtools/tldr/common/rmlint
canonical: "https://hexmos.com/freedevtools/tldr/common/rmlint/"
description: "Find duplicate files with rmlint, a powerful file system cleaner. Reclaim disk space and eliminate broken links. Free online tool, no registration required."
category: common
keywords:
- duplicate file finder
- space waste cleaner
- file system analyzer
- broken link checker
- file integrity tool
- disk space management
- file comparison tool
- linux file cleaner
- macos file cleaner
- rmlint command line
features:
- Identify duplicate files across directories
- Detect empty and broken files
- Merge duplicate directory trees by data
- Rank files for preferred deletion based on path depth and length
- Link identical files to save disk space
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rmlint

> Find space waste and other broken things on your filesystem.
> More information: <https://rmlint.readthedocs.io/en/latest/rmlint.1.html>.

- Check directories for duplicated, empty and broken files:

`rmlint {{path/to/directory1 path/to/directory2 ...}}`

- Check for duplicates bigger than a specific size, preferably keeping files in tagged directories (after the double slash):

`rmlint {{[-s|--size]}} {{1MB}} {{path/to/directory}} // {{path/to/original_directory}}`

- Check for space wasters, keeping everything in the untagged directories:

`rmlint {{[-k|--keep-all-untagged]}} {{path/to/directory}} // {{path/to/original_directory}}`

- Delete duplicate files found by an execution of `rmlint`:

`./rmlint.sh`

- Find duplicate directory trees based on data, ignoring names:

`rmlint {{[-D|--merge-directories]}} {{path/to/directory}}`

- Mark files at lower path [d]epth as originals, on tie choose shorter [l]ength:

`rmlint {{[-S|--rank-by]}} {{dl}} {{path/to/directory}}`

- Find files with identical filename and contents, and link rather than delete the duplicates:

`rmlint {{[-c|--config]}} sh:link {{[-b|--match-basename]}} {{path/to/directory}}`

- Use `data` as master directory. Find only duplicates in backup that are also in `data`. Do not delete any files in `data`:

`rmlint {{path/to/backup}} // {{path/to/data}} {{[-k|--keep-all-tagged]}} {{[-m|--must-match-tagged]}}`
