---
title: "Create RPM Repository - Initialize Packages on Linux | Online Free DevTools by Hexmos"
name: createrepo
path: "/freedevtools/tldr/linux/createrepo/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/createrepo/"
description: "Create RPM repository with createrepo. Quickly initialize package metadata for your Linux distributions. Free online tool, no registration required."
category: linux
keywords:
- rpm repository creator
- linux package manager
- yum repository tool
- rpm metadata generator
- create rpm database
- rpm package index
- linux repo management
- rpm repository builder
- createrepo linux
- update rpm metadata
features:
- Initialize RPM repositories
- Generate package metadata XML
- Create SQLite database for RPMs
- Exclude specific RPM packages
- Specify checksum algorithms
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# createrepo

> Initializes an RPM repository in a directory, including all XML and SQLite files.
> More information: <https://manned.org/createrepo>.

- Initialize a basic repository in a directory:

`createrepo {{path/to/directory}}`

- Initialize a repository, exclude test RPMs and display verbose logs:

`createrepo {{[-v|--verbose]}} {{[-x|--excludes]}} {{test_*.rpm}} {{path/to/directory}}`

- Initialize a repository, using SHA1 as the checksum algorithm, and ignoring symbolic links:

`createrepo {{[-S|--skip-symlinks]}} {{[-s|--checksum]}} {{sha1}} {{path/to/directory}}`
