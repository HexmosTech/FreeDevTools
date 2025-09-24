---
title: "TLMGR Pinning - Manage Package Pinning | Online Free DevTools by Hexmos"
name: tlmgr-pinning
path: /freedevtools/tldr/tlmgr/tlmgr-pinning
canonical: "https://hexmos.com/freedevtools/tldr/tlmgr/tlmgr-pinning/"
description: "Manage TLMGR package pinning with TLMGR Pinning. Add, remove, and show pinning data for package repositories. Free online tool, no registration required."
category: common
keywords:
- TLMGR package pinning
- TeX Live package manager
- TLMGR repository management
- TLMGR pinning configuration
- LaTeX package pinning
- TeX Live pinning tool
- Package repository control
- TLMGR update control
- Linux package pinning
- macOS package pinning
features:
- Show current package pinning data
- Pin packages to specific repositories
- Remove specific packages from pinning
- Remove all pinning data for a repository
- Manage package versions for TeX Live
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tlmgr pinning

> The pinning action manages the pinning file.
> More information: <https://www.tug.org/texlive/doc/tlmgr.html#pinning>.

- Show the current pinning data:

`tlmgr pinning show`

- Pin the matching the packages to the given repository:

`tlmgr pinning add {{repository}} {{package1 package2 ...}}`

- Remove any packages recorded in the pinning file matching the packages for the given repository:

`tlmgr pinning remove {{repository}} {{package1 package2 ...}}`

- Remove all pinning data for the given repository:

`tlmgr pinning remove {{repository}} --all`
