---
title: "Control Machines with machinectl | Online Free DevTools by Hexmos"
name: machinectl
path: /freedevtools/tldr/linux/machinectl
canonical: "https://hexmos.com/freedevtools/tldr/linux/machinectl/"
description: "Control systemd machine manager with machinectl. Manage virtual machines, containers, and images using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - machinectl commands
  - systemd machinectl
  - machinectl list
  - machinectl start
  - machinectl stop
  - machinectl shell
  - linux machinectl
  - systemd machine manager
  - virtual machine management
  - container management
features:
  - Start and stop virtual machines
  - Manage containers using systemd-nspawn
  - List running machines and their status
  - Access interactive shells within machines
  - Execute various operations on virtual machines, containers and images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# machinectl

> Control the systemd machine manager.
> Execute operations on virtual machines, containers and images.
> More information: <https://www.freedesktop.org/software/systemd/man/machinectl.html>.

- Start a machine as a service using `systemd-nspawn`:

`sudo machinectl start {{machine_name}}`

- Stop a running machine:

`sudo machinectl stop {{machine_name}}`

- Display a list of running machines:

`machinectl list`

- Open an interactive shell inside the machine:

`sudo machinectl shell {{machine_name}}`
