---
title: "Waitpid - Control Process Termination | Free DevTools"
name: waitpid
path: /freedevtools/tldr/linux/waitpid
canonical: "https://hexmos.com/freedevtools/tldr/linux/waitpid/"
description: "Control process termination with Waitpid. Monitor, manage, and debug processes by waiting for their completion. Free online tool, no registration required."
category: linux
keywords:
  - process termination control
  - process management command
  - waitpid linux
  - waitpid macos
  - process monitoring tool
  - signal handling command
  - background process control
  - child process monitoring
  - process status check
  - command line process wait
features:
  - Wait for specific processes to terminate
  - Set a timeout for process termination
  - Ignore errors if processes have already exited
  - Wait until a specific number of processes have exited
  - Display help information for the command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# waitpid

> Wait for the termination of arbitrary processes.
> See also: `wait`.
> More information: <https://manned.org/waitpid.1>.

- Sleep until all processes whose PIDs have been specified have exited:

`waitpid {{pid1 pid2 ...}}`

- Sleep for at most `n` seconds:

`waitpid {{[-t|--timeout]}} {{n}} {{pid1 pid2 ...}}`

- Do not error if specified PIDs have already exited:

`waitpid {{[-e|--exited]}} {{pid1 pid2 ...}}`

- Sleep until `n` of the specified processes have exited:

`waitpid {{[-c|--count]}} {{n}} {{pid1 pid2 ...}}`

- Display help:

`waitpid {{[-h|--help]}}`
