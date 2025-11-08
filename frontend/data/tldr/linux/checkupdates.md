---
title: "Check Updates - List Pending Updates in Linux | Online Free DevTools by Hexmos"
name: checkupdates
path: "/freedevtools/tldr/linux/checkupdates/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/checkupdates/"
description: "List pending updates with checkupdates, a command-line tool for Arch Linux. Monitor package updates without syncing, and manage cached packages. Free online tool, no registration required."
category: linux
keywords:
  - arch linux update checker
  - linux package updates
  - checkupdates command
  - pacman update list
  - arch linux upgrade
  - terminal update manager
  - command line package update
  - linux system upgrade tool
  - pacman cache updates
  - arch linux package management
features:
  - List pending package updates in Arch Linux.
  - Check for updates without syncing the database.
  - Download package updates to the pacman cache.
  - Utilize a specific pacman database for updates.
  - Display help information for the command.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# checkupdates

> Check pending updates in Arch Linux.
> More information: <https://manned.org/checkupdates>.

- Synchronize the database and list pending updates:

`checkupdates`

- List pending updates without syncing the database:

`checkupdates {{[-n|--nosync]}}`

- Display the list of pending updates if it differs from the last time this option was used:

`checkupdates {{[-c|--change]}}`

- List pending updates and download the packages to the `pacman` cache (`/var/cache/pacman/pkg`):

`checkupdates {{[-d|--download]}}`

- List pending updates using a specific `pacman` database:

`CHECKUPDATES_DB={{path/to/directory}} checkupdates`

- Display help:

`checkupdates {{[-h|--help]}}`
