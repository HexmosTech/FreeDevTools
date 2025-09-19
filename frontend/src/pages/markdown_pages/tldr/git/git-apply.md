---
title: "Apply Patch - Apply Changes Without Commit | Online Free DevTools by Hexmos"
name: git-apply
path: /freedevtools/tldr/git/git-apply
canonical: "https://hexmos.com/freedevtools/tldr/git/git-apply/"
description: "Apply patch files with git-apply. Incorporate changesets to files and index without commit. Stream remote patches effortlessly. Free online tool, no registration required."
category: common
keywords:
- patch application
- git patch apply
- changeset integration
- git apply index
- git reverse patch
- linux patch utility
- remote patch application
- git diffstat application
- git apply cache
- git patch command
features:
- Apply patch files to working directory
- Stage patched files directly to the index
- Apply patches in reverse
- Preview patch impact with diffstat
- Apply remote patches directly from URLs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git apply

> Apply a patch to files and/or to the index without creating a commit.
> See also: `git am` which applies a patch and also creates a commit.
> More information: <https://git-scm.com/docs/git-apply>.

- Print messages about the patched files:

`git apply {{[-v|--verbose]}} {{path/to/file}}`

- Apply and add the patched files to the index:

`git apply --index {{path/to/file}}`

- Apply a remote patch file:

`curl {{[-L|--location]}} {{https://example.com/file.patch}} | git apply`

- Output diffstat for the input and apply the patch:

`git apply --stat --apply {{path/to/file}}`

- Apply the patch in reverse:

`git apply {{[-R|--reverse]}} {{path/to/file}}`

- Store the patch result in the index without modifying the working tree:

`git apply --cache {{path/to/file}}`
