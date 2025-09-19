---
title: "Manage RPM Configuration - Handle Package Upgrade Files | Online Free DevTools by Hexmos"
name: rpmconf
path: /freedevtools/tldr/linux/rpmconf
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpmconf/"
description: "Manage RPM configuration with rpmconf to resolve leftover RPMNEW and RPMSAVE files after package upgrades. Resolve conflicts and clean orphaned files. Free online tool, no registration required."
category: linux
keywords:
  - RPM configuration manager
  - RPM package upgrade files
  - RPMNEW file resolver
  - RPMSAVE file resolver
  - Linux configuration management
  - Package upgrade conflict resolution
  - Orphaned file cleaner
  - RPM package management
  - Linux RPM tool
  - System configuration tool
features:
  - Lists leftover RPMNEW and RPMSAVE files
  - Interactively resolves package upgrade conflicts
  - Deletes orphaned RPMNEW and RPMSAVE files
  - Provides a clean command to automate file cleanup
  - Handles RPM configuration files after updates
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rpmconf

> Handle RPMNEW, RPMSAVE and RPMORIG files left over by package upgrades.
> See also: `rpm`.
> More information: <https://github.com/xsuchy/rpmconf>.

- List leftover files and interactively choose what to do with each of them:

`sudo rpmconf --all`

- Delete orphaned RPMNEW and RPMSAVE files:

`sudo rpmconf --all --clean`
