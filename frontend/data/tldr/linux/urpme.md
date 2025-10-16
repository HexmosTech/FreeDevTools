---
title: "Urpme - Uninstall Packages in Mageia | Online Free DevTools by Hexmos"
name: urpme
path: "/freedevtools/tldr/linux/urpme/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/urpme/"
description: "Uninstall packages with Urpme, the Mageia package manager. Remove software, dependencies, and orphans. Free online tool, no registration required."
category: linux
keywords:
- linux package manager
- mageia package removal
- urpme uninstall
- rpm package manager
- linux dependency removal
- orphan package removal linux
- command line package uninstall
- mageia software removal
- urpme command
- linux urpme
features:
- Uninstall specified packages
- Remove orphan packages automatically
- Uninstall packages and their dependencies recursively
- Manage software packages on Mageia Linux
- Remove software using the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# urpme

> Uninstall packages in Mageia.
> See also: `urpmi`, `urpmi.update`, `urpmi.addmedia`, `urpmi.removemedia`, `urpmf`, `urpmq`.
> More information: <https://man.linuxreviews.org/man8/urpme.8.html>.

- Uninstall a package:

`sudo urpme {{package}}`

- Uninstall orphan packages (Note: Use it with caution as it might unintentionally remove important packages):

`sudo urpme --auto-orphans`

- Uninstall a package and its dependencies:

`sudo urpme --auto-orphans {{package}}`
