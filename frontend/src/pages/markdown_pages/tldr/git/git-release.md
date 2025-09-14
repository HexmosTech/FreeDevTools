---
title: "Create Git Release - Tag Releases with Command Line | Free DevTools"
name: git-release
path: /freedevtools/tldr/git/git-release
canonical: "https://hexmos.com/freedevtools/tldr/git/git-release/"
description: "Create Git releases effortlessly with git-release command. Tag your commits, manage release versions and push to remote repositories. Free online tool, no registration required."
category: common
keywords:
- git release
- git tag release
- create git tag
- command line release
- git release management
- git version control
- git command
- common git commands
- git extras
- git workflow
features:
- Create a new Git tag for a release
- Push the created tag to a remote repository
- Sign the release tag cryptographically
- Add a descriptive message to the release tag
- Simplify the Git release process with a single command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git release

> Create a Git tag for a release.
> Part of `git-extras`.
> More information: <https://manned.org/git-release>.

- Create and push a release:

`git release {{tag_name}}`

- Create and push a signed release:

`git release {{tag_name}} -s`

- Create and push a release with a message:

`git release {{tag_name}} -m "{{message}}"`
