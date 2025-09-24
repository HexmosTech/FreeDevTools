---
title: "Manage rpm-ostree - Control OS Deployments | Online Free DevTools by Hexmos"
name: rpm-ostree
path: /freedevtools/tldr/linux/rpm-ostree
canonical: "https://hexmos.com/freedevtools/tldr/linux/rpm-ostree/"
description: "Manage rpm-ostree deployments instantly and update operating system images. Preview upgrades, rollback changes, and install packages. Free online tool, no registration required."
category: linux
keywords:
  - ostree deployment management
  - rpm-ostree upgrade tool
  - linux os image update
  - ostree rollback command
  - package installation ostree
  - bootloader configuration linux
  - filesystem overlay manager
  - ostree status monitor
  - coreos deployment control
  - linux command line tools
features:
  - Display rpm-ostree bootloader status
  - Preview available operating system upgrades
  - Upgrade and reboot into a new deployment
  - Rollback to a previous ostree deployment
  - Install packages and reboot into a new deployment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpm-ostree

> A hybrid image/package system.
> Manage ostree deployments, package layers, filesystem overlays, and boot configuration.
> More information: <https://coreos.github.io/rpm-ostree/administrator-handbook/>.

- Show rpm-ostree deployments in the order they will appear in the bootloader:

`rpm-ostree status`

- Show packages which are outdated and can be updated:

`rpm-ostree upgrade --preview`

- Prepare a new ostree deployment with upgraded packages and reboot into it:

`rpm-ostree upgrade {{[-r|--reboot]}}`

- Reboot into the previous ostree deployment:

`rpm-ostree rollback {{[-r|--reboot]}}`

- Install a package into a new ostree deployment and reboot into it:

`rpm-ostree install {{package}} {{[-r|--reboot]}}`
