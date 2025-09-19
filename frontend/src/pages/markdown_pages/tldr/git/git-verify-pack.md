---
title: "Verify Git Pack - Validate Archive Files | Online Free DevTools by Hexmos"
name: git-verify-pack
path: /freedevtools/tldr/git/git-verify-pack
canonical: "https://hexmos.com/freedevtools/tldr/git/git-verify-pack/"
description: "Validate Git archive files with git-verify-pack. Inspect packfile integrity and statistics for repository optimization. Free online tool, no registration required."
category: common
keywords:
- git packfile verification
- git archive validation
- git integrity check
- git repository health
- git pack file analysis
- git pack index verification
- git command line tools
- git repository optimization
- git packfile diagnostics
- git corrupted repository
features:
- Verify the integrity of Git pack files
- Display verbose details about pack file content
- Output only the statistics of a pack file
- Detect corrupted pack files
- Analyze pack file structure for optimization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git verify-pack

> Verify packed Git archive files.
> More information: <https://git-scm.com/docs/git-verify-pack>.

- Verify a packed Git archive file:

`git verify-pack {{path/to/pack-file}}`

- Verify a packed Git archive file and show verbose details:

`git verify-pack {{[-v|--verbose]}} {{path/to/pack-file}}`

- Verify a packed Git archive file and only display the statistics:

`git verify-pack {{[-s|--stat-only]}} {{path/to/pack-file}}`
