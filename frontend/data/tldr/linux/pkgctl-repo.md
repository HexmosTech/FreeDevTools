---
title: "Pkgctl Repo - Manage Git Repositories | Online Free DevTools by Hexmos"
name: pkgctl-repo
path: "/freedevtools/tldr/linux/pkgctl-repo/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkgctl-repo/"
description: "Manage Arch Linux Git package repositories with Pkgctl Repo. Clone, create, switch versions, and open repository websites. Free online tool, no registration required."
category: linux
keywords:
  - Arch Linux package repository management
  - pkgctl repo git management
  - GitLab package repository creation
  - Arch Linux package version control
  - pkgctl repo clone command
  - Linux git repository manager
  - Arch Linux package building
  - pkgctl repo web command
  - Git repository version switching
  - GitLab package repository API
features:
  - Clone Arch Linux package repositories
  - Create new GitLab package repositories
  - Switch package repositories to specific versions
  - Open package repository websites directly
  - Manage Git repositories for Arch Linux packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkgctl repo

> Manage Git packaging repositories and their configuration for Arch Linux.
> See also: `pkgctl`.
> More information: <https://manned.org/pkgctl-repo.1>.

- Clone a package repository (requires setting an SSH key in your Arch Linux GitLab account):

`pkgctl repo clone {{pkgname}}`

- Clone a package repository over HTTPS:

`pkgctl repo clone --protocol https {{pkgname}}`

- Create a new GitLab package repository and clone it after creation (requires valid GitLab API authentication):

`pkgctl repo create {{pkgbase}}`

- Switch a package repository to a specified version:

`pkgctl repo switch {{version}} {{pkgbase}}`

- Open a package repository's website:

`pkgctl repo web {{pkgbase}}`
