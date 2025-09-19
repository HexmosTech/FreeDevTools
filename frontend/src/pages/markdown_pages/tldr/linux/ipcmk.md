---
title: "Create IPC Resources - ipcmk Command | Online Free DevTools by Hexmos"
name: ipcmk
path: /freedevtools/tldr/linux/ipcmk
canonical: "https://hexmos.com/freedevtools/tldr/linux/ipcmk/"
description: "Create IPC resources with the ipcmk command. Manage shared memory, semaphores, and message queues easily. Free online tool, no registration required."
category: linux
keywords:
  - ipc resource creation
  - ipcmk command
  - shared memory creation
  - semaphore creation
  - message queue creation
  - linux ipc
  - inter process communication
  - system v ipc
  - ipc management
  - command line ipc
features:
  - Creates shared memory segments of specified size.
  - Creates semaphores with customizable element size.
  - Creates message queues for inter-process communication.
  - Allows setting custom permissions for shared memory segments.
  - Provides a simple command-line interface for IPC resource management.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipcmk

> Create IPC (Inter-process Communication) resources.
> More information: <https://manned.org/ipcmk>.

- Create a shared memory segment:

`ipcmk {{[-M|--shmem]}} {{segment_size_in_bytes}}`

- Create a semaphore:

`ipcmk {{[-S|--semaphore]}} {{element_size}}`

- Create a message queue:

`ipcmk {{[-Q|--queue]}}`

- Create a shared memory segment with specific permissions (default is 0644):

`ipcmk {{[-M|--shmem]}} {{segment_size_in_bytes}} {{octal_permissions}}`
