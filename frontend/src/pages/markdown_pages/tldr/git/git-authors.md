---
title: "Generate Git Authors List - Find Repository Committers | Online Free DevTools by Hexmos"
name: git-authors
path: /freedevtools/tldr/git/git-authors
canonical: "https://hexmos.com/freedevtools/tldr/git/git-authors/"
description: "Generate Git authors list with git-authors. Identify contributors and manage authorship easily in your repository using this free online tool, no registration required."
category: common
keywords:
- git authors list generator
- git committers list
- git contributors tool
- git authorship report
- git developer credits
- git author extraction
- git contributors email list
- git author statistics
- git commit history analysis
- command line git authors
features:
- Generates a list of committers to standard output.
- Appends the list of committers to the AUTHORS file.
- Opens the AUTHORS file in the default editor.
- Excludes emails from the appended author list.
- Simplifies contributor identification in Git repositories.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git authors

> Generate a list of committers of a Git repository.
> Part of `git-extras`.
> More information: <https://manned.org/git-authors>.

- Print a full list of committers to `stdout` instead of to the `AUTHORS` file:

`git authors {{[-l|--list]}}`

- Append the list of committers to the `AUTHORS` file and open it in the default editor:

`git authors`

- Append the list of committers, excluding emails, to the `AUTHORS` file and open it in the default editor:

`git authors --no-email`
