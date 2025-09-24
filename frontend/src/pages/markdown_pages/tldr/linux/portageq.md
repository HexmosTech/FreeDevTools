---
title: "Portage Query - Manage Gentoo Packages | Online Free DevTools by Hexmos"
name: portageq
path: /freedevtools/tldr/linux/portageq
canonical: "https://hexmos.com/freedevtools/tldr/linux/portageq/"
description: "Manage Gentoo packages easily with Portage Query. Inspect package metadata, repositories, and environment variables. Free online tool, no registration required."
category: linux
keywords:
- gentoo package manager
- portage package manager
- linux package query
- portage query tool
- ebuild metadata
- repository configuration
- gentoo environment variables
- portage package information
- package dependency analysis
- software package management
features:
- Query Portage environment variables
- Display Portage repository configurations
- List repositories by priority
- Retrieve package metadata from ebuilds
- Inspect package dependencies
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# portageq

> Query for information about Portage, the Gentoo Linux package manager.
> Queryable Portage-specific environment variables are listed in `/var/db/repos/gentoo/profiles/info_vars`.
> More information: <https://wiki.gentoo.org/wiki/Portageq>.

- Display the value of a Portage-specific environment variable:

`portageq envvar {{variable}}`

- Display a detailed list of repositories configured with Portage:

`portageq repos_config /`

- Display a list of repositories sorted by priority (highest first):

`portageq get_repos /`

- Display a specific piece of metadata about an atom (i.e. package name including the version):

`portageq metadata / {{ebuild|porttree|binary|...}} {{category}}/{{package}} {{BDEPEND|DEFINED_PHASES|DEPEND|...}}`
