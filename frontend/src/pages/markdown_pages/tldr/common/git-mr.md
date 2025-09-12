---
title: "Git Merge Request - Checkout Branches Locally | Free DevTools"
name: git-mr
path: /freedevtools/tldr/common/git-mr
canonical: "https://hexmos.com/freedevtools/tldr/common/git-mr/"
description: "Checkout Git merge requests locally with git-mr. Easily manage remote branches and clean up old requests from the command line. Free online tool, no registration required."
category: common
keywords:
- git merge request checkout
- git branch management
- git remote branch
- git command line
- git workflow automation
- gitlab merge request
- git cleanup command
- linux git tools
- macos git tools
- git-extras command
features:
- Checkout specific GitLab merge requests locally.
- Checkout merge requests from specified remotes.
- Checkout merge requests directly from a URL.
- Clean up old merge request branches automatically.
- Integrate seamlessly with `git-extras`.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git mr

> Check out GitLab merge requests locally.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-mr>.

- Check out a specific merge request:

`git mr {{mr_number}}`

- Check out a merge request from a specific remote:

`git mr {{mr_number}} {{remote}}`

- Checkout a merge request from its URL:

`git mr {{url}}`

- Clean up old merge request branches:

`git mr clean`
