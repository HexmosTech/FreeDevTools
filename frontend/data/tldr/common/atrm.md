---
title: "Atrm - Remove Scheduled Jobs | Online Free DevTools by Hexmos"
name: atrm
path: "/freedevtools/tldr/common/atrm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/atrm/"
description: "Remove scheduled jobs with Atrm. Manage and delete jobs created using the `at` command, ensuring efficient system resource management. Free online tool, no registration required."
category: common
keywords:
- atrm remove jobs
- atrm delete scheduled tasks
- linux atrm command
- macos atrm command
- at command scheduler
- batch command remover
- atq job list
- system job removal
- command line job manager
- atrm job deletion
features:
- Remove specific jobs by ID
- Delete multiple scheduled jobs at once
- Integrate with `atq` to list job IDs
- Manage system job queue
- Delete jobs scheduled using `batch` command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# atrm

> Remove jobs scheduled by `at` or `batch` commands.
> To find job numbers use `atq`.
> More information: <https://manned.org/atrm>.

- Remove job number 10:

`atrm {{10}}`

- Remove many jobs, separated by spaces:

`atrm {{15}} {{17}} {{22}}`
