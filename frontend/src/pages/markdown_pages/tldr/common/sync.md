---
title: "Sync Command - Flush Disk Writes | Free DevTools"
name: sync
path: /freedevtools/tldr/common/sync
canonical: "https://hexmos.com/freedevtools/tldr/common/sync/"
description: "Flush pending write operations with Sync Command, ensuring data integrity and preventing data loss on all platforms. Free online tool, no registration required."
category: common
keywords:
- sync command
- disk write synchronization
- flush disk writes
- data integrity
- file system synchronization
- pending write operations
- linux sync command
- macos sync command
- coreutils sync
- filesystem caches
features:
- Flushes pending write operations to disks.
- Ensures data is written to persistent storage.
- Supports flushing a single file or all disks.
- Clears file system caches on Linux.
- Attempts to clear inactive memory and filesystem caches on macOS.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sync

> Flushes all pending write operations to the appropriate disks.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/sync-invocation.html>.

- Flush all pending write operations on all disks:

`sync`

- Flush all pending write operations on a single file to disk:

`sync {{path/to/file}}`

- Flush writes and drop file system caches (Linux only):

`sync; echo 3 | sudo tee /proc/sys/vm/drop_caches`

- Flush disk writes and attempts to clear inactive memory and filesystem caches (macOS only):

`sync; sudo purge`
