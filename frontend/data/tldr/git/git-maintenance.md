---
title: "Git Maintenance - Optimize Repository Data | Online Free DevTools by Hexmos"
name: git-maintenance
path: "/freedevtools/tldr/git/git-maintenance/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-maintenance/"
description: "Optimize Git repository data with Git Maintenance. Run tasks to improve repository performance, reduce size, and ensure data integrity. Free online tool, no registration required."
category: common
keywords:
- git maintenance commands
- git repository optimization
- git data integrity
- git maintenance tasks
- git repository cleanup
- git commit graph
- git gc
- git incremental repack
- git loose objects
- git pack refs
features:
- Register repositories for scheduled maintenance
- Start background maintenance schedules
- Stop background maintenance schedules
- Unregister repositories from maintenance lists
- Run specific maintenance tasks on demand
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git maintenance

> Run tasks to optimize Git repository data.
> More information: <https://git-scm.com/docs/git-maintenance>.

- Register the current repository in the user's list of repositories to daily have maintenance run:

`git maintenance register`

- Schedule maintenance tasks to run on the current repository every hour:

`git maintenance start`

- Halt the background maintenance schedule for the current repository:

`git maintenance stop`

- Remove the current repository from the user's maintenance repository list:

`git maintenance unregister`

- Run a specific maintenance task on the current repository:

`git maintenance run --task {{commit-graph|gc|incremental-repack|loose-objects|pack-refs|prefetch}}`
