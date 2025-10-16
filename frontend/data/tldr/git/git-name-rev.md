---
title: "Git Name-Rev - Describe Commits | Online Free DevTools by Hexmos"
name: git-name-rev
path: "/freedevtools/tldr/git/git-name-rev/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-name-rev/"
description: "Describe Git commits with Git Name-Rev. Identify commits using ref names, tags, and branches in your repository. Free online tool, no registration required."
category: common
keywords:
- git commit name
- git ref name
- git identify commit
- git tag lookup
- git branch identifier
- git commit description
- git name rev command
- git revision naming
- git commit aliasing
- git commit reference
features:
- Identify commits by ref names
- Enumerate matching ref names
- Restrict names to specific refs
- Show names for multiple commits
- Read commit IDs from standard input
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git name-rev

> Describe a commit using existing ref names.
> More information: <https://git-scm.com/docs/git-name-rev>.

- Show the name for HEAD:

`git name-rev HEAD`

- Show only the name:

`git name-rev --name-only HEAD`

- Enumerate all matching ref names:

`git name-rev --all`

- Use only tags to name the commit:

`git name-rev --tags HEAD`

- Exit with a non-zero status code instead of printing `undefined` for unknown commits:

`git name-rev --no-undefined {{commit-ish}}`

- Show names for multiple commits:

`git name-rev HEAD~1 HEAD~2 main`

- Restrict names to branch refs:

`git name-rev --refs refs/heads/ {{commit-ish}}`

- Read commit IDs from `stdin`:

`echo "{{commit-ish}}" | git name-rev --annotate-stdin`
