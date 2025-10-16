---
title: "Control Railway Projects - Connect and Manage | Online Free DevTools by Hexmos"
name: railway
path: "/freedevtools/tldr/common/railway/"
canonical: "https://hexmos.com/freedevtools/tldr/common/railway/"
description: "Control Railway projects seamlessly with Railway. Connect to existing projects, create new deployments, and manage environments easily. Free online tool, no registration required."
category: common
keywords:
- railway project management
- railway cli tool
- railway deployment tool
- railway environment variables
- railway project link
- railway project init
- railway run command
- railway up deploy
- railway connect database
- railway cloud deployment
features:
- Connect to Railway projects for streamlined management.
- Initialize new Railway projects directly from the command line.
- Deploy linked project directories with ease.
- Execute local commands using active environment variables.
- Open interactive database shells for enhanced control.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# railway

> Connect code to a Railway project.
> More information: <https://docs.railway.com/reference/cli-api>.

- Login to a Railway account:

`railway login`

- Link to an existing Project under a Railway account or team:

`railway link {{projectId}}`

- Create a new project:

`railway init`

- Run a local command using variables from the active environment:

`railway run {{cmd}}`

- Deploy the linked project directory (if running from a subdirectory, the project root is still deployed):

`railway up`

- Open an interactive shell to a database:

`railway connect`
