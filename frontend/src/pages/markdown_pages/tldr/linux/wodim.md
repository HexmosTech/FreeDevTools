---
title: "Wodim - Burn CDs and DVDs | Online Free DevTools by Hexmos"
name: wodim
path: /freedevtools/tldr/linux/wodim
canonical: "https://hexmos.com/freedevtools/tldr/linux/wodim/"
description: "Burn data to CDs and DVDs with Wodim, a command-line tool for optical disc recording.  Create audio CDs, burn ISO images, and manage disc recording processes. Free online tool, no registration required."
category: linux
keywords:
  - disc burning command
  - cd burning linux
  - dvd burning command line
  - wodim linux commands
  - iso burning wodim
  - optical disc recording
  - data disc burning
  - audio cd creation wodim
  - command line cd burner
  - wodim tutorial
features:
  - Burn data files (ISO images) to CD/DVD.
  - Create audio CDs from CD audio tracks.
  - Support for multiple optical disc drives.
  - Option to automatically eject the disc after burning.
  - Ability to write across multiple discs if needed.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wodim

> Command (aliased as `cdrecord` on some systems) for recording data to CDs or DVDs.
> Some invocations of wodim can cause destructive actions, such as erasing all the data on a disc.
> More information: <https://manned.org/wodim>.

- Display optical drives available to `wodim`:

`wodim --devices`

- Record ("burn") an audio-only disc:

`wodim dev={{/dev/optical_drive}} -audio {{track*.cdaudio}}`

- Burn a file to a disc, ejecting the disc once done (some recorders require this):

`wodim -eject dev={{/dev/optical_drive}} -data {{file.iso}}`

- Burn a file to the disc in an optical drive, potentially writing to multiple discs in succession:

`wodim -tao dev={{/dev/optical_drive}} -data {{file.iso}}`
