---
title: "Linode Control - Manage Instances | Online Free DevTools by Hexmos"
name: linode-cli-linodes
path: /freedevtools/tldr/linode/linode-cli-linodes
canonical: "https://hexmos.com/freedevtools/tldr/linode/linode-cli-linodes/"
description: "Control Linode instances with linode-cli. Manage, create, and delete Linodes. Free online tool, no registration required."
category: common
keywords:
- linode instance manager
- linode command line tool
- linode server management
- linux server cli
- linode cli control
- linode instance control
- linode server deploy
- linode resource management
- linode backup restore
- linode power management
features:
- Create new Linode instances
- Manage Linode instance lifecycle
- Update Linode settings and configuration
- Perform power operations on Linodes
- List and restore Linode backups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# linode-cli linodes

> Manage Linode instances.
> See also: `linode-cli`.
> More information: <https://techdocs.akamai.com/cloud-computing/docs/cli-commands-for-compute-instances>.

- List all Linodes:

`linode-cli linodes list`

- Create a new Linode:

`linode-cli linodes create --type {{linode_type}} --region {{region}} --image {{image_id}}`

- View details of a specific Linode:

`linode-cli linodes view {{linode_id}}`

- Update settings for a Linode:

`linode-cli linodes update {{linode_id}} --label {{new_label}}`

- Delete a Linode:

`linode-cli linodes delete {{linode_id}}`

- Perform a power management operation on a Linode:

`linode-cli linodes {{boot|reboot|shutdown}} {{linode_id}}`

- List available backups for a Linode:

`linode-cli linodes backups-list {{linode_id}}`

- Restore a backup to a Linode:

`linode-cli linodes backups-restore {{linode_id}} --backup-id {{backup_id}}`
