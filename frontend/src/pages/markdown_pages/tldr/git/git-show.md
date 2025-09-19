---
title: "Git Show - Display Commit Details | Online Free DevTools by Hexmos"
name: git-show
path: /freedevtools/tldr/git/git-show
canonical: "https://hexmos.com/freedevtools/tldr/git/git-show/"
description: "Display Git commit details with Git Show. Inspect commit messages, diffs, and file changes efficiently. Free online tool, no registration required."
category: common
keywords:
- git commit details
- git commit history
- git object viewer
- git diff viewer
- git commit message
- git file changes
- git revision history
- git show command
- linux git
- macos git
features:
- Show information about the latest commit
- Display details for specific commits, tags, or branches
- Show a commit's message in a single line
- Display file changes statistics
- Show the contents of a file at a given revision
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git show

> Show various types of Git objects (commits, tags, etc.).
> More information: <https://git-scm.com/docs/git-show>.

- Show information about the latest commit (hash, message, changes, and other metadata):

`git show`

- Show information about a specific commit, tag, or branch (such as `HEAD` for the latest commit):

`git show {{commit|tag|branch}}`

- Show information about the 3rd commit from the HEAD of a branch:

`git show {{branch}}~{{3}}`

- Show a commit's message in a single line, suppressing the diff output:

`git show --oneline {{[-s|--no-patch]}} {{commit}}`

- Show only statistics (added/removed characters) about the changed files:

`git show --stat {{commit}}`

- Show a simplified list of all files changed in a commit (modified, added, and deleted):

`git show --name-only {{commit}}`

- Show only the list of added, renamed or deleted files:

`git show --summary {{commit}}`

- Show the contents of a file as it was at a given revision (e.g. branch, tag or commit):

`git show {{revision}}:{{path/to/file}}`
