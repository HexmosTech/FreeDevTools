---
title: "Git Commit - Create Repository Commits | Online Free DevTools by Hexmos"
name: git-commit
path: /freedevtools/tldr/git/git-commit
canonical: "https://hexmos.com/freedevtools/tldr/git/git-commit/"
description: "Create repository commits with Git Commit. Stage files, add messages, and amend commits for efficient version control. Free online tool, no registration required."
category: common
keywords:
- git commit changes
- git repository commit
- git add commit
- git commit message
- git amend commit
- git commit staged files
- git commit specific files
- git commit sign
- git commit all
- git commit empty
features:
- Commit staged files with a message.
- Amend the last commit with currently staged changes.
- Sign commits with a specified GPG key.
- Commit specific files to the repository.
- Auto stage modified files before committing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git commit

> Commit files to the repository.
> More information: <https://git-scm.com/docs/git-commit>.

- Commit staged files to the repository with a message:

`git commit {{[-m|--message]}} "{{message}}"`

- Commit staged files with a message read from a file:

`git commit {{[-F|--file]}} {{path/to/commit_message_file}}`

- Auto stage all modified and deleted files and commit with a message:

`git commit {{[-a|--all]}} {{[-m|--message]}} "{{message}}"`

- Commit staged files and sign them with the specified GPG key (or the one defined in the configuration file if no argument is specified):

`git commit {{[-S|--gpg-sign]}} {{key_id}} {{[-m|--message]}} "{{message}}"`

- Update the last commit by adding the currently staged changes, changing the commit's hash:

`git commit --amend`

- Commit only specific (already staged) files:

`git commit {{path/to/file1 path/to/file2 ...}}`

- Create a commit, even if there are no staged files:

`git commit {{[-m|--message]}} "{{message}}" --allow-empty`
