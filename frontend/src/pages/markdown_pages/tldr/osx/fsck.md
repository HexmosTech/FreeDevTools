---
title: "Check Filesystem - Inspect and Repair Disks | Online Free DevTools by Hexmos"
name: fsck
path: /freedevtools/tldr/osx/fsck
canonical: "https://hexmos.com/freedevtools/tldr/osx/fsck/"
description: "Check filesystem integrity with fsck. Inspect disks for errors and repair damaged filesystems on macOS. Free online tool, no registration required."
category: osx
keywords:
- macOS filesystem check
- disk integrity check
- APFS repair
- HFS+ repair
- filesystem repair command
- disk error reporting
- macOS disk utility
- fsck command macOS
- filesystem consistency check
- disk repair tool
features:
- Check filesystem integrity for various formats
- Report damaged blocks on a specified disk
- Interactively repair filesystem errors
- Automatically repair detected filesystem issues
- Verify if a filesystem was cleanly unmounted
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fsck

> Check the integrity of a filesystem or repair it. The filesystem should be unmounted at the time the command is run.
> It is a wrapper that calls `fsck_hfs`, `fsck_apfs`, `fsck_msdos`, `fsck_exfat`, and `fsck_udf` as needed.
> More information: <https://keith.github.io/xcode-man-pages/fsck.8.html>.

- Check filesystem `/dev/sdX`, reporting any damaged blocks:

`fsck {{/dev/sdX}}`

- Check filesystem `/dev/sdX` only if it is clean, reporting any damaged blocks and interactively letting the user choose to repair each one:

`fsck -f {{/dev/sdX}}`

- Check filesystem `/dev/sdX` only if it is clean, reporting any damaged blocks and automatically repairing them:

`fsck -fy {{/dev/sdX}}`

- Check filesystem `/dev/sdX`, reporting whether it has been cleanly unmounted:

`fsck -q {{/dev/sdX}}`
