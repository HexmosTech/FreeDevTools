---
title: "DVC Add - Control Data Versions | Online Free DevTools by Hexmos"
name: dvc-add
path: "/freedevtools/tldr/dvc/dvc-add/"
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-add/"
description: "Control data versions with DVC Add. Track changes, manage datasets, and maintain reproducible data pipelines. Free online tool, no registration required."
category: common
keywords:
- DVC data versioning
- DVC add command
- data version control
- dataset management
- DVC pipeline
- reproducible data
- DVC file tracking
- DVC dependency tracking
- DVC add directory
- DVC .dvc file
features:
- Add files to DVC index
- Add directories to DVC index
- Recursively add files in a directory
- Specify custom .dvc filenames
- Track changes to data files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dvc add

> Add changed files to the index.
> More information: <https://dvc.org/doc/command-reference/add>.

- Add a single target file to the index:

`dvc add {{path/to/file}}`

- Add a target directory to the index:

`dvc add {{path/to/directory}}`

- Recursively add all the files in a given target directory:

`dvc add --recursive {{path/to/directory}}`

- Add a target file with a custom `.dvc` filename:

`dvc add --file {{custom_name.dvc}} {{path/to/file}}`
