---
title: "JJ Evolog - Track Change Evolution | Online Free DevTools by Hexmos"
name: jj-evolog
path: /freedevtools/tldr/jj/jj-evolog
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-evolog/"
description: "Track change evolution with JJ Evolog. Visualize commit history and understand the evolution of your code. Free online tool, no registration required."
category: common
keywords:
- JJ Evolog
- Change Evolution Tracker
- Commit History Viewer
- Revision Graph Tool
- JJ VCS
- Version Control History
- Commit Lineage
- Code Evolution Analysis
- Revision History Tool
- Graph of Change
features:
- Visualize commit history over time
- Track the lineage of changes
- Show diff statistics for each revision
- Display summaries of changes in the evolution log
- Show how revisions have evolved
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj evolog

> Show how a change has evolved over time, listing the previous commits it has pointed to.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-evolog>.

- Show how a revision has evolved over time:

`jj evolog {{[-r|--revisions]}} {{revsets}}`

- Show diff statistics in the evolution log:

`jj evolog {{[-r|--revisions]}} {{revsets}} --stat`

- Show summary of each change in the evolution log:

`jj evolog {{[-r|--revisions]}} {{revsets}} {{[-s|--summary]}}`
