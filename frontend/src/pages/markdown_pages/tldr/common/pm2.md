---
title: "PM2 - Manage Node.js Processes | Free DevTools"
name: pm2
path: /freedevtools/tldr/common/pm2
canonical: "https://hexmos.com/freedevtools/tldr/common/pm2/"
description: "Manage Node.js processes with PM2. Monitor, start, stop, and restart applications with ease. Control your Node.js deployments. Free online tool, no registration required."
category: common
keywords:
- node.js process manager
- pm2 process control
- node.js application monitoring
- pm2 log management
- pm2 configuration tool
- linux process manager
- macos process manager
- pm2 deployment tool
- node.js process automation
- pm2 startup script
features:
- Start and name Node.js processes for easy management
- Monitor real-time performance of Node.js applications
- Stop, restart, and manage Node.js processes efficiently
- Dump and resurrect process states for persistence
- Manage application logs and configurations centrally
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pm2

> Process manager for Node.js.
> Used for log management, monitoring and configuring processes.
> More information: <https://pm2.keymetrics.io>.

- Start a process with a name that can be used for later operations:

`pm2 start {{app.js}} --name {{application_name}}`

- List processes:

`pm2 list`

- Monitor all processes:

`pm2 monit`

- Stop a process:

`pm2 stop {{application_name}}`

- Restart a process:

`pm2 restart {{application_name}}`

- Dump all processes for resurrecting them later:

`pm2 save`

- Resurrect previously dumped processes:

`pm2 resurrect`
