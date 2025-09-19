---
title: "Generate Git Commit Graph - Track Repository History | Online Free DevTools by Hexmos"
name: git-commit-graph
path: /freedevtools/tldr/git/git-commit-graph
canonical: "https://hexmos.com/freedevtools/tldr/git/git-commit-graph/"
description: "Generate Git commit graphs with git-commit-graph. Visualize repository history and optimize Git performance using advanced graph features. Free online tool, no registration required."
category: common
keywords:
- Git commit graph generator
- Commit history visualization
- Repository graph analysis
- Git performance optimization
- Graph-based commit traversal
- Incremental commit graph
- Git repository maintenance
- Commit graph indexing
- Directed acyclic graph (DAG) for Git
- Git commit graph verification
features:
- Write a commit-graph file for packed commits
- Generate a commit-graph for all reachable commits
- Append new commits to an existing commit-graph
- Improve Git performance by using commit-graph files
- Visualize and analyze Git repository history
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git commit-graph

> Write and verify Git commit-graph files.
> More information: <https://git-scm.com/docs/git-commit-graph>.

- Write a commit-graph file for the packed commits in the repository's local `.git` directory:

`git commit-graph write`

- Write a commit-graph file containing all reachable commits:

`git show-ref {{[-s|--hash]}} | git commit-graph write --stdin-commits`

- Write a commit-graph file containing all commits in the current commit-graph file along with those reachable from `HEAD`:

`git rev-parse {{HEAD}} | git commit-graph write --stdin-commits --append`
