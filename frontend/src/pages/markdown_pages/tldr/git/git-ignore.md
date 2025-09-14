---
title: "Create Git Ignore - Manage Ignored Files | Free DevTools"
name: git-ignore
path: "/freedevtools/tldr/git/git-ignore"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-ignore/"
description: "Create .gitignore files with Git Ignore. Easily manage ignored files and patterns locally or globally. Free online tool, no registration required."
category: common
keywords:
- git ignore file
- gitignore generator
- git ignore patterns
- git exclude rules
- git global ignore
- git local ignore
- git info exclude
- git version control
- command line git
- git repository management
features:
- Display the content of global and local .gitignore files.
- Privately ignore files by updating the .git/info/exclude file.
- Locally ignore files by updating the local .gitignore file.
- Globally ignore files by updating the global .gitignore file.
- Manage version control exclusion patterns.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git ignore

> Show/update `.gitignore` files.
> Part of `git-extras`.
> See also: `git ignore-io`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-ignore>.

- Show the content of all global and local `.gitignore` files:

`git ignore`

- Ignore file(s) privately, updating `.git/info/exclude` file:

`git ignore {{file_pattern}} {{[-p|--private]}}`

- Ignore file(s) locally, updating local `.gitignore` file:

`git ignore {{file_pattern}}`

- Ignore file(s) globally, updating global `.gitignore` file:

`git ignore {{file_pattern}} {{[-g|--global]}}`
