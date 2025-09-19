---
title: "Git Bug Tracker - Manage Bugs in Git | Online Free DevTools by Hexmos"
name: git-bug
path: /freedevtools/tldr/git/git-bug
canonical: "https://hexmos.com/freedevtools/tldr/git/git-bug/"
description: "Manage bugs within Git using Git Bug Tracker, a distributed bug tracking system integrated directly into your Git repository. Collaborate efficiently. Free online tool, no registration required."
category: common
keywords:
- git bug tracker
- distributed bug tracking
- git issue management
- version control bug tracker
- git collaboration tools
- command line bug tracker
- git remote bug tracker
- offline bug tracking
- git bug workflow
- git bug sharing
features:
- Create new bug reports directly within Git.
- Push and pull bug data to remote repositories.
- List and filter bugs using flexible queries.
- Search for bugs by text content within descriptions.
- Manage user identities for bug tracking.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git bug

> A distributed bug tracker that uses Git's internal storage, so no files are added in your project.
> You may submit your problems to the same Git remote you use to interact with others, much like commits and branches.
> More information: <https://github.com/MichaelMure/git-bug/blob/master/doc/md/git-bug.md>.

- Create a new identity:

`git bug user create`

- Create a new bug:

`git bug add`

- Push a new bug entry to a remote:

`git bug push`

- Pull for updates:

`git bug pull`

- List existing bugs:

`git bug ls`

- Filter and sort bugs using a query:

`git bug ls "{{status}}:{{open}} {{sort}}:{{edit}}"`

- Search for bugs by text content:

`git bug ls "{{search_query}}" baz`
