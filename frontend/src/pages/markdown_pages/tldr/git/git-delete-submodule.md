---
title: "Delete Git Submodule - Manage Repository Submodules | Free DevTools"
name: git-delete-submodule
path: /freedevtools/tldr/git/git-delete-submodule
canonical: "https://hexmos.com/freedevtools/tldr/git/git-delete-submodule/"
description: "Delete Git submodule paths with Git Delete Submodule. Remove submodule configurations and clean up repository. Free online tool, no registration required."
category: common
keywords:
- git submodule delete
- git remove submodule
- git repository management
- git submodule cleanup
- git submodule configuration
- git command line tool
- git extras
- git submodule path
- git repository submodule
- git submodule removal
features:
- Deletes a specified submodule from a Git repository.
- Removes the submodule's entry from the `.gitmodules` file.
- De-registers the submodule from `.git/config`.
- Removes the submodule's directory from the working tree.
- Cleans up submodule-related files and configurations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git delete-submodule

> Delete a submodule from a `git` repository.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-delete-submodule>.

- Delete a specific submodule:

`git delete-submodule {{path/to/submodule}}`
