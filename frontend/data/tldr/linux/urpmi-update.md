---
title: "Update Mageia Packages - urpmi.update Command | Online Free DevTools by Hexmos"
name: urpmi.update
path: "/freedevtools/tldr/linux/urpmi-update/"
canonical: "https://hexmos-com/freedevtools/tldr/linux/urpmi-update/"
description: "Update Mageia package lists with the urpmi.update command. Manage repositories and update specific media or keywords. Free online tool, no registration required."
category: linux
keywords:
  - linux package update
  - mageia package manager
  - urpmi update command
  - linux repository management
  - update mageia packages
  - urpmi command line
  - linux system update
  - mageia software update
  - manage linux repositories
  - urpmi.update options
features:
  - Update all enabled package repositories.
  - Update specific repositories, including disabled ones.
  - Update repositories based on a keyword search.
  - Update all configured repositories with a single command.
  - Manage Mageia package lists efficiently from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# urpmi.update

> Update the list of packages from a package repository in Mageia.
> Note: Mageia documentation uses medium and repository as synonymous.
> See also: `urpmi`, `urpme`, `urpmi.addmedia`, `urpmi.removemedia`, `urpmf`, `urpmq`.
> More information: <https://man.linuxreviews.org/man8/urpmi.update.8.html>.

- Update all enabled media:

`urpmi.update -a`

- Update specific media (including disabled media):

`urpmi.update {{medium1 medium2 ...}}`

- Update all media that contain a specific keyword:

`urpmi.update {{keyword}}`

- Update all configured media:

`urpmi.update e`
