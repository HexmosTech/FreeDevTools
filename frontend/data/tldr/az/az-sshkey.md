---
title: "Create SSH Key - Manage Keys with Azure CLI | Online Free DevTools by Hexmos"
name: az-sshkey
path: "/freedevtools/tldr/az/az-sshkey/"
canonical: "https://hexmos.com/freedevtools/tldr/az/az-sshkey/"
description: "Create and manage SSH keys with Azure CLI. Securely connect to virtual machines and manage public keys. Free online tool, no registration required."
category: common
keywords:
- ssh key azure cli
- azure ssh key manager
- azure ssh key generator
- ssh public key management
- az sshkey command
- azure vm ssh key
- linux ssh key
- azure key management
- create ssh key azure
- upload ssh key azure
features:
- Create new SSH key pairs for Azure VMs
- Upload existing SSH public keys to Azure
- List available SSH public keys
- Show details of a specific SSH public key
- Manage SSH keys within Azure resource groups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# az sshkey

> Manage SSH public keys with virtual machines.
> Part of `azure-cli` (also known as `az`).
> More information: <https://learn.microsoft.com/cli/azure/sshkey>.

- Create a new SSH key:

`az sshkey create --name {{name}} {{[-g|--resource-group]}} {{resource_group}}`

- Upload an existing SSH key:

`az sshkey create --name {{name}} {{[-g|--resource-group]}} {{resource_group}} --public-key "{{@path/to/key.pub}}"`

- List all SSH public keys:

`az sshkey list`

- Show information about an SSH public key:

`az sshkey show --name {{name}} {{[-g|--resource-group]}} {{resource_group}}`
