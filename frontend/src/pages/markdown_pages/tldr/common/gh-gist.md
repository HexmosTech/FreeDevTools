---
title: "Create GitHub Gists - Manage and Share Code | Free DevTools"
name: gh-gist
path: /freedevtools/tldr/common/gh-gist
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-gist/"
description: "Create GitHub Gists easily with gh-gist. Share code snippets and manage your public or secret gists directly from the command line. Free online tool, no registration required."
category: common
keywords:
- GitHub Gist creator
- Gist management tool
- Command line gist
- Code snippet sharing
- GitHub CLI gist
- Private Gist maker
- Public Gist tool
- Gist editor tool
- GitHub Gist viewer
- Terminal Gist manager
features:
- Create new Gists from files.
- Edit existing Gists.
- List Gists owned by the logged-in user.
- View Gists in a web browser or raw format.
- Add descriptions to new Gists.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh gist

> Work with GitHub Gists.
> More information: <https://cli.github.com/manual/gh_gist>.

- Create a new Gist from one or more files:

`gh gist create {{path/to/file1 path/to/file2 ...}}`

- Create a new Gist with a specific [desc]ription:

`gh gist create {{path/to/file1 path/to/file2 ...}} {{[-d|--desc]}} "{{description}}"`

- Edit a Gist:

`gh gist edit {{id|url}}`

- List up to 42 Gists owned by the currently logged in user:

`gh gist list {{[-L|--limit]}} {{42}}`

- View a Gist in the default browser without rendering Markdown:

`gh gist view {{id|url}} {{[-w|--web]}} {{[-r|--raw]}}`
