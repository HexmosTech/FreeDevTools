---
title: "Check Debian Packages - Identify Non-Free Software | Online Free DevTools by Hexmos"
name: check-dfsg-status
path: /freedevtools/tldr/linux/check-dfsg-status
canonical: "https://hexmos.com/freedevtools/tldr/linux/check-dfsg-status/"
description: "Identify non-free Debian packages with check-dfsg-status.  This command quickly lists non-free and contrib packages installed on your system. Free online tool, no registration required."
category: linux
keywords:
  - Debian package checker
  - Linux package analysis
  - Non-free software identifier
  - Debian system audit
  - Package dependency analysis
  - Free software compliance
  - Debian security audit
  - System package review
  - Check-dfsg-status command
  - Debian package manager
features:
  - Lists non-free and contrib packages installed on Debian-based systems.
  - Provides detailed descriptions of identified non-free packages.
  - Offers a sparse output mode for listing only package names.
  - Helps ensure compliance with free software guidelines.
  - Simplifies the identification of potentially problematic packages.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# check-dfsg-status

> Report non-free packages installed on Debian-based OSes.
> This command was formerly known as `vrms`.
> More information: <https://salsa.debian.org/debian/check-dfsg-status>.

- List non-free and contrib packages (and their description):

`check-dfsg-status`

- Only output the package names:

`check-dfsg-status {{[-s|--sparse]}}`
