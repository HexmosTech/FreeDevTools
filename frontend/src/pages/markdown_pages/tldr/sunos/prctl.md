---
title: prctl
name: prctl
path: /freedevtools/tldr/sunos/prctl
canonical: "https://hexmos.com/freedevtools/tldr/sunos/prctl/"
description: Get or set the resource controls of running processes, tasks, and projects.
category: sunos
keywords:
- process resource control management
- task resource control management
- project resource control management
- examine process limits and permissions
- machine parsable process information
- specific process limit retrieval
- control running processes
- system resource monitoring
- system administration tools
- solaris resource management
features:
- examine process limits
- examine process permissions
- retrieve process limits in machine parsable format
- get specific process limit
- manage process resources
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prctl

> Get or set the resource controls of running processes, tasks, and projects.
> More information: <https://www.unix.com/man-page/sunos/1/prctl>.

- Examine process limits and permissions:

`prctl {{pid}}`

- Examine process limits and permissions in machine parsable format:

`prctl -P {{pid}}`

- Get specific limit for a running process:

`prctl -n process.max-file-descriptor {{pid}}`
