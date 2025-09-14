---
title: "FileSync - Synchronize Files Recursively | Free DevTools"
name: fpsync
path: /freedevtools/tldr/common/fpsync
canonical: "https://hexmos.com/freedevtools/tldr/common/fpsync/"
description: "Synchronize files recursively with FileSync across local and remote servers. Efficiently manage file transfers and backups with rsync-based parallel processing. Free online tool, no registration required."
category: common
keywords:
- file synchronization
- recursive file sync
- rsync parallel processing
- ssh file transfer
- remote file sync
- directory synchronization
- backup file sync
- linux file sync
- macos file sync
- command line file sync
features:
- Recursively synchronize directories locally or remotely.
- Execute parallel rsync processes for faster synchronization.
- Delete extraneous files at the destination with a final pass.
- Distribute synchronization jobs across multiple remote workers.
- Limit the number of files and size transferred per job.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fpsync

> Execute several synchronization processes locally or on several remote workers through SSH.
> More information: <https://manned.org/fpsync>.

- Recursively synchronize a directory to another location:

`fpsync -v /{{path/to/source}}/ /{{path/to/destination}}/`

- Recursively synchronize a directory with the final pass (It enables rsync's `--delete` option with each synchronization job):

`fpsync -v -E /{{path/to/source}}/ /{{path/to/destination}}/`

- Recursively synchronize a directory to a destination using 8 concurrent synchronization jobs:

`fpsync -v -n 8 -E /{{path/to/source}}/ /{{path/to/destination}}/`

- Recursively synchronize a directory to a destination using 8 concurrent synchronization jobs spread over two remote workers (machine1 and machine2):

`fpsync -v -n 8 -E -w login@machine1 -w login@machine2 -d /{{path/to/shared/directory}} /{{path/to/source}}/ /{{path/to/destination}}/`

- Recursively synchronize a directory to a destination using 4 local workers, each one transferring at most 1000 files and 100 MB per synchronization job:

`fpsync -v -n 4 -f 1000 -s $((100 * 1024 * 1024)) /{{path/to/source}}/ /{{path/to/destination}}/`

- Recursively synchronize any directories but exclude specific `.snapshot*` files (Note: Options and values must be separated by a pipe character):

`fpsync -v -O "-x|.snapshot*" /{{path/to/source}}/ /{{path/to/destination}}/`
