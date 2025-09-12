---
title: "OSTree Control - Version Files Like Git | Free DevTools"
name: ostree
path: /freedevtools/tldr/linux/ostree
canonical: "https://hexmos.com/freedevtools/tldr/linux/ostree/"
description: "Control versioned files with OSTree, a Git-like tool for OS root filesystems. Manage snapshots and track changes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - OSTree version control
  - binary file management
  - OS root filesystem versioning
  - immutable OS images
  - commit snapshots
  - branch management
  - git-like versioning
  - Fedora Silverblue
  - Fedora IoT
  - Fedora CoreOS
features:
  - Initialize an OSTree repository.
  - Create commit snapshots of files.
  - Display files within a specific commit.
  - Show metadata associated with a commit.
  - List commit history for a branch.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ostree

> Version control for binary files similar to `git` but optimized for operating system root filesystems.
> OSTree is the foundation for immutable image-based operating systems such as Fedora Silverblue, Fedora IoT or Fedora CoreOS.
> More information: <https://ostreedev.github.io/ostree>.

- Initialize a repository of the files in `$PWD` with metadata in `$PWD/path/to/repo`:

`ostree init --repo {{path/to/repo}}`

- Create a commit (snapshot) of the files:

`ostree commit --repo {{path/to/repo}} --branch {{branch_name}}`

- Show files in commit:

`ostree ls --repo {{path/to/repo}} {{commit_id}}`

- Show metadata of commit:

`ostree show --repo {{path/to/repo}} {{commit_id}}`

- Show list of commits:

`ostree log --repo {{path/to/repo}} {{branch_name}}`

- Show repo summary:

`ostree summary --repo {{path/to/repo}} --view`

- Show available refs (branches):

`ostree refs --repo {{path/to/repo}}`
