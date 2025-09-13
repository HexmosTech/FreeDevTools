---
title: "Git Control - Manage Versions with Git Commands | Free DevTools"
name: git
path: /freedevtools/tldr/git/git
canonical: "https://hexmos.com/freedevtools/tldr/git/git/"
description: "Manage software versions efficiently with Git Control. Streamline collaboration and track changes seamlessly. Free online tool, no registration required."
category: common
keywords:
- Git version control
- Git distributed system
- Git command line
- Git repository management
- Git commit history
- Git branch management
- Git push pull
- Git remote repository
- Git local repository
- Git command cheat sheet
features:
- Initialize a new Git repository
- Clone an existing Git repository
- Track changes in files and directories
- Commit changes to the repository history
- Push and pull changes from remote repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git

> Distributed version control system.
> Some subcommands such as `commit`, `add`, `branch`, `switch`, `push`, etc. have their own usage documentation.
> More information: <https://git-scm.com/docs/git>.

- Create an empty Git repository:

`git init`

- Clone a remote Git repository from the internet:

`git clone {{https://example.com/repo.git}}`

- View the status of the local repository:

`git status`

- Stage all changes for a commit:

`git add {{[-A|--all]}}`

- Commit changes to version history:

`git commit {{[-m|--message]}} {{message_text}}`

- Push local commits to a remote repository:

`git push`

- Pull any changes made to a remote:

`git pull`

- Reset everything the way it was in the latest commit:

`git reset --hard; git clean {{[-f|--force]}}`
