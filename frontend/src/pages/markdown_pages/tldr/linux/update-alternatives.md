---
title: "Manage Symbolic Links - Control Default Commands | Online Free DevTools by Hexmos"
name: update-alternatives
path: /freedevtools/tldr/linux/update-alternatives
canonical: "https://hexmos.com/freedevtools/tldr/linux/update-alternatives/"
description: "Control default commands by managing symbolic links with update-alternatives.  Easily add, remove, and configure links for various applications. Free online tool, no registration required."
category: linux
keywords:
  - symbolic link manager
  - linux command update-alternatives
  - manage default commands linux
  - command line symbolic link
  - update-alternatives tutorial
  - default command switcher
  - linux system administration
  - configure default programs
  - symbolic link management tools
  - alternative command selector
features:
  - Add new symbolic links to specify default commands.
  - Configure existing symbolic links to change default programs.
  - Remove unwanted symbolic links easily.
  - Display information about existing symbolic links.
  - Manage multiple versions of the same command.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# update-alternatives

> Convenientily maintain symbolic links to determine default commands.
> More information: <https://manned.org/update-alternatives>.

- Add a symbolic link:

`sudo update-alternatives --install {{path/to/symlink}} {{command_name}} {{path/to/command_binary}} {{priority}}`

- Configure a symbolic link for `java`:

`sudo update-alternatives --config {{java}}`

- Remove a symbolic link:

`sudo update-alternatives --remove {{java}} {{/opt/java/jdk1.8.0_102/bin/java}}`

- Display information about a specified command:

`update-alternatives --display {{java}}`

- Display all commands and their current selection:

`update-alternatives --get-selections`
