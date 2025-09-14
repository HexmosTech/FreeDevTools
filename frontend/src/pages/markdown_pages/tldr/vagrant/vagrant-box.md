---
title: "Manage Vagrant Boxes - Create VMs | Free DevTools"
name: vagrant-box
path: /freedevtools/tldr/vagrant/vagrant-box
canonical: "https://hexmos.com/freedevtools/tldr/vagrant/vagrant-box/"
description: "Manage Vagrant boxes with Vagrant-Box. Create, update, and remove virtual machine images easily. Free online tool, no registration required."
category: common
keywords:
- vagrant box management
- virtual machine images
- vagrant box creation
- vagrant box update
- vagrant box removal
- vagrant box list
- vagrant ubuntu box
- vagrant windows box
- vagrant cloud boxes
- vagrant prune boxes
features:
- List all installed Vagrant boxes
- Add boxes from URLs or local files
- Remove unused or outdated boxes
- Update boxes to the latest version
- Prune old versions of installed boxes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vagrant box

> Manage Vagrant boxes (virtual machine images).
> See also: `vagrant`.
> More information: <https://developer.hashicorp.com/vagrant/docs/cli/box>.

- List all installed boxes:

`vagrant box list`

- Add a new box:

`vagrant box add {{hashicorp/bionic64}}`

- Add a box from a custom URL:

`vagrant box add {{my-box}} {{https://example.com/my-box.box}}`

- Remove an installed box:

`vagrant box remove {{hashicorp/bionic64}}`

- Update all boxes that are in use in the current Vagrant environment:

`vagrant box update`

- Update a specific box:

`vagrant box update --box {{bento/debian-12}}`

- Check if there is a new version available for the box that you are using:

`vagrant box outdated`

- Clean up old versions of installed boxes:

`vagrant box prune`
