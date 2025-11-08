---
title: "Launch Git Daemon - Share Repositories | Online Free DevTools by Hexmos"
name: git-daemon
path: "/freedevtools/tldr/git/git-daemon/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-daemon/"
description: "Launch Git daemon with Git repository hosting, allowing sharing and access control. Securely manage Git access using command line. Free online tool, no registration required."
category: common
keywords:
- git repository server
- git daemon configuration
- git access control
- git repository hosting
- git read-only server
- git network server
- git directory sharing
- linux git server
- macos git server
- git remote access
features:
- Launch Git daemon with directory whitelisting
- Serve Git repositories from a base directory
- Enable write access for Git clients
- Display informative errors in the Git daemon log
- Reuse addresses for faster Git daemon restarts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git daemon

> A really simple server for Git repositories.
> More information: <https://git-scm.com/docs/git-daemon>.

- Launch a Git daemon with a whitelisted set of directories:

`git daemon --export-all {{path/to/directory1 path/to/directory2 ...}}`

- Launch a Git daemon with a specific base directory and allow pulling from all sub-directories that look like Git repositories:

`git daemon --base-path={{path/to/directory}} --export-all --reuseaddr`

- Launch a Git daemon for the specified directory, verbosely printing log messages and allowing Git clients to write to it:

`git daemon {{path/to/directory}} --enable=receive-pack --informative-errors --verbose`
