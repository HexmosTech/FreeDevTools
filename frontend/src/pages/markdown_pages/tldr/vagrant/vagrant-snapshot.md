---
title: "Vagrant Snapshot - Manage VM States | Online Free DevTools by Hexmos"
name: vagrant-snapshot
path: /freedevtools/tldr/vagrant/vagrant-snapshot
canonical: "https://hexmos.com/freedevtools/tldr/vagrant/vagrant-snapshot/"
description: "Manage VM states easily with Vagrant Snapshot. Save, restore, and delete virtual machine snapshots with a simple command. Free online tool, no registration required."
category: common
keywords:
- vagrant snapshot manager
- vm snapshot tool
- virtual machine snapshot
- vagrant save state
- vagrant restore state
- vagrant delete snapshot
- vagrant vm management
- vagrant command line
- virtualbox snapshot
- hyperv snapshot
features:
- Save the current state of a Vagrant machine
- Restore a Vagrant machine to a previous snapshot
- Delete unwanted Vagrant snapshots
- List available snapshots for a Vagrant machine
- Restore a Vagrant machine to a snapshot without starting it
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vagrant snapshot

> Manage snapshots of Vagrant machines.
> See also: `vagrant`.
> More information: <https://developer.hashicorp.com/vagrant/docs/cli/snapshot>.

- Take a snapshot of the machine (running or stopped):

`vagrant snapshot save {{snapshot_name}}`

- Restore a snapshot and start the machine:

`vagrant snapshot restore {{snapshot_name}}`

- Restore a snapshot without starting the machine:

`vagrant snapshot restore --no-start {{snapshot_name}}`

- Delete a snapshot:

`vagrant snapshot delete {{snapshot_name}}`

- List available snapshots of the machine:

`vagrant snapshot list`
