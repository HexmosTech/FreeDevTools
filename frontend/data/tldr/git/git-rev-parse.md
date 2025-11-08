---
title: "Git Revision Control - Display Metadata | Online Free DevTools by Hexmos"
name: git-rev-parse
path: "/freedevtools/tldr/git/git-rev-parse/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-rev-parse/"
description: "Control Git revisions instantly with Git Rev-Parse. Display commit hashes, branch names, and repository paths. Free online tool, no registration required."
category: common
keywords:
- git revision control
- git commit hash
- git branch name
- git repository path
- git metadata display
- git revision parsing
- git refspec lookup
- linux git command
- macos git command
- windows git command
features:
- Display the commit hash of a given branch
- Output the current branch name
- Reveal the absolute path to the repository root directory
- Resolve symbolic refnames to their object names
- Show the object type of a specified revision
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git rev-parse

> Display metadata related to revisions.
> More information: <https://git-scm.com/docs/git-rev-parse>.

- Get the commit hash of a branch:

`git rev-parse {{branch_name}}`

- Get the current branch name:

`git rev-parse --abbrev-ref {{HEAD}}`

- Get the absolute path to the root directory:

`git rev-parse --show-toplevel`
