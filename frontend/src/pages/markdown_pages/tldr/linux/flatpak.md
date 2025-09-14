---
title: "Install Flatpak Applications - Manage Packages | Free DevTools"
name: flatpak
path: /freedevtools/tldr/linux/flatpak
canonical: "https://hexmos.com/freedevtools/tldr/linux/flatpak/"
description: "Install and manage Flatpak applications with Flatpak. Update packages, add repositories, and remove unused apps on Linux. Free online tool, no registration required."
category: linux
keywords:
  - flatpak application manager
  - flatpak package installer
  - flatpak command line
  - flatpak linux
  - flatpak install application
  - flatpak update packages
  - flatpak remove unused
  - flatpak remote repository
  - flatpak app manager
  - flatpak package management
features:
  - Install applications from remote sources
  - Update installed applications and runtimes
  - Add and manage remote repositories
  - Remove installed and unused applications
  - Display information about installed applications
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flatpak

> Build, install and run flatpak applications and runtimes.
> More information: <https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak>.

- Run an installed application:

`flatpak run {{com.example.app}}`

- Install an application from a remote source:

`flatpak install {{remote_name}} {{com.example.app}}`

- List installed applications, ignoring runtimes:

`flatpak list --app`

- Update all installed applications and runtimes:

`flatpak update`

- Add a remote source:

`flatpak remote-add --if-not-exists {{remote_name}} {{remote_url}}`

- Remove an installed application:

`flatpak remove {{com.example.app}}`

- Remove all unused applications:

`flatpak remove --unused`

- Show information about an installed application:

`flatpak info {{com.example.app}}`
