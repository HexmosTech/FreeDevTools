---
title: "List Scheduled Jobs - Control atq jobs | Online Free DevTools by Hexmos"
name: atq
path: "/freedevtools/tldr/common/atq/"
canonical: "https://hexmos.com/freedevtools/tldr/common/atq/"
description: "List scheduled jobs with atq, control at jobs and batch commands on Linux. Free online tool, no registration required. Manage job queues and user permissions."
category: common
keywords:
- job scheduler
- list scheduled jobs
- atq command
- linux at command
- batch command
- at jobs
- queue management
- user job control
- system administration
- job queue listing
features:
- Show all scheduled jobs for the current user.
- Filter jobs based on the specified queue.
- List jobs scheduled by all users (requires superuser privileges).
- Identify the unique ID of each scheduled job.
- Manage batch and at jobs effectively.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# atq

> Show jobs scheduled by `at` or `batch` commands.
> More information: <https://manned.org/atq>.

- Show the current user's scheduled jobs:

`atq`

- Show jobs from the 'a' [q]ueue (queues have single-character names):

`atq -q {{a}}`

- Show jobs of all users (run as superuser):

`sudo atq`
