---
title: "GitHub Browser - Open Repositories in Browser | Free DevTools"
name: hub-browse
path: /freedevtools/tldr/hub/hub-browse
canonical: "https://hexmos.com/freedevtools/tldr/hub/hub-browse/"
description: "Open GitHub repositories with GitHub Browser. Browse project homepages, subpages, and specific commits instantly. Free online tool, no registration required."
category: common
keywords:
- github browser
- open github repository
- github repository browser
- github url opener
- command line github
- github cli
- hub cli browse
- browse github repo
- github repository tool
- github navigation
features:
- Open the homepage of a GitHub repository in your default browser
- Specify a GitHub repository and open it in your browser
- Open specific subpages like wiki, commits, or issues
- Access GitHub repositories directly from the command line
- Print the URL of a GitHub repository without opening the browser
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hub browse

> Open a GitHub repository in the browser or print the URL.
> More information: <https://hub.github.com/hub-browse.1.html>.

- Open the homepage of the current repository in the default web browser:

`hub browse`

- Open the homepage of a specific repository in the default web browser:

`hub browse {{owner}}/{{repository}}`

- Open the subpage of a specific repository in the default web browser, subpage can be "wiki", "commits", "issues", or other (default: "tree"):

`hub browse {{owner}}/{{repository}} {{subpage}}`
