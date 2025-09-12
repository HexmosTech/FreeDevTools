---
title: "SSH Agent - Control SSH Key Management | Free DevTools"
name: ssh-agent
path: /freedevtools/tldr/common/ssh-agent
canonical: "https://hexmos.com/freedevtools/tldr/common/ssh-agent/"
description: "Control SSH key management with SSH Agent. Securely store and manage SSH keys in memory, enabling secure remote access. Free online tool, no registration required."
category: common
keywords:
- ssh key agent
- ssh key management linux
- ssh key manager
- ssh agent macos
- ssh agent bash
- ssh key authentication
- passwordless ssh
- ssh key storage
- ssh agent security
- ssh agent forwarding
features:
- Securely store SSH keys in memory.
- Automate SSH key loading and management.
- Provide passwordless SSH authentication.
- Enable SSH key forwarding for seamless access.
- Kill and restart SSH agent processes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ssh-agent

> Spawn an SSH Agent process.
> An SSH Agent holds SSH keys decrypted in memory until removed or the process is killed.
> See also: `ssh-add`, which can add and manage keys held by an SSH Agent.
> More information: <https://man.openbsd.org/ssh-agent>.

- Start an SSH Agent for the current shell:

`eval $(ssh-agent)`

- Kill the currently running agent:

`ssh-agent -k`
