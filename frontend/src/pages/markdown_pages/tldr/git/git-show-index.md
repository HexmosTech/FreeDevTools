---
title: "Show Git Index - Inspect Packfile Archives | Online Free DevTools by Hexmos"
name: git-show-index
path: /freedevtools/tldr/git/git-show-index
canonical: "https://hexmos.com/freedevtools/tldr/git/git-show-index/"
description: "Inspect Git archive indexes with Git Show-Index. Display packfile contents and verify integrity. Free online tool, no registration required."
category: common
keywords:
- git index viewer
- git packfile analyzer
- git archive inspector
- git idx reader
- git object format checker
- git repository debugger
- command line git tool
- git repository index
- sha1 hash algorithm
- sha256 hash algorithm
features:
- Read and display content of Git index files
- Verify the integrity of Git packfiles
- Specify the hash algorithm for index validation
- Dump index file contents to standard output
- Analyze Git repository structure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git show-index

> Show the packed archive index of a Git repository.
> More information: <https://git-scm.com/docs/git-show-index>.

- Read an IDX file for a Git packfile and dump its contents to `stdout`:

`git show-index {{path/to/file.idx}}`

- Specify the hash algorithm for the index file (experimental):

`git show-index --object-format {{sha1|sha256}} {{path/to/file}}`
