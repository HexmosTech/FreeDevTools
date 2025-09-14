---
title: "Mount MTP - Access MTP Devices | Free DevTools"
name: jmtpfs
path: "/freedevtools/tldr/common/jmtpfs"
canonical: "https://hexmos.com/freedevtools/tldr/common/jmtpfs/"
description: "Mount MTP devices with jmtpfs and access files on your Android phone or digital camera. Free online tool, no registration required."
category: common
keywords:
- MTP mount
- MTP file access
- MTP filesystem
- Android file transfer
- Fuse filesystem
- Linux MTP
- Mount Android device
- Access camera files
- jmtpfs mount options
- jmtpfs device list
features:
- Mount MTP devices to a specified directory
- Set custom mount options for enhanced control
- List available MTP devices for easy selection
- Mount specific devices when multiple are present
- Unmount MTP devices using fusermount
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jmtpfs

> FUSE-based filesystem for accessing MTP devices.
> More information: <https://manned.org/jmtpfs>.

- Mount an MTP device to a directory:

`jmtpfs {{path/to/directory}}`

- Set mount options:

`jmtpfs -o {{allow_other,auto_unmount}} {{path/to/directory}}`

- List available MTP devices:

`jmtpfs {{[-l|--listDevices]}}`

- If multiple devices are present, mount a specific device:

`jmtpfs -device={{bus_id}},{{device_id}} {{path/to/directory}}`

- Unmount MTP device:

`fusermount -u {{path/to/directory}}`
