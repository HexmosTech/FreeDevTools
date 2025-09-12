---
title: "JJ Show - Display Commit Details | Free DevTools"
name: jj-show
path: /freedevtools/tldr/common/jj-show
canonical: "https://hexmos.com/freedevtools/tldr/common/jj-show/"
description: "Display commit details with JJ Show. Examine commit descriptions and changesets in a revision. Free online tool, no registration required."
category: common
keywords:
- jj show commit details
- jj show revision history
- jj version control show
- jj vcs commit log
- jj show changes
- jj show summary
- jj show stat
- jj show histogram
- jj show command line
- jj commit viewer
features:
- Show commit description
- Show changeset details
- Summarize commit changes
- Display a histogram of changes
- Inspect revisions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj show

> Show commit description and changes in a revision.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-show>.

- Show commit description and changes in a revision:

`jj show {{revset}}`

- Show a summary of changes in a revision:

`jj show {{[-s|--summary]}} {{revset}}`

- Show a histogram of changes in a revision:

`jj show --stat {{revset}}`
