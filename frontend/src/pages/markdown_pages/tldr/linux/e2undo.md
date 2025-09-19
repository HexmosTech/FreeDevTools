---
title: "Undo Ext Filesystem Changes - e2undo | Online Free DevTools by Hexmos"
name: e2undo
path: "/freedevtools/tldr/linux/e2undo"
canonical: "https://hexmos.com/freedevtools/tldr/linux/e2undo/"
description: "Undo filesystem changes with e2undo. Replay ext2/ext3/ext4 undo logs to recover from failed operations using command line interface. Free online tool, no registration required."
category: linux
keywords:
- ext filesystem undo
- ext4 undo log replay
- ext3 filesystem recovery
- ext2 data recovery
- e2undo command line
- linux filesystem repair
- ext4 data corruption fix
- filesystem journal recovery
- block device restoration
- ext filesystem undo tool
features:
- Replay undo logs for ext2/ext3/ext4 filesystems.
- Perform dry-run to preview changes before applying.
- Write old contents to an undo file before overwriting blocks.
- Display verbose information during the undo operation.
- Undo failed filesystem operations from e2fsprogs programs.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# e2undo

> Replay undo logs for an ext2/ext3/ext4 filesystem.
> This can be used to undo a failed operation by an e2fsprogs program.
> More information: <https://manned.org/e2undo>.

- Display information about a specific undo file:

`e2undo -h {{path/to/undo_file}} {{/dev/sdXN}}`

- Perform a dry-run and display the candidate blocks for replaying:

`e2undo -nv {{path/to/undo_file}} {{/dev/sdXN}}`

- Perform an undo operation:

`e2undo {{path/to/undo_file}} {{/dev/sdXN}}`

- Perform an undo operation and display [v]erbose information:

`e2undo -v {{path/to/undo_file}} {{/dev/sdXN}}`

- Write the old contents of the block to an undo file before overwriting a file system block:

`e2undo -z {{path/to/file.e2undo}} {{path/to/undo_file}} {{/dev/sdXN}}`
