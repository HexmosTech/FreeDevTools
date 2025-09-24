---
title: "Arch-Chroot - Control Root Environment on Linux | Online Free DevTools by Hexmos"
name: arch-chroot
path: /freedevtools/tldr/linux/arch-chroot
canonical: "https://hexmos.com/freedevtools/tldr/linux/arch-chroot/"
description: "Control root environment with Arch-Chroot. Easily create and manage a chrooted environment for Arch Linux system administration. Free online tool, no registration required."
category: linux
keywords:
- linux chroot
- arch linux chroot
- chroot command linux
- change root directory linux
- arch chroot environment
- linux root environment control
- arch linux installation chroot
- arch linux system administration
- linux command line tools
- linux shell environment
features:
- Create an isolated root environment
- Execute commands within the chrooted environment
- Specify a user to run commands as
- Start an interactive shell within the new root
- Use a custom command instead of the default shell
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arch-chroot

> Enhanced `chroot` command to help in the Arch Linux installation process.
> More information: <https://manned.org/arch-chroot.8>.

- Start an interactive shell (Bash, by default) in a new root directory:

`arch-chroot {{path/to/new/root}}`

- Specify the user (other than the current user) to run the shell as:

`arch-chroot -u {{user}} {{path/to/new/root}}`

- Run a custom command (instead of the default Bash) in the new root directory:

`arch-chroot {{path/to/new/root}} {{command}} {{command_arguments}}`

- Specify the shell, other than the default Bash (in this case, the `zsh` package should have been installed in the target system):

`arch-chroot {{path/to/new/root}} {{zsh}}`
