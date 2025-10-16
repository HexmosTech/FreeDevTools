---
title: "Importctl - Control Disk Images | Online Free DevTools by Hexmos"
name: importctl
path: "/freedevtools/tldr/linux/importctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/importctl/"
description: "Control disk images with Importctl. Download, import, and export disk images effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - disk image import
  - disk image export
  - disk image download
  - tarball import
  - raw image import
  - qcow2 image import
  - linux disk image
  - command line disk
  - image conversion tool
  - image management tool
features:
  - Download disk images from remote URLs.
  - Import raw disk images with compression support.
  - Export container images as tarball archives.
  - Convert disk images between raw and qcow2 formats.
  - Manage disk images with command-line interface.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# importctl

> Download, Import, or Export disk images.
> More information: <https://manned.org/importctl>.

- Download image in tarball format from a url via pull:

`sudo importctl pull-tar {{URL}} {{path/to/directory}}`

- Pull or download from a remote source that is either raw or qcow2 file, and stores it as a raw file:

`sudo importctl pull-raw {{https://example.com/source.ext}} {{name}} --class={{machine|portable|sysext|confext}}`

- Import a raw disk image into the image directory that is possibly compressed with xz, gzip, or bzip2:

`importctl import-raw {{path/to/file.ext}} {{name}} --class={{machine|portable|sysext|confext}}`

- Export a container image as tarball into current working directory:

`importctl export-tar --class={{machine|portable|sysext|confext}} {{name}} {{path/to/file.ext}}`
