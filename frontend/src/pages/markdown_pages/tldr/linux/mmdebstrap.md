---
title: "Create Debian Chroots with mmdebstrap | Online Free DevTools by Hexmos"
name: mmdebstrap
path: /freedevtools/tldr/linux/mmdebstrap
canonical: "https://hexmos.com/freedevtools/tldr/linux/mmdebstrap/"
description: "Create Debian chroots quickly with mmdebstrap, a powerful alternative to debootstrap.  Generate customized chroots with ease using various options including specifying mirrors and packages. Free online tool, no registration required."
category: linux
keywords:
  - debian chroot creator
  - mmdebstrap linux
  - debian installer command
  - linux system builder
  - create debian chroot
  - mmdebstrap tutorial
  - debian root creator
  - debian package installer
  - linux chroot manager
  - build debian system
features:
  - Creates Debian chroots from various sources.
  - Supports different Debian releases (stable, bookworm, sid).
  - Allows specifying custom mirrors for faster downloads.
  - Enables inclusion of additional packages during chroot creation.
  - Generates tarball chroots for portability and offline use.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mmdebstrap

> Create a Debian chroot.
> Alternative to `debootstrap`.
> More information: <https://gitlab.mister-muffin.de/josch/mmdebstrap/>.

- Create a Debian Stable directory chroot:

`sudo mmdebstrap stable {{path/to/debian-root}}/`

- Create a Debian Bookworm tarball chroot using a mirror:

`mmdebstrap bookworm {{path/to/debian-bookworm.tar}} {{http://mirror.example.org/debian}}`

- Create a Debian Sid tarball chroot with additional packages:

`mmdebstrap sid {{path/to/debian-sid.tar}} --include={{pkg1,pkg2}}`
