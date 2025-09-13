---
title: "MT - Control Magnetic Tape Drive Operation | Free DevTools"
name: mt
path: /freedevtools/tldr/linux/mt
canonical: "https://hexmos.com/freedevtools/tldr/linux/mt/"
description: "Control magnetic tape drive operation with MT. Manage LTO tapes, rewind, eject, and write EOF marks. Free online tool, no registration required."
category: linux
keywords:
  - magnetic tape control
  - LTO tape management
  - mt command
  - tape drive rewind
  - tape drive eject
  - tape drive status
  - tape drive EOF
  - tape drive position
  - tape drive file seeking
  - tape drive linux
features:
  - Check the status of a magnetic tape drive.
  - Rewind the tape to the beginning.
  - Move forward specified number of files.
  - Position the tape at the end of valid data.
  - Write End-of-File (EOF) mark to the tape.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mt

> Control magnetic tape drive operation (commonly LTO tape).
> More information: <https://manned.org/mt>.

- Check the status of a tape drive:

`mt -f {{/dev/nstX}} status`

- Rewind the tape to beginning:

`mt -f {{/dev/nstX}} rewind`

- Move forward a given files, then position the tape on first block of next file:

`mt -f {{/dev/nstX}} fsf {{count}}`

- Rewind the tape, then position the tape at beginning of the given file:

`mt -f {{/dev/nstX}} asf {{count}}`

- Position the tape at the end of valid data:

`mt -f {{/dev/nstX}} eod`

- Rewind the tape and unload/eject it:

`mt -f {{/dev/nstX}} eject`

- Write EOF (End-of-file) mark at the current position:

`mt -f {{/dev/nstX}} eof`
