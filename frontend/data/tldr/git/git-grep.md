---
title: "Git Grep - Find Strings in Files | Online Free DevTools by Hexmos"
name: git-grep
path: "/freedevtools/tldr/git/git-grep/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-grep/"
description: "Find strings within files with Git Grep, searching across a repository's history. Quickly locate specific text patterns and code elements. Free online tool, no registration required."
category: common
keywords:
- git grep string search
- git repository grep
- git history search
- git code search
- git file content search
- command line grep git
- git submodule search
- git branch search
- linux git grep
- macos git grep
features:
- Search for strings in tracked files
- Search with file pattern matching
- Search across submodules
- Search at specific points in history
- Search across all branches
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git grep

> Find strings inside files anywhere in a repository's history.
> Accepts a lot of the same flags as regular `grep`.
> More information: <https://git-scm.com/docs/git-grep>.

- Search for a string in tracked files:

`git grep {{search_string}}`

- Search for a string in files matching a pattern in tracked files:

`git grep {{search_string}} -- {{file_glob_pattern}}`

- Search for a string in tracked files, including submodules:

`git grep --recurse-submodules {{search_string}}`

- Search for a string at a specific point in history:

`git grep {{search_string}} {{HEAD~2}}`

- Search for a string across all branches:

`git grep {{search_string}} $(git rev-list --all)`
