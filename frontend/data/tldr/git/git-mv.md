---
title: "Git Move - Rename Files & Directories | Online Free DevTools by Hexmos"
name: git-mv
path: "/freedevtools/tldr/git/git-mv/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-mv/"
description: "Rename files easily with Git Move command. Update the Git index when moving files, ensuring accurate tracking of changes. Free online tool, no registration required."
category: common
keywords:
- git move
- git rename file
- git rename directory
- git mv command
- git index update
- git file tracking
- git move file
- version control rename
- command line rename
- git repository management
features:
- Move files within a Git repository.
- Rename files or directories in Git.
- Update the Git index with move or rename operations.
- Force overwrite of existing files during move.
- Track file movements for future commits.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git mv

> Move or rename files and update the Git index.
> More information: <https://git-scm.com/docs/git-mv>.

- Move a file inside the repo and add the movement to the next commit:

`git mv {{path/to/file}} {{path/to/destination}}`

- Rename a file or directory and add the renaming to the next commit:

`git mv {{path/to/file_or_directory}} {{path/to/destination}}`

- Overwrite the file or directory in the target path if it exists:

`git mv {{[-f|--force]}} {{path/to/file_or_directory}} {{path/to/destination}}`
