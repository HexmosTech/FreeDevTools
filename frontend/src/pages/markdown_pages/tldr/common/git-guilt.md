---
title: "Calculate Git Blame - Analyze Code Ownership | Free DevTools"
name: git-guilt
path: /freedevtools/tldr/common/git-guilt
canonical: "https://hexmos.com/freedevtools/tldr/common/git-guilt/"
description: "Analyze code ownership with Git Guilt. Determine blame count and track changes between revisions easily. Free online tool, no registration required."
category: common
keywords:
- git blame analysis
- code ownership analysis
- git responsibility tracking
- git blame calculation
- blame change detection
- git blame revision comparison
- blame author identification
- git code contributor analysis
- git blame whitespace ignore
- git blame time range
features:
- Calculate total blame count for modified files
- Compare blame between two specific Git revisions
- Display author emails instead of author names
- Ignore whitespace changes when calculating blame
- Analyze blame delta over a specified time range
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git guilt

> Show total blame count for files with unstaged changes or calculate the change in blame between two revisions.
> Part of `git-extras`.
> More information: <https://manned.org/git-guilt>.

- Show total blame count:

`git guilt`

- Calculate the change in blame between two revisions:

`git guilt {{first_revision}} {{last_revision}}`

- Show author emails instead of names:

`git guilt {{[-e|--email]}}`

- Ignore whitespace only changes when attributing blame:

`git guilt {{[-w|--ignore-whitespace]}}`

- Find blame delta over the last three weeks:

`git guilt 'git log --until "3 weeks ago" --format "%H" {{[-n|--max-count]}} 1'`

- Find blame delta over the last three weeks (git 1.8.5+):

`git guilt @{3.weeks.ago}`
