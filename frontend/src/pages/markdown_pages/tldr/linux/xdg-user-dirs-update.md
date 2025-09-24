---
title: "Update XDG User Directories - Control File Paths | Online Free DevTools by Hexmos"
name: xdg-user-dirs-update
path: /freedevtools/tldr/linux/xdg-user-dirs-update
canonical: "https://hexmos.com/freedevtools/tldr/linux/xdg-user-dirs-update/"
description: "Control and update XDG user directories with xdg-user-dirs-update.  Manage your desktop, documents, and other directories easily from the command line. Free online tool, no registration required."
category: linux
keywords:
  - xdg directory management
  - xdg user directories update
  - linux file path management
  - xdg-user-dirs-update command
  - linux command line tools
  - manage xdg data directories
  - update desktop directory
  - configure xdg paths
  - xdg user directory settings
  - command-line directory control
features:
  - Change the location of XDG user directories.
  - Set the DESKTOP directory to a custom path.
  - Utilize a dry-run mode for previewing changes.
  - Update user directory configurations from the command line.
  - Manage multiple XDG directories simultaneously.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xdg-user-dirs-update

> Update XDG user directories.
> See also: `xdg-user-dir`.
> More information: <https://manned.org/xdg-user-dirs-update>.

- Change XDG's DESKTOP directory to the specified directory (must be absolute):

`xdg-user-dirs-update --set DESKTOP "{{path/to/directory}}"`

- Write the result to the specified dry-run-file instead of the `user-dirs.dirs` file:

`xdg-user-dirs-update --dummy-output "{{path/to/dry_run_file}}" --set {{xdg_user_directory}} "{{path/to/directory}}"`
