---
title: "GLab Release - Manage GitLab Releases | Free DevTools"
name: glab-release
path: /freedevtools/tldr/glab/glab-release
canonical: "https://hexmos.com/freedevtools/tldr/glab/glab-release/"
description: "Manage GitLab releases effortlessly with GLab Release. Automate your release process, upload assets and control releases from the command line. Free online tool, no registration required."
category: common
keywords:
- gitlab release manager
- glab release tool
- gitlab cli release
- release automation glab
- gitlab release command line
- glab release upload
- glab release download
- gitlab release delete
- glab release create
- gitlab release list
features:
- List GitLab releases from the command line
- View detailed information about specific releases
- Create new GitLab releases with custom tags
- Delete existing GitLab releases by tag
- Upload and download assets associated with releases
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# glab release

> Manage GitLab releases.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/release/index.md>.

- List releases in a Gitlab repository, limited to 30 items:

`glab release list`

- Display information about a specific release:

`glab release view {{tag}}`

- Create a new release:

`glab release create {{tag}}`

- Delete a specific release:

`glab release delete {{tag}}`

- Download assets from a specific release:

`glab release download {{tag}}`

- Upload assets to a specific release:

`glab release upload {{tag}} {{path/to/file1 path/to/file2 ...}}`
