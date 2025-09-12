---
title: "Ego - Manage System Personalities | Free DevTools"
name: ego
path: /freedevtools/tldr/linux/ego
canonical: "https://hexmos.com/freedevtools/tldr/linux/ego/"
description: "Manage system personalities with Ego. Configure bootloaders, synchronize Portage trees, and query bugs. Free online tool, no registration required."
category: linux
keywords:
- system personality manager
- linux system configuration
- portage tree synchronization
- funtoo bootloader update
- wiki page reader
- profile manager linux
- mix-in configuration linux
- funtoo bug query
- ego command line tool
- linux profile control
features:
- Synchronize the Portage tree
- Update the bootloader configuration
- Read Funtoo wiki pages
- Print the current system profile
- Enable or disable mix-ins
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ego

> Funtoo's official system personality management tool.
> More information: <https://funtoo-ego.readthedocs.io/en/develop/>.

- Synchronize the Portage tree:

`ego sync`

- Update the bootloader configuration:

`ego boot update`

- Read a Funtoo wiki page by name:

`ego doc {{wiki_page}}`

- Print current profile:

`ego profile show`

- Enable/Disable mix-ins:

`ego profile mix-in +{{gnome}} -{{kde-plasma-5}}`

- Query Funtoo bugs, related to a specified package:

`ego query bug {{package}}`
