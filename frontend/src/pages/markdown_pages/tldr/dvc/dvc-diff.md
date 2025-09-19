---
title: "DVC Diff - Show DVC Changes | Online Free DevTools by Hexmos"
name: dvc-diff
path: /freedevtools/tldr/dvc/dvc-diff
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-diff/"
description: "Show DVC changes with DVC Diff. Compare tracked files across commits, tags, and branches with this command line tool. Free online tool, no registration required."
category: common
keywords:
- dvc diff
- dvc compare
- data version control diff
- git dvc diff
- compare dvc tracked files
- dvc data diff
- dvc project diff
- dvc file difference
- dvc revision compare
- command line dvc diff
features:
- Compare DVC tracked files between Git commits
- Show changes in DVC tracked directories
- Display DVC diff output as JSON
- Display DVC diff output as Markdown
- Show the latest hash of DVC tracked files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dvc diff

> Show changes in DVC tracked file and directories.
> More information: <https://dvc.org/doc/command-reference/diff>.

- Compare DVC tracked files from different Git commits, tags, and branches w.r.t the current workspace:

`dvc diff {{commit_hash/tag/branch}}`

- Compare the changes in DVC tracked files from 1 Git commit to another:

`dvc diff {{revision1}} {{revision2}}`

- Compare DVC tracked files, along with their latest hash:

`dvc diff --show-hash {{commit}}`

- Compare DVC tracked files, displaying the output as JSON:

`dvc diff --show-json --show-hash {{commit}}`

- Compare DVC tracked files, displaying the output as Markdown:

`dvc diff --show-md --show-hash {{commit}}`
