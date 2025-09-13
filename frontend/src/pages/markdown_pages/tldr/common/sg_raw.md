---
title: "SCSI Control - Send Raw SCSI Commands | Free DevTools"
name: sg_raw
path: /freedevtools/tldr/common/sg_raw
canonical: "https://hexmos.com/freedevtools/tldr/common/sg_raw/"
description: "Control SCSI devices with sg_raw. Send raw SCSI commands, manipulate optical drives, and debug device interactions. Free online tool, no registration required."
category: common
keywords:
- raw SCSI command
- SCSI device control
- sg_raw command
- optical drive control
- Linux SCSI commands
- SCSI pass-through
- storage device control
- SCSI debug
- send SCSI command
- Linux sg_raw
features:
- Send arbitrary SCSI commands to devices.
- Control optical drive tray loading and unloading.
- Read and send data directly to SCSI devices.
- Customize command execution with timeout options.
- Dump returned data in binary format for detailed analysis.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sg_raw

> Send arbitrary SCSI command to a connected device.
> More information: <https://manned.org/sg_raw>.

- Send a command to an optical SCSI device assigned to `sr0` to load the media in its tray:

`sg_raw /dev/sr0 EA 00 00 00 00 01`

- Read data from `IFILE` instead of `stdin`:

`sg_raw {{[-i|--infile]}} {{path/to/IFILE}} {{/dev/sgX}} {{SCSI_command}}`

- Skip the first `LEN` bytes of input data:

`sg_raw {{[-k|--skip]}} {{LEN}} {{/dev/sgX}} {{SCSI_command}}`

- Read `SLEN` bytes of data and send to the device:

`sg_raw {{[-s|--send]}} {{SLEN}} {{/dev/sgX}} {{SCSI_command}}`

- Wait up to `SEC` seconds for `sg_raw` to finish processing:

`sg_raw {{[-t|--timeout]}} {{SEC}} {{/dev/sgX}} {{SCSI_command}}`

- Increase verbosity level by 1:

`sg_raw {{[-v|--verbose]}} {{/dev/sgX}} {{SCSI_command}}`

- Dump returned data in binary form:

`sg_raw {{[-b|--binary]}} {{/dev/sgX}} {{SCSI_command}}`

- Write data received from the specified device to an `OFILE`:

`sg_raw {{[-o|--outfile]}} {{path/to/OFILE}} {{/dev/sgX}} {{SCSI_command}}`
