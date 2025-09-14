---
title: "Git Cat-File - Inspect Git Object Content | Free DevTools"
name: git-cat-file
path: /freedevtools/tldr/git/git-cat-file
canonical: "https://hexmos.com/freedevtools/tldr/git/git-cat-file/"
description: "Inspect Git object content with Git Cat-File. Retrieve object size, type, and content. Free online tool, no registration required."
category: common
keywords:
- Git object inspector
- Git file content viewer
- Git repository browser
- Git blob retriever
- Git tree explorer
- Git commit reader
- Git object size checker
- Git type identifier
- Git cat-file linux
- Git cat-file command
features:
- Display the size of a Git object in bytes
- Determine the type of a Git object (blob, tree, commit, tag)
- Pretty-print the contents of a Git object
- Retrieve specific revisions of an object
- Extract data directly from the Git object database
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git cat-file

> Provide content or type and size information for Git repository objects.
> More information: <https://git-scm.com/docs/git-cat-file>.

- Get the [s]ize of the HEAD commit in bytes:

`git cat-file -s HEAD`

- Get the [t]ype (blob, tree, commit, tag) of a given Git object:

`git cat-file -t {{8c442dc3}}`

- Pretty-[p]rint the contents of a given Git object based on its type:

`git cat-file -p {{HEAD~2}}`
