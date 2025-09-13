---
title: "Control TeX Live Repositories - Manage TLMGR Config | Free DevTools"
name: tlmgr-repository
path: /freedevtools/tldr/common/tlmgr-repository
canonical: "https://hexmos.com/freedevtools/tldr/common/tlmgr-repository/"
description: "Manage TeX Live software repositories with TLMGR Repository. Configure, add, and remove repositories for package updates. Free online tool, no registration required."
category: common
keywords:
- TeX Live repository manager
- TLMGR repository configuration
- TeX package repository control
- Add TeX Live repository
- Remove TeX Live repository
- TLMGR repository list
- TLMGR repository status
- Latex package management
- TeX package updates
- Command line TeX manager
features:
- List configured TeX Live repositories
- Add new TeX Live software repositories
- Remove existing TeX Live repositories
- Set a new list of repositories
- Verify the status of TeX Live repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tlmgr repository

> Manage repositories of a TeX Live installation.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#repository>.

- List all configured repositories and their tags (if set):

`tlmgr repository list`

- List all packages available in a specific repository:

`tlmgr repository list {{path|url|tag}}`

- Add a new repository with a specific tag (the tag is not required):

`sudo tlmgr repository add {{path|url}} {{tag}}`

- Remove a specific repository:

`sudo tlmgr repository remove {{path|url|tag}}`

- Set a new list of repositories, overwriting the previous list:

`sudo tlmgr repository set {{path|url|tag}}#{{tag}} {{path|url|tag}}#{{tag}} {{...}}`

- Show the verification status of all configured repositories:

`tlmgr repository status`
