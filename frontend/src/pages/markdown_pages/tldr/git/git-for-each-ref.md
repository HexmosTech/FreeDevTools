---
title: "Git For-Each-Ref - Format Git References | Online Free DevTools by Hexmos"
name: git-for-each-ref
path: /freedevtools/tldr/git/git-for-each-ref
canonical: "https://hexmos.com/freedevtools/tldr/git/git-for-each-ref/"
description: "Format Git references with Git For-Each-Ref. List, sort, and filter branches and tags in your Git repository. Free online tool, no registration required."
category: common
keywords:
- git reference formatting
- git branch listing
- git tag listing
- git ref sorting
- git ref filtering
- git ref enumeration
- git for-each-ref command
- git ref management
- git scripting references
- linux git references
features:
- List all Git references (branches and tags).
- Filter Git references by branch or tag.
- Sort Git references by committer date or other criteria.
- Format the output of Git references with custom templates.
- Limit the number of Git references displayed.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git for-each-ref

> List and optionally format references (branches, tags) in a Git repository.
> More information: <https://git-scm.com/docs/git-for-each-ref>.

- List all refs (branches and tags):

`git for-each-ref`

- List only branches:

`git for-each-ref refs/heads/`

- List only tags:

`git for-each-ref refs/tags/`

- Show branches merged into HEAD:

`git for-each-ref --merged HEAD refs/heads/`

- List short names of all refs:

`git for-each-ref --format "%(refname:short)"`

- Sort refs by committer date (most recent first):

`git for-each-ref --sort -committerdate`

- Sort refs by committer date (oldest first):

`git for-each-ref --sort committerdate`

- Limit output to a specified number of refs:

`git for-each-ref --count {{count}}`
