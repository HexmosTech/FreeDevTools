---
title: "Map Syscalls - Find System Call Numbers and Names | Online Free DevTools by Hexmos"
name: ausyscall
path: "/freedevtools/tldr/linux/ausyscall/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ausyscall/"
description: "Quickly map system call numbers and names with ausyscall.  Lookup syscall numbers or names easily using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - syscall number lookup
  - syscall name lookup
  - linux syscall mapper
  - system call identifier
  - command-line syscall tool
  - syscall information retriever
  - ausyscall command
  - system call database
  - architecture-specific syscalls
  - program syscall mapping
features:
  - Displays the syscall number for a given system call name.
  - Displays the system call name for a given syscall number.
  - Provides a comprehensive list of all system calls for a specified architecture.
  - Supports various architectures (specify with --dump flag).
  - Offers a simple and efficient command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ausyscall

> Map syscall names and numbers.
> More information: <https://manned.org/ausyscall>.

- Display syscall number of a specific system call:

`ausyscall {{search_pattern}}`

- Display name of a specific system call number:

`ausyscall {{system_call_number}}`

- Display all system calls for a specific architecture:

`ausyscall {{architecture}} --dump`
