---
title: "Fossil Commit - Create Repository Versions | Free DevTools"
name: fossil-commit
path: /freedevtools/tldr/common/fossil-commit
canonical: "https://hexmos.com/freedevtools/tldr/common/fossil-commit/"
description: "Create Fossil repository versions with Fossil Commit. Manage changesets, add comments, and specify files for commit. Free online tool, no registration required."
category: common
keywords:
- fossil commit
- fossil scm
- fossil version control
- fossil repository
- fossil changeset
- commit changes
- scm commit
- command line commit
- fossil commit message
- fossil ci
features:
- Commit all changes in the current checkout
- Specify a comment for the new version
- Read comment from a file for the commit
- Commit changes from specific files
- Create a new Fossil repository version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fossil commit

> Commit files to a Fossil repository.
> More information: <https://fossil-scm.org/home/help/commit>.

- Create a new version containing all the changes in the current checkout; user will be prompted for a comment:

`fossil {{[ci|commit]}}`

- Create a new version containing all the changes in the current checkout, using the specified [m]essage:

`fossil {{[ci|commit]}} {{[-m|--comment]}} "{{comment}}"`

- Create a new version containing all the changes in the current checkout with a comment read from a specific file:

`fossil {{[ci|commit]}} {{[-M|--message-file]}} {{path/to/commit_message_file}}`

- Create a new version containing changes from the specified files; user will be prompted for a comment:

`fossil {{[ci|commit]}} {{path/to/file1 path/to/file2 ...}}`
