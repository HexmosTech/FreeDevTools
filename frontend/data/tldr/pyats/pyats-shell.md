---
title: "pyATS Shell - Control Network Devices | Online Free DevTools by Hexmos"
name: pyats-shell
path: "/freedevtools/tldr/pyats/pyats-shell/"
canonical: "https://hexmos.com/freedevtools/tldr/pyats/pyats-shell/"
description: "Control network devices with pyATS shell. Load testbeds, execute commands, and interact with network devices programmatically. Free online tool, no registration required."
category: common
keywords:
- pyATS Shell automation
- Network device control
- Testbed configuration management
- Interactive Python Shell network
- pyATS device interaction
- YAML Testbed loading
- Pickle file processing network
- Network automation CLI
- Cisco pyATS shell
- Network device testing
features:
- Load and interact with network devices via Testbed files
- Execute pyATS commands in an interactive shell
- Disable IPython for a basic Python shell environment
- Load network device configurations from Pickle files
- Prototype and debug network automation scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pyats shell

> Start a pre-loaded pyATS interactive Python Shell to save time in prototyping.
> More information: <https://pubhub.devnetcloud.com/media/genie-docs/docs/cli/genie_shell.html>.

- Open pyATS shell with a defined Testbed file:

`pyats shell --testbed-file {{path/to/testbed.yaml}}`

- Open pyATS shell with a defined Pickle file:

`pyats shell --pickle-file {{path/to/pickle.file}}`

- Open pyATS with IPython disabled:

`pyats shell --no-ipython`
