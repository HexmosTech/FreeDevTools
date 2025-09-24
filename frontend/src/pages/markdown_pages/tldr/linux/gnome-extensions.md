---
title: "Manage GNOME Extensions - Control Shell Extensions | Online Free DevTools by Hexmos"
name: gnome-extensions
path: /freedevtools/tldr/linux/gnome-extensions
canonical: "https://hexmos.com/freedevtools/tldr/linux/gnome-extensions/"
description: "Manage GNOME shell extensions efficiently with gnome-extensions. List, enable, disable, and uninstall extensions via the command line. Free online tool, no registration required."
category: linux
keywords:
  - gnome extension manager
  - gnome shell extension control
  - linux extension management
  - gnome-extensions command
  - terminal extension control
  - gnome extension listing
  - linux command-line tool
  - gnome extension installation
  - extension uninstall tool
  - gnome shell management
features:
  - List all installed GNOME extensions
  - Enable or disable specific extensions
  - Uninstall unwanted extensions
  - Get detailed information on individual extensions
  - Manage extensions via simple command-line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gnome-extensions

> Manage gnome extensions from the terminal.
> More information: <https://wiki.gnome.org/Projects/GnomeShell/Extensions>.

- List all the installed extensions:

`gnome-extensions list`

- Display information about a specific extension:

`gnome-extensions info "{{extension_id}}"`

- Enable a specific extension:

`gnome-extensions enable "{{extension_id}}"`

- Disable a specific extension:

`gnome-extensions disable "{{extension_id}}"`

- Uninstall a specific extension:

`gnome-extensions uninstall "{{extension_id}}"`

- Display help for a specific subcommand (like `list`):

`gnome-extensions help {{subcommand}}`

- Display version:

`gnome-extensions version`
