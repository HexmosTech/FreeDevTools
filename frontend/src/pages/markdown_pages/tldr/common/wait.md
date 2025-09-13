---
title: "Wait Command - Control Process Completion | Free DevTools"
name: wait
path: /freedevtools/tldr/common/wait
canonical: "https://hexmos.com/freedevtools/tldr/common/wait/"
description: "Control process completion with the Wait Command. Monitor process states and manage job execution using shell commands. Free online tool, no registration required."
category: common
keywords:
- process wait command
- shell process control
- bash wait command
- process completion signal
- job control linux
- process status monitor
- command line process manager
- process id wait
- job number wait
- bash process termination
features:
- Wait for a specific process by PID
- Pause execution until all background processes complete
- Monitor job status based on job number
- Return exit status codes of completed processes
- Suspend execution until process completion
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wait

> Wait for a process to complete before proceeding.
> See also: `ps` to view information about running processes and `waitpid`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-wait>.

- Wait for a process to finish given its process ID (PID) and return its exit status:

`wait {{pid}}`

- Wait for all processes known to the invoking shell to finish:

`wait`

- Wait for a job to finish (run `jobs` to find the job number):

`wait %{{job_number}}`

- Display help:

`wait --help`
