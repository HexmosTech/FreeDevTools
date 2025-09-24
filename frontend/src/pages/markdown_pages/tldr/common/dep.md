---
title: "Deploy PHP Apps - Automate Deployment | Online Free DevTools by Hexmos"
name: dep
path: /freedevtools/tldr/common/dep
canonical: "https://hexmos.com/freedevtools/tldr/common/dep/"
description: "Automate PHP deployment with Dep, a deployment automation tool. Quickly deploy your PHP applications with ease. Free online tool, no registration required."
category: common
keywords:
- PHP deployment tool
- PHP deployment automation
- application deployment
- command line deployment
- dep deploy command
- deployer automation
- rollback deployment
- SSH remote host
- command execution
- PHP application
features:
- Initialize Deployer interactively
- Deploy applications to a remote host
- Rollback to the previous working release
- Connect to a remote host via SSH
- Run arbitrary commands on remote hosts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dep

> Deploy PHP applications.
> Note: The Go command `dep` with the same name is deprecated and archived.
> More information: <https://deployer.org>.

- Interactively initialize deployer in the local path (use a framework template with `--template=template`):

`dep init`

- Deploy an application to a remote host:

`dep deploy {{hostname}}`

- Rollback to the previous working release:

`dep rollback`

- Connect to a remote host via SSH:

`dep ssh {{hostname}}`

- List commands:

`dep list`

- Run any arbitrary command on the remote hosts:

`dep run "{{command}}"`

- Display help for a command:

`dep help {{command}}`
