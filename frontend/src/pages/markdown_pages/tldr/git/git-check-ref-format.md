---
title: "Format Git Reference - Validate Ref Names | Online Free DevTools by Hexmos"
name: git-check-ref-format
path: /freedevtools/tldr/git/git-check-ref-format
canonical: "https://hexmos.com/freedevtools/tldr/git/git-check-ref-format/"
description: "Format Git references with git-check-ref-format. Validate ref names and normalize references for repository integrity. Free online tool, no registration required."
category: common
keywords:
- git reference format
- git refname validation
- git reference normalization
- git branch name check
- git refspec check
- git repository integrity
- git development workflow
- git command line tools
- git refs/heads format
- git ref integrity
features:
- Validate the format of a Git reference name
- Normalize a Git reference name for consistency
- Check the validity of branch names
- Verify the integrity of Git repositories
- Support refs/heads and other ref types
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git check-ref-format

> Check if a reference name is acceptable, and exit with a non-zero status if it is not.
> More information: <https://git-scm.com/docs/git-check-ref-format>.

- Check the format of the specified reference name:

`git check-ref-format {{refs/head/refname}}`

- Print the name of the last branch checked out:

`git check-ref-format --branch @{-1}`

- Normalize a refname:

`git check-ref-format --normalize {{refs/head/refname}}`
