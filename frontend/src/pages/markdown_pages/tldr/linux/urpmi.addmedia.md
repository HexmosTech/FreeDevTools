---
title: "Add Mageia Media - Control Repositories | Online Free DevTools by Hexmos"
name: urpmi.addmedia
path: /freedevtools/tldr/linux/urpmi.addmedia
canonical: "https://hexmos.com/freedevtools/tldr/linux/urpmi.addmedia/"
description: "Add Mageia repositories and control media sources with urpmi.addmedia. Manage package sources and update your system effortlessly. Free online tool, no registration required."
category: linux
keywords:
- Mageia repository manager
- Linux package manager
- urpmi media source control
- Mageia urpmi.addmedia command
- RPM package management Linux
- Mageia mirror selection tool
- Linux distribution update tool
- Command-line repository configuration
- RPM package source management
- Mageia package installation tool
features:
- Add media sources to the urpmi configuration
- Specify repository URLs for package updates
- Configure mirror lists for automatic mirror selection
- Add media from local hard drives
- Manage package sources in Mageia Linux
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# urpmi.addmedia

> Add media in Mageia.
> Note: Mageia documentation uses medium and repository as synonymous.
> See also: `urpmi`, `urpmi.update`, `urpme`, `urpmi.removemedia`, `urpmf`, `urpmq`.
> More information: <https://man.linuxreviews.org/man8/urpmi.addmedia.8.html>.

- Add a medium:

`sudo urpmi.addmedia {{medium}} {{ftp://ftp.site.com/path/to/Mageia/RPMS}}`

- Add a medium from a hard drive (run `genhdlist2` in the directory first):

`sudo urpmi.addmedia --distrib HD file://{{path/to/repo}}`

- Add important media from a chosen mirror:

`sudo urpmi.addmedia --distrib ftp://{{mirror_website}}/mirror/mageia/distrib/{{version}}/{{arch}}`

- Automatically select mirrors from a mirror list:

`sudo urpmi.addmedia --distrib --mirrorlist {{mirrorlist}}`
