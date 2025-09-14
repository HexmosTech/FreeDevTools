---
title: "Compare Git Ranges - Diff Commit Ranges | Free DevTools"
name: git-range-diff
path: /freedevtools/tldr/git/git-range-diff
canonical: "https://hexmos.com/freedevtools/tldr/git/git-range-diff/"
description: "Compare Git ranges with git-range-diff. Visualize differences between commit ranges and identify changesets easily. Free online tool, no registration required."
category: common
keywords:
- git range diff
- git compare ranges
- git changeset diff
- git commit comparison
- git diff branch versions
- git rebase conflict resolution
- git patch analysis
- git commit range analysis
- git linux
- git diff
features:
- Visualize differences between two commit ranges
- Identify changes introduced by rebasing operations
- Compare patches applied across different branches
- Highlight differences between two versions of a branch
- Analyze conflicts during rebase or cherry-pick operations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git range-diff

> Compare two commit ranges (e.g. two versions of a branch).
> More information: <https://git-scm.com/docs/git-range-diff>.

- Diff the changes of two individual commits:

`git range-diff {{commit_1}}^! {{commit_2}}^!`

- Diff the changes of ours and theirs from their common ancestor, e.g. after an interactive rebase:

`git range-diff {{theirs}}...{{ours}}`

- Diff the changes of two commit ranges, e.g. to check whether conflicts have been resolved appropriately when rebasing commits from `base1` to `base2`:

`git range-diff {{base1}}..{{rev1}} {{base2}}..{{rev2}}`
