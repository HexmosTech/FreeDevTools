---
title: "Generate Git Changelog - Track Repository Changes | Free DevTools"
name: git-changelog
path: /freedevtools/tldr/git/git-changelog
canonical: "https://hexmos.com/freedevtools/tldr/git/git-changelog/"
description: "Generate Git changelog files easily with git-changelog. Track repository commits and tags for release notes creation. Free online tool, no registration required."
category: common
keywords:
- git changelog generator
- git commit history
- changelog markdown
- git tag release notes
- git commit analyzer
- repository change tracker
- git commit report
- git version history
- linux git changelog
- macos git changelog
features:
- Generate changelog from git commits and tags
- Update or create History.md file
- List commits from current or specified versions
- Specify custom output file for changelog
- Replace contents of current changelog file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git changelog

> Generate a changelog report from repository commits and tags.
> Part of `git-extras`.
> More information: <https://manned.org/git-changelog>.

- Update existing file or create a new `History.md` file with the commit messages since the latest Git tag:

`git changelog`

- List commits from the current version:

`git changelog {{[-l|--list]}}`

- List a range of commits from the tag named `2.1.0` to now:

`git changelog {{[-l|--list]}} {{[-s|--start-tag]}} {{2.1.0}}`

- List pretty formatted range of commits between the tag `0.5.0` and the tag `1.0.0`:

`git changelog {{[-s|--start-tag]}} {{0.5.0}} {{[-f|--final-tag]}} {{1.0.0}}`

- List pretty formatted range of commits between the commit `0b97430` and the tag `1.0.0`:

`git changelog --start-commit {{0b97430}} {{[-f|--final-tag]}} {{1.0.0}}`

- Specify `CHANGELOG.md` as the output file:

`git changelog {{CHANGELOG.md}}`

- Replace contents of current changelog file entirely:

`git changelog {{[-p|--prune-old]}}`
