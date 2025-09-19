---
title: "Git Rev-List - List Commits in Reverse Order | Online Free DevTools by Hexmos"
name: git-rev-list
path: /freedevtools/tldr/git/git-rev-list
canonical: "https://hexmos.com/freedevtools/tldr/git/git-rev-list/"
description: "List commits easily with Git Rev-List. Inspect commit history and track changes in your repository. Free online tool, no registration required."
category: common
keywords:
- git commit history
- git revision list
- git log reverse
- git commit tracker
- git commit viewer
- git commit analyzer
- linux git commands
- macos git commands
- windows git commands
- git commit timeline
features:
- List commits in reverse chronological order.
- Filter commits by date, branch, or file.
- Count the number of commits since a tag.
- List merge commits.
- Find the latest commit for a specific file.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git rev-list

> List revisions (commits) in reverse chronological order.
> More information: <https://git-scm.com/docs/git-rev-list>.

- List all commits on the current branch:

`git rev-list {{HEAD}}`

- Print the latest commit that changed (add/edit/remove) a specific file on the current branch:

`git rev-list {{[-n|--max-count]}} 1 HEAD -- {{path/to/file}}`

- List commits more recent than a specific date, on a specific branch:

`git rev-list --since "{{2019-12-01 00:00:00}}" {{branch_name}}`

- List all merge commits on a specific commit:

`git rev-list --merges {{commit}}`

- Print the number of commits since a specific tag:

`git rev-list {{tag_name}}..HEAD --count`
