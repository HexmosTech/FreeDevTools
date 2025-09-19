---
title: "Disown Process - Detach Background Jobs | Online Free DevTools by Hexmos"
name: disown
path: /freedevtools/tldr/common/disown
canonical: "https://hexmos.com/freedevtools/tldr/common/disown/"
description: "Detach processes with Disown. Prevent sub-processes from terminating when the shell exits. Free online tool, no registration required."
category: common
keywords:
- disown process
- detach background job
- prevent process termination
- linux disown
- bash disown
- shell process management
- command line disown
- job control
- process detachment
- background process control
features:
- Detach a specific background job from the shell
- Prevent a process from receiving SIGHUP on shell exit
- Disown all background jobs at once (Bash specific)
- Allow background processes to continue running after logout
- Manage background processes independently of the shell
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# disown

> Allow sub-processes to live beyond the shell that they are attached to.
> See also: `jobs` for finding job numbers.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-disown>.

- Disown the current job:

`disown`

- Disown a specific job (run `jobs` to find the job number):

`disown %{{job_number}}`

- Disown all jobs (Bash only):

`disown -a`

- Keep job (do not disown it), but mark it so that no future SIGHUP is received on shell exit (Bash only):

`disown -h %{{job_number}}`
