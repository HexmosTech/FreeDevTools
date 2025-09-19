---
title: "DVC Garbage Collect - Remove Unused Files | Online Free DevTools by Hexmos"
name: dvc-gc
path: /freedevtools/tldr/dvc/dvc-gc
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-gc/"
description: "Garbage collect files with DVC and remove unused data from cache and remote storage. Clean up your DVC project efficiently. Free online tool, no registration required."
category: common
keywords:
- dvc garbage collection
- data version control cleanup
- dvc cache management
- dvc remote storage cleanup
- dvc unused data removal
- dvc project optimization
- dvc data pipeline gc
- dvc disk space recovery
- dvc repository maintenance
- dvc stale data removal
features:
- Removes unused files from the DVC cache.
- Cleans up remote storage to free up space.
- Identifies and deletes stale data references.
- Supports garbage collection across branches and tags.
- Integrates with cloud storage for comprehensive cleanup.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dvc gc

> Remove unused files and directories from the cache or remote storage.
> More information: <https://dvc.org/doc/command-reference/gc>.

- Garbage collect from the cache, keeping only versions referenced by the current workspace:

`dvc gc {{[-w|--workspace]}}`

- Garbage collect from the cache, keeping only versions referenced by branch, tags, and commits:

`dvc gc {{[-a|--all-branches]}} {{[-T|--all-tags]}} {{[-a|--all-commits]}}`

- Garbage collect from the cache, including the default cloud remote storage (if set):

`dvc gc {{[-a|--all-commits]}} {{[-c|--cloud]}}`

- Garbage collect from the cache, including a specific cloud remote storage:

`dvc gc {{[-a|--all-commits]}} {{[-c|--cloud]}} {{[-r|--remote]}} {{remote_name}}`
