---
title: "Control Background Jobs - Resume Processes | Online Free DevTools by Hexmos"
name: bg
path: "/freedevtools/tldr/common/bg/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bg/"
description: "Control background jobs with bg. Resume suspended processes and keep them running in the background using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- background job control
- resume suspended process
- linux background process
- macOS background process
- bash background jobs
- command line background
- bg command tutorial
- process management linux
- job control shell
- terminal background tasks
features:
- Resume the most recently suspended job
- Run suspended jobs in the background
- Specify a job number to resume
- Manage multiple background processes
- Control terminal processes via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bg

> Resume suspended jobs (e.g. using `<Ctrl z>`), and keeps them running in the background.
> See also: `jobs`, `fg`, `disown`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-bg>.

- Resume the most recently suspended job and run it in the background:

`bg`

- Resume a specific job and run it in the background (run `jobs` to find the job number):

`bg %{{job_number}}`
