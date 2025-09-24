---
title: "e2image - Save Ext Filesystem Metadata | Online Free DevTools by Hexmos"
name: e2image
path: /freedevtools/tldr/linux/e2image
canonical: "https://hexmos.com/freedevtools/tldr/linux/e2image/"
description: "Save critical ext2/ext3/ext4 filesystem metadata with e2image.  Restore metadata, create raw sparse files, and generate QCOW2 images. Free online tool, no registration required."
category: linux
keywords:
  - ext filesystem metadata saver
  - ext2 metadata management
  - ext3 metadata backup
  - ext4 metadata restore
  - linux filesystem metadata tool
  - e2image command line
  - filesystem image creation
  - raw sparse image generator
  - QCOW2 image creation
  - linux file system utility
features:
  - Save ext2/ext3/ext4 filesystem metadata to a file.
  - Restore filesystem metadata from a backup image.
  - Create a large raw sparse file with metadata at the correct offsets.
  - Generate a QCOW2 image file of the filesystem metadata.
  - Print filesystem metadata to standard output.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# e2image

> Save critical ext2/ext3/ext4 filesystem metadata to a file.
> More information: <https://manned.org/e2image>.

- Write metadata located on device to a specific file:

`e2image {{/dev/sdXN}} {{path/to/image_file}}`

- Print metadata located on device to `stdout`:

`e2image {{/dev/sdXN}} -`

- Restore the filesystem metadata back to the device:

`e2image -I {{/dev/sdXN}} {{path/to/image_file}}`

- Create a large raw sparse file with metadata at proper offsets:

`e2image -r {{/dev/sdXN}} {{path/to/image_file}}`

- Create a [Q]COW2 image file instead of a normal or raw image file:

`e2image -Q {{/dev/sdXN}} {{path/to/image_file}}`
