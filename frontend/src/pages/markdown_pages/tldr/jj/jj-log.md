---
title: "JJ Log - Control Revision History Graph | Online Free DevTools by Hexmos"
name: jj-log
path: /freedevtools/tldr/jj/jj-log
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-log/"
description: "Control revision history with JJ Log. Visualize commit graphs, filter revisions, and customize output templates for efficient version control. Free online tool, no registration required."
category: common
keywords:
- jj log
- revision history graph
- commit graph
- jj version control
- distributed version control
- revision filtering
- template logging
- jj command line
- commit history visualizer
- jj revsets
features:
- Visualize revision history as a directed graph.
- Filter revisions using revsets.
- Customize log output with templates.
- Display specific branches or tags in the graph.
- Inspect commit metadata and changesets.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj log

> Show revision history as a graph.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-log>.

- Show revision history as a graph:

`jj log`

- Show only given revsets (e.g. `B::D`, `A..D`, `B|C|D`, etc.):

`jj log {{[-r|--revisions]}} {{revsets}}`

- Show log with a particular template for each line (e.g. 5 characters of commit hash and author):

`jj log {{[-T|--template]}} 'commit_id.shortest(5) ++ " " ++ author'`
