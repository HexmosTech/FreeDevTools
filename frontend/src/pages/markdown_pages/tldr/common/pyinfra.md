---
title: "Automate Infrastructure - Control Servers with pyinfra | Online Free DevTools by Hexmos"
name: pyinfra
path: /freedevtools/tldr/common/pyinfra
canonical: "https://hexmos.com/freedevtools/tldr/common/pyinfra/"
description: "Automate infrastructure provisioning with pyinfra. Deploy applications, configure servers, and manage infrastructure using Python. Free online tool, no registration required."
category: common
keywords:
- infrastructure automation
- server configuration management
- python deployment tool
- remote execution
- infrastructure as code
- pyinfra deploy
- linux server automation
- docker deployment
- ssh command execution
- configuration orchestration
features:
- Execute commands remotely over SSH
- Deploy applications to multiple servers
- Manage infrastructure using Python code
- Automate server provisioning and configuration
- Orchestrate complex deployments across different environments
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pyinfra

> Automates infrastructure at a large scale.
> More information: <https://docs.pyinfra.com>.

- Execute a command over SSH:

`pyinfra {{target_ip_address}} exec -- {{command_name_and_arguments}}`

- Execute contents of a deploy file on a list of targets:

`pyinfra {{path/to/target_list.py}} {{path/to/deploy.py}}`

- Execute commands on locally:

`pyinfra @local {{path/to/deploy.py}}`

- Execute commands over Docker:

`pyinfra @docker/{{container}} {{path/to/deploy.py}}`
