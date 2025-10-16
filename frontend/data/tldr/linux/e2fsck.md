---
title: "e2fsck Filesystem Check - Validate Linux Partitions | Online Free DevTools by Hexmos"
name: e2fsck
path: "/freedevtools/tldr/linux/e2fsck/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/e2fsck/"
description: "Validate Linux ext2/ext3/ext4 filesystems with e2fsck. Check and repair damaged blocks, ensuring data integrity. Free online tool, no registration required."
category: linux
keywords:
  - linux filesystem check
  - ext2 filesystem repair
  - ext3 filesystem validation
  - ext4 partition checker
  - e2fsck command linux
  - filesystem integrity check linux
  - linux partition repair tool
  - e2fsck bad block detection
  - linux disk repair utility
  - check filesystem integrity
features:
  - Checks for and reports damaged blocks on ext2, ext3, and ext4 filesystems.
  - Automatically repairs damaged blocks with the -p option.
  - Allows read-only checking of the filesystem with the -c option.
  - Forces a filesystem check even if it appears clean using the -f option.
  - Performs an exhaustive bad block test and blacklists bad blocks with the -fccky option.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# e2fsck

> Check a Linux ext2/ext3/ext4 filesystem. The partition should be unmounted.
> More information: <https://manned.org/e2fsck>.

- Check filesystem, reporting any damaged blocks:

`sudo e2fsck {{/dev/sdXN}}`

- Check filesystem and automatically repair ([p]reen) any damaged blocks:

`sudo e2fsck -p {{/dev/sdXN}}`

- Check filesystem in read only mode:

`sudo e2fsck -c {{/dev/sdXN}}`

- Force checking even if the filesystem seems clean:

`sudo e2fsck -f {{/dev/sdXN}}`

- Perform an exhaustive, non-destructive read-write test for bad blocks and blacklist them:

`sudo e2fsck -fccky {{/dev/sdXN}}`
