---
title: "Git Archive - Create File Archives from Git Repositories | Online Free DevTools by Hexmos"
name: git-archive
path: /freedevtools/tldr/git/git-archive
canonical: "https://hexmos.com/freedevtools/tldr/git/git-archive/"
description: "Create file archives with Git Archive. Generate tarballs and zip files from Git repositories. Free online tool, no registration required."
category: common
keywords:
- git archive command
- git archive tarball
- git archive zip
- git archive repository
- git archive export
- git archive linux
- git archive windows
- git archive macos
- git archive gitlab
- git archive github
features:
- Create tar archives from Git repositories
- Create zip archives from Git repositories
- Output archives to a specific file
- Archive specific branches or commits
- Prepend a path to archived files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git archive

> Create an archive of files from a tree.
> More information: <https://git-scm.com/docs/git-archive>.

- Create a tar archive from the contents of the current HEAD and print it to `stdout`:

`git archive {{[-v|--verbose]}} HEAD`

- Use the Zip format and report progress verbosely:

`git archive {{[-v|--verbose]}} --format zip HEAD`

- Output the Zip archive to a specific file:

`git archive {{[-v|--verbose]}} {{[-o|--output]}} {{path/to/file.zip}} HEAD`

- Create a tar archive from the contents of the latest commit of a specific branch:

`git archive {{[-o|--output]}} {{path/to/file.tar}} {{branch_name}}`

- Use the contents of a specific directory:

`git archive {{[-o|--output]}} {{path/to/file.tar}} HEAD:{{path/to/directory}}`

- Prepend a path to each file to archive it inside a specific directory:

`git archive {{[-o|--output]}} {{path/to/file.tar}} --prefix {{path/to/prepend}}/ HEAD`
