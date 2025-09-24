---
title: "Manage Repositories - Control VCS at Once | Online Free DevTools by Hexmos"
name: mr
path: /freedevtools/tldr/common/mr
canonical: "https://hexmos.com/freedevtools/tldr/common/mr/"
description: "Manage multiple VCS repositories with MR. Update, checkout, and status your git, hg, and bzr repos simultaneously. Free online tool, no registration required."
category: common
keywords:
- vcs manager
- multiple repository manager
- git repository manager
- hg repository manager
- bzr repository manager
- version control manager
- repository updater
- batch repository operations
- myrepos cli
- repository synchronization
features:
- Manage multiple version control repositories simultaneously
- Update repositories in parallel using concurrent jobs
- Display the status of all registered repositories
- Checkout all repositories to the latest version
- Register a new repository for management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mr

> Manage all of your version control repositories at once.
> More information: <https://myrepos.branchable.com>.

- Register a repository:

`mr register`

- Update repositories in 5 concurrent jobs:

`mr {{[-j|--jobs]}} {{5}} update`

- Print the status of all repositories:

`mr status`

- Checkout all repositories to the latest version:

`mr checkout`
