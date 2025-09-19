---
title: "Rank Mirrors - Prioritize Pacman Mirrors | Online Free DevTools by Hexmos"
name: rankmirrors
path: /freedevtools/tldr/linux/rankmirrors
canonical: "https://hexmos.com/freedevtools/tldr/linux/rankmirrors/"
description: "Prioritize Pacman mirrors with Rank Mirrors. Sort mirrorlists by connection speed for faster downloads on Arch Linux. Free online tool, no registration required."
category: linux
keywords:
- Pacman mirror ranking
- Arch Linux mirror sorting
- Linux mirror speed test
- Rank mirrors online
- Fastest Pacman mirrors
- Pacman mirrorlist generator
- Arch mirror speed optimization
- Mirror connection checker
- Linux package manager mirror
- Rankmirrors for Arch
features:
- Rank Pacman mirrors by connection speed
- Generate optimized mirrorlist for Pacman
- Test specific mirror URLs
- Output response times of mirrors
- Limit the number of top-ranking mirrors in output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rankmirrors

> Rank a list of Pacman mirrors by connection and opening speed.
> Writes the new mirrorlist to `stdout`.
> More information: <https://manned.org/rankmirrors>.

- Rank a mirror list:

`rankmirrors {{/etc/pacman.d/mirrorlist}}`

- Output only a given number of the top ranking servers:

`rankmirrors -n {{number}} {{/etc/pacman.d/mirrorlist}}`

- Be verbose when generating the mirrorlist:

`rankmirrors {{[-v|--verbose]}} {{/etc/pacman.d/mirrorlist}}`

- Test only a specific URL:

`rankmirrors {{[-u|--url]}} {{url}}`

- Output only the response times instead of a full mirrorlist:

`rankmirrors {{[-t|--times]}} {{/etc/pacman.d/mirrorlist}}`
