---
title: "Control etckeeper - Track Configs in Git | Online Free DevTools by Hexmos"
name: etckeeper
path: /freedevtools/tldr/linux/etckeeper
canonical: "https://hexmos.com/freedevtools/tldr/linux/etckeeper/"
description: "Control system configuration files with etckeeper. Track changes, manage commits, and run Git commands directly within /etc. Free online tool, no registration required."
category: linux
keywords:
- linux configuration tracking
- git configuration management
- etc directory version control
- etckeeper commit changes
- etckeeper init repository
- linux configuration backup
- system configuration versioning
- etckeeper VCS commands
- etckeeper uninit repository
- linux config file monitoring
features:
- Initialize a Git repository in /etc
- Commit configuration changes to Git
- Execute arbitrary Git commands within /etc
- Check for uncommitted modifications
- Destroy the Git repository and stop tracking
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# etckeeper

> Track system configuration files in Git.
> More information: <https://manned.org/etckeeper>.

- Set up a Git repo and perform various setup tasks (run from `/etc`):

`sudo etckeeper init`

- Commit all changes in `/etc`:

`sudo etckeeper commit {{message}}`

- Run arbitrary Git commands:

`sudo etckeeper vcs {{status}}`

- Check if there are uncommitted changes (only returns an exit code):

`sudo etckeeper unclean`

- Destroy existing repo and stop tracking changes:

`sudo etckeeper uninit`
