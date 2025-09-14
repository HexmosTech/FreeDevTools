---
title: "fsck - Check Filesystem Integrity | Free DevTools"
name: fsck
path: /freedevtools/tldr/linux/fsck
canonical: "https://hexmos.com/freedevtools/tldr/linux/fsck/"
description: "Validate filesystem integrity with fsck.  Repair damaged blocks and ensure data consistency using command-line options. Free online tool, no registration required."
category: linux
keywords:
  - filesystem checker
  - linux filesystem check
  - fsck command
  - file system repair
  - check disk integrity
  - data recovery tools
  - command line utilities
  - unix filesystem
  - system administration
  - disk maintenance
features:
  - Check for and report damaged filesystem blocks.
  - Repair damaged blocks automatically or interactively.
  - Verify filesystem consistency.
  - Ensure data integrity.
  - Works on various filesystem types (requires appropriate options).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fsck

> Check the integrity of a filesystem or repair it. The filesystem should be unmounted at the time the command is run.
> More information: <https://manned.org/fsck>.

- Check filesystem `/dev/sdXN`, reporting any damaged blocks:

`sudo fsck {{/dev/sdXN}}`

- Check filesystem `/dev/sdXN`, reporting any damaged blocks and interactively letting the user choose to repair each one:

`sudo fsck -r {{/dev/sdXN}}`

- Check filesystem `/dev/sdXN`, reporting any damaged blocks and [a]utomatically repairing them:

`sudo fsck -a {{/dev/sdXN}}`
