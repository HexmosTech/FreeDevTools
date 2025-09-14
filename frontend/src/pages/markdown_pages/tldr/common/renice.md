---
title: "Renice - Control Process Priority | Free DevTools"
name: renice
path: /freedevtools/tldr/common/renice
canonical: "https://hexmos.com/freedevtools/tldr/common/renice/"
description: "Control process priority with Renice. Adjust scheduling priority on Linux and macOS systems using this command line tool. Free online tool, no registration required."
category: common
keywords:
- process priority control
- renice process scheduling
- linux renice command
- macos renice command
- process niceness value
- change process priority
- adjust process scheduling
- process management linux
- process management macos
- command line renice
features:
- Adjust process priority by PID
- Modify priority of all processes owned by a user
- Change priority for processes in a process group
- Increase or decrease process niceness values
- Alter the scheduling favorability of running processes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# renice

> Alter the scheduling priority/niceness of running processes.
> Niceness values range from -20 (most favorable to the process) to 19 (least favorable to the process).
> See also: `nice`.
> More information: <https://manned.org/renice.1p>.

- Increase/decrease the priority of a running [p]rocess:

`renice -n {{3}} -p {{pid}}`

- Increase/decrease the priority of all processes owned by a [u]ser:

`renice -n {{-4}} -u {{uid|user}}`

- Increase/decrease the priority of all processes that belong to a process [g]roup:

`renice -n {{5}} -g {{process_group}}`
