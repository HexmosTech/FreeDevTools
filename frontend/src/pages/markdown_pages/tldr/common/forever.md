---
title: "Forever Process Manager - Control Node.js Apps | Online Free DevTools by Hexmos"
name: forever
path: /freedevtools/tldr/common/forever
canonical: "https://hexmos.com/freedevtools/tldr/common/forever/"
description: "Control Node.js processes with Forever Process Manager. Ensure continuous uptime and automatic restarts for your Node.js applications. Free online tool, no registration required."
category: common
keywords:
- Node.js process manager
- forever daemon
- forever start
- forever stop
- forever list
- Node.js server monitoring
- Node.js application restart
- forever linux
- forever macos
- Node.js process control
features:
- Start Node.js applications as daemons
- Automatically restart Node.js applications after crashes
- List all running forever processes
- Stop specific forever processes by ID, PID, or script name
- Monitor Node.js application uptime
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# forever

> Server-side JavaScript application that makes sure Node.js applications run indefinitely (restarts after exit).
> More information: <https://github.com/foreversd/forever#usage>.

- Start running a file forever (as a daemon):

`forever {{script}}`

- List running "forever" processes (along with IDs and other details of "forever" processes):

`forever list`

- Stop a running "forever" process:

`forever stop {{ID|pid|script}}`
