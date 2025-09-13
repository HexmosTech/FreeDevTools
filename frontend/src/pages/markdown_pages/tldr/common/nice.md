---
title: "Nice Command - Control Process Priority | Free DevTools"
name: nice
path: /freedevtools/tldr/common/nice
canonical: "https://hexmos.com/freedevtools/tldr/common/nice/"
description: "Control process priority with the Nice command. Adjust niceness values to manage CPU resources effectively. Free online tool, no registration required."
category: common
keywords:
- process priority control
- adjust process niceness
- linux nice command
- macos nice command
- unix nice command
- command line priority scheduler
- cpu scheduling tool
- alter process priority
- process management linux
- process management macos
features:
- Set process priority using niceness values.
- Launch programs with altered scheduling priority.
- Adjust the CPU usage for a process.
- Prioritize important tasks by increasing their priority.
- Lower priority of background processes to free up resources.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nice

> Execute a program with a custom scheduling priority (niceness).
> Niceness values range from -20 (the highest priority) to 19 (the lowest).
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/nice-invocation.html>.

- Launch a program with altered priority:

`nice -{{niceness_value}} {{command}}`

- Define the priority with an explicit option:

`nice {{[-n|--adjustment]}} {{niceness_value}} {{command}}`
