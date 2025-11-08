---
title: "Chroot Command - Control Root Directory | Online Free DevTools by Hexmos"
name: chroot
path: "/freedevtools/tldr/common/chroot/"
canonical: "https://hexmos.com/freedevtools/tldr/common/chroot/"
description: "Control root directory with Chroot Command. Isolate processes and enhance system security. Free online tool, no registration required."
category: common
keywords:
- chroot command
- change root directory
- linux chroot
- unix chroot
- chroot jail
- secure environment linux
- chroot environment
- isolate process linux
- filesystem isolation
- linux security command
features:
- Change the root directory for a process
- Isolate processes in a specific environment
- Enhance system security by limiting access
- Run a command or shell in a new root directory
- Specify user and group for the chroot process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# chroot

> Run command or interactive shell with special root directory.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/chroot-invocation.html>.

- Run command as new root directory:

`sudo chroot {{path/to/new/root}} {{command}}`

- Use a specific user and group:

`sudo chroot --userspec {{username_or_id:group_name_or_id}}`
