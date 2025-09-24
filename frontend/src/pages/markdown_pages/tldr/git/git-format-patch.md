---
title: "Format Patch - Generate Git Patches | Online Free DevTools by Hexmos"
name: git-format-patch
path: /freedevtools/tldr/git/git-format-patch
canonical: "https://hexmos.com/freedevtools/tldr/git/git-format-patch/"
description: "Generate patch files with Git Format-Patch. Email commits and apply patches with ease. Free online tool, no registration required."
category: common
keywords:
- git patch generator
- format patch git
- git commit patch
- create git patch
- git patch email
- git patch series
- git diff patch
- git patch apply
- git patch file
- git linux
features:
- Create patch files from unpushed commits.
- Generate patch files between two revisions.
- Output patch files for the latest 'n' commits.
- Prepare patches for emailing commits.
- Generate standardized patch files for easy application.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git format-patch

> Prepare .patch files. Useful when emailing commits elsewhere.
> See also: `git am` which can apply generated .patch files.
> More information: <https://git-scm.com/docs/git-format-patch>.

- Create an auto-named `.patch` file for all the unpushed commits:

`git format-patch {{origin}}`

- Write a `.patch` file for all the commits between 2 revisions to `stdout`:

`git format-patch {{revision_1}}..{{revision_2}}`

- Write a `.patch` file for the `n` latest commits:

`git format-patch -{{n}}`
