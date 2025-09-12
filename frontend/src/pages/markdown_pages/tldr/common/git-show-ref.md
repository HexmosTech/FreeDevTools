---
title: "List Git References - Show Repository Refs | Free DevTools"
name: git-show-ref
path: /freedevtools/tldr/common/git-show-ref
canonical: "https://hexmos.com/freedevtools/tldr/common/git-show-ref/"
description: "List Git references with git-show-ref. Verify ref existence and show heads or tags. Free online tool, no registration required."
category: common
keywords:
- git show-ref
- git references
- git heads
- git tags
- git verify ref
- git repository references
- show git branches
- show git tags
- list git refs
- git command line
features:
- List all references in a Git repository
- Show only heads references
- Show only tags references
- Verify the existence of a specific reference
- Filter references based on type
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git show-ref

> Git command for listing references.
> More information: <https://git-scm.com/docs/git-show-ref>.

- Show all refs in the repository:

`git show-ref`

- Show only heads references:

`git show-ref --branches`

- Show only tags references:

`git show-ref --tags`

- Verify that a given reference exists:

`git show-ref --verify {{path/to/ref}}`
