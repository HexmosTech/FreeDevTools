---
title: "Sourcehut Control - Manage Repositories and Builds | Online Free DevTools by Hexmos"
name: hut
path: "/freedevtools/tldr/common/hut/"
canonical: "https://hexmos.com/freedevtools/tldr/common/hut/"
description: "Control Sourcehut repositories and builds with hut, a command-line interface. List repositories, create new projects, and manage build jobs. Free online tool, no registration required."
category: common
keywords:
- Sourcehut CLI tool
- sr.ht command line
- Git repository manager
- Mercurial repository manager
- Build job manager
- Sourcehut builds CLI
- Sourcehut repository creation
- hut init command
- hut builds list
- hut ssh
features:
- Initialize Sourcehut configuration
- List Git and Mercurial repositories
- Create public repositories on Sourcehut
- List jobs on builds.sr.ht
- SSH into build job containers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hut

> A CLI tool for sourcehut.
> More information: <https://manned.org/hut>.

- Initialize `hut`'s configuration file (this will prompt for an OAuth2 access token, which is required to use `hut`):

`hut init`

- List Git/Mercurial repositories:

`hut {{git|hg}} list`

- Create a public Git/Mercurial repository:

`hut {{git|hg}} create {{name}}`

- List jobs on <https://builds.sr.ht>:

`hut builds list`

- Show the status of a job:

`hut builds show {{job_id}}`

- SSH into a job container:

`hut ssh {{job_id}}`
