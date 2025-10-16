---
title: "Prctl - Control Process Resources on SunOS | Online Free DevTools by Hexmos"
name: prctl
path: "/freedevtools/tldr/sunos/prctl/"
canonical: "https://hexmos.com/freedevtools/tldr/sunos/prctl/"
description: "Control process resources with Prctl. Manage resource limits, permissions, and project settings on SunOS. Free online tool, no registration required."
category: sunos
keywords:
  - sunos process resource control
  - process limit management sunos
  - project resource control sunos
  - task resource control sunos
  - sunos system administration
  - solaris process monitoring
  - machine parsable process data
  - sunos prctl command
  - resource limit retrieval sunos
  - system resource management sunos
features:
  - examine process resource limits on SunOS
  - examine process permissions on SunOS
  - retrieve specific process limits
  - manage process resource controls
  - get machine-parsable process information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
