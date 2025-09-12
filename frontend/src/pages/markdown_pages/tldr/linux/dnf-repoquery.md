---
title: "Query Packages - DNF Repoquery Command | Free DevTools"
name: dnf-repoquery
path: /freedevtools/tldr/linux/dnf-repoquery
canonical: "https://hexmos.com/freedevtools/tldr/linux/dnf-repoquery/"
description: "Query package information with DNF Repoquery.  List dependencies, search repositories, and manage packages efficiently using this powerful Linux command. Free online tool, no registration required."
category: linux
keywords:
  - linux package query
  - dnf repoquery command
  - linux package manager
  - rpm query command
  - dnf dependency list
  - linux system administration
  - package information retrieval
  - red hat package management
  - fedora package query
  - centos package manager
features:
  - List package dependencies
  - Search for packages in repositories
  - Display package information (version, size, etc.)
  - Check package status (installed, updated, etc.)
  - Manage installed packages using query results
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dnf repoquery

> Query packages for information.
> More information: <https://dnf.readthedocs.io/en/latest/command_ref.html#repoquery-command>.

- Query a package for its dependencies:

`dnf {{[rq|repoquery]}} --deplist {{package}}`
