---
title: "GitHub Browser - Open GitHub Repositories | Free DevTools"
name: gh-browse
path: /freedevtools/tldr/gh/gh-browse
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-browse/"
description: "Open GitHub repositories directly from your terminal with GitHub Browser. Effortlessly browse repos, issues, and wikis using the gh CLI tool. Free online tool, no registration required."
category: common
keywords:
- github repository browser
- gh cli browser
- github repo opener
- command line github
- github web browser
- github repository navigation
- git browser tool
- github cli shortcuts
- github browse command
- github open repository
features:
- Open GitHub repositories in the browser
- Browse specific branches and files
- Open issues and pull requests directly
- Print repository URLs without opening the browser
- Open repository settings and wiki pages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh browse

> Open a GitHub repository in the browser or print the URL.
> More information: <https://cli.github.com/manual/gh_browse>.

- Open the homepage of the current repository in the default web browser:

`gh browse`

- Open the homepage of a specific repository in the default web browser:

`gh browse {{owner}}/{{repository}}`

- Open the settings page of the current repository in the default web browser:

`gh browse {{[-s|--settings]}}`

- Open the wiki of the current repository in the default web browser:

`gh browse {{[-w|--wiki]}}`

- Open a specific issue or pull request in the web browser:

`gh browse {{issue_number|pull_request_number}}`

- Open a specific branch in the web browser:

`gh browse {{[-b|--branch]}} {{branch_name}}`

- Open a specific file or directory of the current repository in the web browser:

`gh browse {{path/to/file_or_directory}}`

- Print the destination URL without open the web browser:

`gh browse {{[-n|--no-browser]}}`
