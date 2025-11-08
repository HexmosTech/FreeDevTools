---
title: "Quickemu - Create VMs Quickly | Online Free DevTools by Hexmos"
name: quickemu
path: "/freedevtools/tldr/linux/quickemu/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/quickemu/"
description: "Create and manage highly optimized desktop virtual machines quickly with Quickemu.  Manage snapshots and customize configurations effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - virtual machine manager
  - quickemu command
  - vm configuration tool
  - desktop virtualization
  - snapshot management
  - vm creation tool
  - qemu alternative
  - linux vm manager
  - windows vm manager
  - fast vm setup
features:
  - Create and run VMs from configuration files.
  - Manage VM snapshots (create, restore, delete).
  - Customize VM settings (display, sound, etc.).
  - Run VMs in fullscreen mode with various display backends.
  - Create desktop shortcuts for easy VM access.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# quickemu

> Build and manage highly optimised desktop virtual machines quickly.
> See also: `quickget` for preparing VM configurations.
> More information: <https://github.com/quickemu-project/quickemu>.

- Create and run a virtual machine from a configuration file:

`quickemu --vm {{path/to/file.conf}}`

- Do not commit any changes to disk/snapshot but write any changes to temporary files:

`quickemu --status-quo --vm {{path/to/file.conf}}`

- Start the virtual machine in full-screen mode (`<Ctrl Alt f>` to exit) and select the display backend (`sdl` by default):

`quickemu --fullscreen --display {{sdl|gtk|spice|spice-app|none}} --vm {{path/to/file.conf}}`

- Select a virtual audio device to emulate and create a desktop shortcut:

`quickemu --sound-card {{intel-hda|ac97|es1370|sb16|none}} --shortcut --vm {{path/to/file.conf}}`

- Create a snapshot:

`quickemu --snapshot create {{tag}} --vm {{path/to/file.conf}}`

- Restore a snapshot:

`quickemu --snapshot apply {{tag}} --vm {{path/to/file.conf}}`

- Delete a snapshot:

`quickemu --snapshot delete {{tag}} --vm {{path/to/file.conf}}`
