---
title: "View Jobs - Manage Shell Processes | Free DevTools"
name: jobs
path: /freedevtools/tldr/linux/jobs
canonical: "https://hexmos.com/freedevtools/tldr/linux/jobs/"
description: "Manage shell processes instantly with the jobs command. View, control, and list process information with ease. Free online tool, no registration required."
category: linux
keywords:
  - shell process management
  - bash jobs command
  - linux process viewer
  - command line process control
  - process id listing
  - view running processes
  - list stopped processes
  - manage background processes
  - shell job control
  - process status information
features:
  - View all background jobs spawned by the current shell.
  - List jobs with their associated process IDs.
  - Display jobs with changed status since the last check.
  - Show only process IDs for concise output.
  - Differentiate between running and stopped processes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jobs

> Shell builtin for viewing information about processes spawned by the current shell.
> Options other than `-l` and `-p` are exclusive to `bash`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-jobs>.

- View jobs spawned by the current shell:

`jobs`

- List jobs and their process IDs:

`jobs -l`

- Display information about jobs with changed status:

`jobs -n`

- Display only process IDs:

`jobs -p`

- Display running processes:

`jobs -r`

- Display stopped processes:

`jobs -s`
