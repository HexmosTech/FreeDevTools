---
title: "Generate Pacman Mirrorlist - Optimize Manjaro Repos | Online Free DevTools by Hexmos"
name: pacman-mirrors
path: /freedevtools/tldr/linux/pacman-mirrors
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-mirrors/"
description: "Generate a Pacman mirrorlist with pacman-mirrors, optimizing your Manjaro Linux repositories for faster updates.  Free online tool, no registration required."
category: linux
keywords:
- pacman mirrorlist generator
- manjaro mirror selection
- linux repository optimizer
- pacman mirror status
- manjaro update branch switch
- pacman geoip mirror
- linux pacman
- pacman mirror configuration
- manjaro repository management
- fasttrack mirror generation
features:
- Generate an optimized mirrorlist for Manjaro Linux
- Display the status of current mirrors
- Switch to a different update branch
- Generate a mirrorlist using mirrors in your country based on GeoIP
- Quickly generate mirrorlist with fasttrack setting
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pacman-mirrors

> Generate a `pacman` mirrorlist for Manjaro Linux.
> Every run of `pacman-mirrors` requires you to synchronize your database and update your system using `sudo pacman -Syyu`.
> See also: `pacman`.
> More information: <https://wiki.manjaro.org/index.php?title=Pacman-mirrors>.

- Generate a mirrorlist using the default settings:

`sudo pacman-mirrors --fasttrack`

- Get the status of the current mirrors:

`pacman-mirrors --status`

- Display the current branch:

`pacman-mirrors --get-branch`

- Switch to a different branch:

`sudo pacman-mirrors --api --set-branch {{stable|unstable|testing}}`

- Generate a mirrorlist, only using mirrors in your country:

`sudo pacman-mirrors --geoip`
