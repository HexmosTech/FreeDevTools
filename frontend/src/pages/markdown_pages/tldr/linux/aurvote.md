---
title: "AUR Vote - Manage Arch User Repository Votes | Free DevTools"
name: aurvote
path: /freedevtools/tldr/linux/aurvote
canonical: "https://hexmos.com/freedevtools/tldr/linux/aurvote/"
description: "Manage AUR package votes with AUR Vote. Easily vote, unvote, and check package voting status on the Arch User Repository. Free online tool, no registration required."
category: linux
keywords:
- aur package vote
- arch user repository voting
- linux aurvote command
- aur package manager
- aur vote cli
- arch linux package voting
- aur package unvote
- aur package check vote
- aurvote linux command
- aur package management
features:
- Vote for Arch User Repository packages.
- Unvote Arch User Repository packages.
- Check if AUR packages have already been voted for.
- Interactively configure AUR credentials.
- Manage package votes directly from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aurvote

> Vote for packages in the Arch User Repository.
> To be able to vote, the file `~/.config/aurvote` must exist and contain your AUR credentials.
> More information: <https://github.com/archlinuxfr/aurvote>.

- Interactively create the file `~/.config/aurvote` containing your AUR username and password:

`aurvote --configure`

- Vote for one or more AUR packages:

`aurvote {{package1 package2 ...}}`

- Unvote one or more AUR packages:

`aurvote {{[-u|--unvote]}} {{package1 package2 ...}}`

- Check if one or more AUR packages have already been voted:

`aurvote {{[-c|--check]}} {{package1 package2 ...}}`

- Display help:

`aurvote {{[-h|--help]}}`
