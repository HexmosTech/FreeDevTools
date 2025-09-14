---
title: "FG Command - Run Jobs in Foreground | Free DevTools"
name: fg
path: /freedevtools/tldr/common/fg
canonical: "https://hexmos.com/freedevtools/tldr/common/fg/"
description: "Run jobs in foreground with FG command. Control background processes and manage shell jobs efficiently. Free online tool, no registration required."
category: common
keywords:
- foreground process
- fg command
- background jobs
- shell jobs
- linux fg
- macos fg
- bash fg
- terminal control
- process management
- command line fg
features:
- Bring background jobs to foreground
- Control suspended jobs
- Manage shell processes
- Specify jobs by number
- Interact with terminal processes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fg

> Run jobs in foreground.
> See also: `jobs`, `bg`, `disown`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-fg>.

- Bring most recently suspended or running background job to foreground:

`fg`

- Bring a specific job to foreground (run `jobs` to find the job number):

`fg %{{job_number}}`
