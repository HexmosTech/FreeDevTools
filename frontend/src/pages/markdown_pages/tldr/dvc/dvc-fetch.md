---
title: "DVC Fetch - Download DVC Tracked Files | Online Free DevTools by Hexmos"
name: dvc-fetch
path: /freedevtools/tldr/dvc/dvc-fetch
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-fetch/"
description: "Download DVC tracked files with DVC Fetch. Retrieve data artifacts, manage remote repositories, and collaborate on projects easily. Free online tool, no registration required."
category: common
keywords:
- DVC data fetch
- DVC remote download
- DVC tracked files
- DVC artifact retrieval
- DVC repository sync
- DVC data pipeline
- DVC version control
- DVC cloud storage
- DVC data management
- DVC project collaboration
features:
- Download DVC-tracked files from a remote repository
- Fetch specific targets or datasets by name
- Synchronize changes from all branches and tags
- Retrieve data based on specific commits
- Update local workspace with remote data artifacts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dvc fetch

> Download DVC tracked files and directories from a remote repository.
> More information: <https://dvc.org/doc/command-reference/fetch>.

- Fetch the latest changes from the default remote upstream repository (if set):

`dvc fetch`

- Fetch changes from a specific remote upstream repository:

`dvc fetch {{[-r|--remote]}} {{remote_name}}`

- Fetch the latest changes for a specific target/s:

`dvc fetch {{target/s}}`

- Fetch changes for all branch and tags:

`dvc fetch {{[-a|--all-branches]}} {{[-T|--all-tags]}}`

- Fetch changes for all commits:

`dvc fetch {{[-A|--all-commits]}}`
