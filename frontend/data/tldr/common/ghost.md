---
title: "Manage Ghost Blogs - Deploy and Control | Online Free DevTools by Hexmos"
name: ghost
path: "/freedevtools/tldr/common/ghost/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ghost/"
description: "Manage Ghost blogs and headless CMS deployments with Ghost. Install, start, restart, and troubleshoot your Ghost instance easily. Free online tool, no registration required."
category: common
keywords:
- ghost blog management
- ghost cms deployment
- ghost command line
- ghost instance control
- ghost blogging platform
- ghost troubleshooting
- ghost log analysis
- ghost configuration editor
- ghost process monitoring
- ghost headless cms
features:
- Install a Ghost blog in the current directory.
- Start and restart Ghost instances.
- Check system health for potential issues.
- View and analyze Ghost logs for debugging.
- View and edit Ghost configuration settings.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ghost

> A blogging platform and headless CMS.
> More information: <https://ghost.org>.

- Install Ghost in the current directory:

`ghost install`

- Start an instance of Ghost:

`ghost start`

- Restart the Ghost instance:

`ghost restart`

- Check the system for any potential hiccups while installing or updating Ghost:

`ghost doctor`

- View the logs of a Ghost instance:

`ghost log {{name}}`

- Run a Ghost instance directly (used by process managers and for debugging):

`ghost run`

- View running Ghost processes:

`ghost ls`

- View or edit Ghost configuration:

`ghost config {{key}} {{value}}`
