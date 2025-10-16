---
title: "Change Architecture - Control Program Architecture with Setarch | Online Free DevTools by Hexmos"
name: setarch
path: "/freedevtools/tldr/linux/setarch/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/setarch/"
description: "Change architecture instantly with Setarch. Modify program execution behavior and enable compatibility testing for legacy applications. Free online tool, no registration required."
category: linux
keywords:
- linux change architecture
- program execution architecture
- system architecture modifier
- setarch command linux
- i686 architecture linux
- x86_64 architecture linux
- address space randomization linux
- linux 32-bit application
- linux compatibility testing
- legacy application support linux
features:
- Modify the reported architecture for program execution
- Enable running 32-bit applications on a 64-bit kernel
- Disable randomization of the virtual address space
- List supported architectures for program execution
- Execute commands with a specified system architecture
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# setarch

> Change the reported architecture for a program's execution, primarily used to modify how programs behave based on system architecture.
> Useful for compatibility testing or running legacy applications.
> More information: <https://manned.org/setarch.8>.

- Run a command as if the machine architecture is `i686` (useful for running 32-bit apps on a 64-bit kernel):

`setarch i686 {{command}}`

- Run a shell with the `x86_64` architecture:

`setarch x86_64 {{bash}}`

- Disable randomization of the virtual address space:

`setarch {{linux32}} {{[-R|--addr-no-randomize]}} {{command}}`

- List supported architectures:

`setarch --list`

- Display help:

`setarch {{[-h|--help]}}`
