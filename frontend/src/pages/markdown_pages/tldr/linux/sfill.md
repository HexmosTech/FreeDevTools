---
title: "Securely Overwrite with Sfill - Free Space Eraser | Online Free DevTools by Hexmos"
name: sfill
path: /freedevtools/tldr/linux/sfill
canonical: "https://hexmos.com/freedevtools/tldr/linux/sfill/"
description: "Securely overwrite data with Sfill, a free space eraser for Linux. Permanently delete files and protect sensitive information from recovery. Free online tool, no registration required."
category: linux
keywords:
- disk wiping tool
- secure delete linux
- data sanitization linux
- sfill command
- linux free space eraser
- hard drive shredder
- secure file deletion
- inode overwriting
- data security linux
- disk cleaning tool
features:
- Securely overwrites free space on mounted drives
- Overwrites inodes for enhanced security
- Offers multiple write passes for data sanitization
- Allows for verbose output to monitor progress
- Provides options to overwrite only free space or inodes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sfill

> Securely overwrite the free space and inodes of the partition where the specified directory resides.
> More information: <https://manned.org/sfill>.

- Overwrite free space and inodes of a disk with 38 writes (slow but secure):

`sfill /{{path/to/mounted_disk_directory}}`

- Overwrite free space and inodes of a disk with 6 writes (fast but [l]ess secure) and show status ([v]erbose):

`sfill -l -v /{{path/to/mounted_disk_directory}}`

- Overwrite free space and inodes of a disk with 1 write (very fast but [l]ess secure [v]erbose) and show status:

`sfill -ll -v /{{path/to/mounted_disk_directory}}`

- Overwrite only free space of a d[I]sk:

`sfill -I /{{path/to/mounted_disk_directory}}`

- Overwrite only free [i]nodes of a disk:

`sfill -i /{{path/to/mounted_disk_directory}}`
