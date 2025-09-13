---
title: "Salt - Control Remote Systems | Free DevTools"
name: salt
path: /freedevtools/tldr/salt/salt
canonical: "https://hexmos.com/freedevtools/tldr/salt/salt/"
description: "Control remote systems efficiently with Salt. Manage configurations, execute commands, and automate infrastructure tasks. Free online tool, no registration required."
category: common
keywords:
- salt command
- salt configuration management
- remote execution salt
- linux salt automation
- salt minion management
- salt state management
- infrastructure as code salt
- salt orchestration
- python salt automation
- salt remote administration
features:
- Execute commands on multiple remote minions simultaneously
- Enforce system states based on defined configurations
- Automate infrastructure management tasks
- Manage configurations across diverse environments
- Orchestrate complex workflows across distributed systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# salt

> Execute commands and assert state on remote salt minions.
> More information: <https://docs.saltproject.io/en/latest/ref/cli/index.html>.

- List connected minions:

`salt '*' test.ping`

- Execute a highstate on all connected minions:

`salt '*' state.highstate`

- Upgrade packages using the OS package manager (apt, yum, brew) on a subset of minions:

`salt '*.example.com' pkg.upgrade`

- Execute an arbitrary command on a particular minion:

`salt '{{minion_id}}' cmd.run "ls "`
