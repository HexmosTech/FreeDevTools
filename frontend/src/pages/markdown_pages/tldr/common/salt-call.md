---
title: "Control Salt Minion - Invoke Salt Commands Locally | Free DevTools"
name: salt-call
path: /freedevtools/tldr/common/salt-call
canonical: "https://hexmos.com/freedevtools/tldr/common/salt-call/"
description: "Control Salt minions locally with salt-call. Execute highstate, manage grains, and debug with command-line options. Free online tool, no registration required."
category: common
keywords:
- salt command execution
- salt minion control
- salt state management
- salt grains retrieval
- salt debugging commands
- linux salt-call
- salt automation scripts
- salt configuration management
- salt remote execution
- salt command line interface
features:
- Execute salt commands locally on a minion.
- Perform state management tasks like highstate.
- Retrieve minion grains for system information.
- Enable verbose debugging output for troubleshooting.
- Simulate state changes with dry-run functionality.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# salt-call

> Invoke salt locally on a salt minion.
> More information: <https://docs.saltproject.io/en/latest/ref/cli/salt-call.html>.

- Perform a highstate on this minion:

`salt-call state.highstate`

- Perform a highstate dry-run, compute all changes but don't actually perform them:

`salt-call state.highstate test=true`

- Perform a highstate with verbose debugging output:

`salt-call {{[-l|--log-level]}} debug state.highstate`

- List this minion's grains:

`salt-call grains.items`
