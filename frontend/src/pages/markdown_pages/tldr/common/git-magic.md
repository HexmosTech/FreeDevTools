---
title: "Automate Git Workflow - Magic Add, Commit, Push | Free DevTools"
name: git-magic
path: /freedevtools/tldr/common/git-magic
canonical: "https://hexmos.com/freedevtools/tldr/common/git-magic/"
description: "Automate Git workflow with Git Magic. Streamline adding, committing, and pushing changes with ease. Free online tool, no registration required."
category: common
keywords:
- git workflow automation
- git commit automation
- git add commit push
- git command shortcuts
- git commit message generator
- git push force
- command line git
- linux git
- macos git
- windows git
features:
- Automates the add, commit, and push process.
- Generates commit messages automatically.
- Allows custom commit message specification.
- Enables force pushing to remote.
- Provides options to edit commit messages before committing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git magic

> Automate add, commit, and push routines.
> Part of `git-extras`.
> More information: <https://manned.org/git-magic>.

- Commit changes with a generated message:

`git magic`

- [a]dd untracked files and commit changes with a generated message:

`git magic -a`

- Commit changes with a custom [m]essage:

`git magic -m "{{custom_commit_message}}"`

- [e]dit the commit [m]essage before committing:

`git magic -em "{{custom_commit_message}}"`

- Commit changes and [p]ush to remote:

`git magic -p`

- Commit changes with a [f]orce [p]ush to remote:

`git magic -fp`
