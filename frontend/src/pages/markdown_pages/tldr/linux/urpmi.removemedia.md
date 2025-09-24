---
title: "Remove Media - Manage URPMI Repositories | Online Free DevTools by Hexmos"
name: urpmi.removemedia
path: /freedevtools/tldr/linux/urpmi.removemedia
canonical: "https://hexmos.com/freedevtools/tldr/linux/urpmi.removemedia/"
description: "Remove media with URPMI in Linux. Efficiently manage software repositories by removing obsolete or unwanted sources. Free online tool, no registration required."
category: linux
keywords:
- linux urpmi remove media
- urpmi repository management
- mageia package management
- remove urpmi repository linux
- urpmi media source removal
- linux package manager
- urpmi remove repository
- mageia repository cleanup
- urpmi delete media
- linux software source control
features:
- Remove specific URPMI media by name
- Remove all configured URPMI media
- Fuzzy search media names before removing
- Manage Mageia software repositories efficiently
- Simplify package management tasks in Linux
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# urpmi.removemedia

> Remove media in Mageia.
> Note: Mageia documentation uses medium and repository as synonymous.
> See also: `urpmi`, `urpme`, `urpmi.addmedia`, `urpmi.update`, `urpmf`, `urpmq`.
> More information: <https://man.linuxreviews.org/man8/urpmi.removemedia.8.html>.

- Remove a medium:

`sudo urpmi.removemedia {{medium}}`

- Remove [a]ll media:

`sudo urpmi.removemedia -a`

- Remove media fuzz[y] matching on media names:

`sudo urpmi.removemedia -y {{keyword}}`
