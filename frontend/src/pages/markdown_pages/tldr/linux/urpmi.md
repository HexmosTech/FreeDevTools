---
title: "Install Packages - Control Mageia Packages with urpmi | Free DevTools"
name: urpmi
path: "/freedevtools/tldr/linux/urpmi"
canonical: "https://hexmos.com/freedevtools/tldr/linux/urpmi/"
description: "Install packages effortlessly with urpmi for Mageia. Manage software installations, updates, and dependencies with ease. Free online tool, no registration required."
category: linux
keywords:
- mageia package manager
- linux package installer
- urpmi install package
- rpm package management
- mageia software update
- linux command line package tool
- urpmi dependency resolution
- mageia package repository
- urpmi orphaned packages
- install local rpm linux
features:
- Install packages from repositories or local RPM files
- Download packages without immediate installation
- Update all installed packages automatically
- Update packages across multiple machines in parallel
- Mark orphaned packages as manually installed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# urpmi

> Install packages in Mageia.
> See also: `urpm.update`, `urpme`, `urpmi.addmedia`, `urpmi.removemedia`, `urpmf`, `urpmq`.
> More information: <https://man.linuxreviews.org/man8/urpmi.8.html>.

- Install a package from the repository or from a local RPM file:

`sudo urpmi {{package|path/to/file.rpm}}`

- Download a package without installing it:

`urpmi --no-install {{package}}`

- Update all installed packages (run `urpmi.update -a` to get the available updates):

`sudo urpmi --auto-select`

- Update a package of one or more machines on the network according to `/etc/urpmi/parallel.cfg`:

`sudo urpmi --parallel local {{package}}`

- Mark all orphaned packages as manually installed:

`sudo urpmi $(urpmq --auto-orphans -f)`
