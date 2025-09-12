---
title: "ISO Image Validator - Verify and Inspect ISO Files | Free DevTools"
name: isoinfo
path: /freedevtools/tldr/linux/isoinfo
canonical: "https://hexmos.com/freedevtools/tldr/linux/isoinfo/"
description: "Validate and inspect ISO disk images with isoinfo. List files, extract specific files, and view header information. Free online tool, no registration required."
category: linux
keywords:
  - iso image validator
  - iso file inspector
  - iso image verification
  - iso file extraction
  - iso content listing
  - iso metadata viewer
  - command-line iso tool
  - iso file analysis
  - linux iso tool
  - iso image manipulation
features:
  - Lists all files within an ISO image.
  - Extracts individual files from an ISO image to stdout.
  - Displays header information of an ISO disk image.
  - Verifies the integrity of ISO image structure (implicitly).
  - Supports various ISO image standards.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# isoinfo

> Utility programs for dumping and verifying ISO disk images.
> More information: <https://manned.org/isoinfo>.

- List all the files included in an ISO image:

`isoinfo -f -i {{path/to/image.iso}}`

- E[x]tract a specific file from an ISO image and send it out `stdout`:

`isoinfo -i {{path/to/image.iso}} -x {{/PATH/TO/FILE/INSIDE/ISO.EXT}}`

- Show header information for an ISO disk image:

`isoinfo -d -i {{path/to/image.iso}}`
