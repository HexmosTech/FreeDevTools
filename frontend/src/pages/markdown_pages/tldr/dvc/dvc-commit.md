---
title: "DVC Commit - Record Data Changes | Online Free DevTools by Hexmos"
name: dvc-commit
path: /freedevtools/tldr/dvc/dvc-commit
canonical: "https://hexmos.com/freedevtools/tldr/dvc/dvc-commit/"
description: "Record data changes instantly with DVC Commit. Track versions of your data, reproduce experiments and collaborate efficiently. Free online tool, no registration required."
category: common
keywords:
- DVC commit
- data version control
- track data changes
- dvc pipeline
- dvc data registry
- dvc experiments
- data reproducibility
- dvc versioning
- machine learning data
- version control system
features:
- Commit changes to DVC-tracked files
- Track modifications in data and code
- Recursively commit all DVC-tracked files in a directory
- Integrate data versioning into ML pipelines
- Facilitate collaboration on data science projects
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dvc commit

> Record changes to DVC-tracked files in the project.
> More information: <https://dvc.org/doc/command-reference/commit>.

- Commit changes to all DVC-tracked files and directories:

`dvc commit`

- Commit changes to a specified DVC-tracked target:

`dvc commit {{target}}`

- Recursively commit all DVC-tracked files in a directory:

`dvc commit {{[-R|--recursive]}} {{path/to/directory}}`
