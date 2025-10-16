---
title: "Check Git Ignore - Analyze Ignore Rules | Online Free DevTools by Hexmos"
name: git-check-ignore
path: "/freedevtools/tldr/git/git-check-ignore/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-check-ignore/"
description: "Analyze Git ignore rules with git-check-ignore. Debug .gitignore files and ensure unwanted files are excluded from your Git repository. Free online tool, no registration required."
category: common
keywords:
- Git ignore analyzer
- Git exclude debugger
- .gitignore checker
- Git untracked files
- Git ignore rules
- Git include patterns
- Git ignore files
- Git check-ignore command
- Git repository management
- Command line Git tools
features:
- Check if a file or directory is ignored by Git
- Debug Git ignore rules and patterns
- Analyze multiple files for Git ignore status
- Read file paths from stdin for ignore checking
- Exclude index from check for debugging tracked files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git check-ignore

> Analyze and debug Git ignore/exclude (".gitignore") files.
> More information: <https://git-scm.com/docs/git-check-ignore>.

- Check whether a file or directory is ignored:

`git check-ignore {{path/to/file_or_directory}}`

- Check whether multiple files or directories are ignored:

`git check-ignore {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Use pathnames, one per line, from `stdin`:

`git check-ignore --stdin < {{path/to/file_list}}`

- Do not check the index (used to debug why paths were tracked and not ignored):

`git check-ignore --no-index {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Include details about the matching pattern for each path:

`git check-ignore {{[-v|--verbose]}} {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`
