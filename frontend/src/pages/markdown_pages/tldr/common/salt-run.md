---
title: "Salt-Run - Control Salt Runners on Minions | Free DevTools"
name: salt-run
path: /freedevtools/tldr/common/salt-run
canonical: "https://hexmos.com/freedevtools/tldr/common/salt-run/"
description: "Control Salt runners instantly with Salt-Run. Execute commands on minions, manage their status, and automate tasks. Free online tool, no registration required."
category: common
keywords:
- salt runner command
- salt minion control
- salt orchestration tool
- remote execution salt
- linux system management
- salt automation
- salt runner execution
- salt manage status
- salt minion status
- salt distributed system control
features:
- Execute Salt runners remotely on minions
- Retrieve the status of all minions in a Salt environment
- Identify disconnected minions in a Salt infrastructure
- Automate system administration tasks across multiple minions
- Manage and orchestrate Salt states on remote machines
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# salt-run

> Frontend for executing salt-runners on minions.
> More information: <https://docs.saltproject.io/en/latest/ref/cli/salt-run.html>.

- Show status of all minions:

`salt-run manage.status`

- Show all minions which are disconnected:

`salt-run manage.up`
