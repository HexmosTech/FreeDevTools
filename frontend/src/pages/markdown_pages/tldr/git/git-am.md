---
title: "Apply Git Patch - Create Commits Easily | Free DevTools"
name: git-am
path: /freedevtools/tldr/common/git-am
canonical: "https://hexmos.com/freedevtools/tldr/common/git-am/"
description: "Apply Git patches instantly with Git am. Create commits from patch files, useful for email-based workflows and collaboration. Free online tool, no registration required."
category: common
keywords:
- git patch apply
- git commit from patch
- git am command
- git email workflow
- git patch management
- git patch collaboration
- git apply patch file
- git create commit
- linux git am
- macos git am
features:
- Apply changes from a local patch file
- Apply changes from a remote patch file via URL
- Abort the process of applying a patch
- Save failed hunks to reject files
- Create commits from applied patch files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git am

> Apply patch files and create a commit. Useful when receiving commits via email.
> See also: `git format-patch` which can generate patch files.
> More information: <https://git-scm.com/docs/git-am>.

- Apply and commit changes following a local patch file:

`git am {{path/to/file.patch}}`

- Apply and commit changes following a remote patch file:

`curl {{[-L|--location]}} {{https://example.com/file.patch}} | git apply`

- Abort the process of applying a patch file:

`git am --abort`

- Apply as much of a patch file as possible, saving failed hunks to reject files:

`git am --reject {{path/to/file.patch}}`
