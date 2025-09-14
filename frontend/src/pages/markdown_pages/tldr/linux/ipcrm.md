---
title: "IPC Resource Delete - Manage Linux IPC Resources | Free DevTools"
name: ipcrm
path: /freedevtools/tldr/linux/ipcrm
canonical: "https://hexmos.com/freedevtools/tldr/linux/ipcrm/"
description: "Delete Linux IPC resources with ipcrm. Remove shared memory segments, message queues, and semaphores. Free online tool, no registration required."
category: linux
keywords:
- Linux IPC delete
- IPC resource manager
- Shared memory remover
- Semaphore deletion tool
- Message queue delete linux
- Linux interprocess communication
- IPC identifier removal
- IPC key removal
- ipcrm command line
- Linux system administration
features:
- Delete shared memory segments by ID
- Remove shared memory segments by key
- Delete message queues by ID
- Remove semaphores by key
- Delete all IPC resources
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipcrm

> Delete IPC (Inter-process Communication) resources.
> More information: <https://manned.org/ipcrm>.

- Delete a shared memory segment by ID:

`ipcrm {{[-m|--shmem-id]}} {{shmem_id}}`

- Delete a shared memory segment by key:

`ipcrm {{[-M|--shmem-key]}} {{shmem_key}}`

- Delete an IPC queue by ID:

`ipcrm {{[-q|--queue-id]}} {{ipc_queue_id}}`

- Delete an IPC queue by key:

`ipcrm {{[-Q|--queue-key]}} {{ipc_queue_key}}`

- Delete a semaphore by ID:

`ipcrm {{[-s|--semaphore-id]}} {{semaphore_id}}`

- Delete a semaphore by key:

`ipcrm {{[-S|--semaphore-key]}} {{semaphore_key}}`

- Delete all IPC resources:

`ipcrm {{[-a|--all]}}`
