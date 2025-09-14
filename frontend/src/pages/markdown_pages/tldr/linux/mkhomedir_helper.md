---
title: "Create Home Directory - Manage User Profiles | Free DevTools"
name: mkhomedir_helper
path: /freedevtools/tldr/linux/mkhomedir_helper
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkhomedir_helper/"
description: "Create user home directories efficiently with mkhomedir_helper. Manage user profiles and set permissions from the command line. Free online tool, no registration required."
category: linux
keywords:
- Linux home directory creator
- User profile manager Linux
- Skeleton directory setup Linux
- mkhomedir_helper Linux command
- Linux user account creation
- Permission management Linux
- Linux profile initialization
- Linux file system automation
- Create user folder Linux
- Linux default profile configuration
features:
- Create home directories for new users
- Copy files from a skeleton directory
- Set default file permissions (umask)
- Automate user profile creation on Linux
- Customize user home directory contents
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkhomedir_helper

> Create the user's home directory after creating the user.
> More information: <https://manned.org/mkhomedir_helper>.

- Create a home directory for a user based on `/etc/skel` with umask 022:

`sudo mkhomedir_helper {{username}}`

- Create a home directory for a user based on `/etc/skel` with all permissions for owner (0) and read permission for group (3):

`sudo mkhomedir_helper {{username}} {{037}}`

- Create a home directory for a user based on a custom skeleton:

`sudo mkhomedir_helper {{username}} {{umask}} {{path/to/skeleton_directory}}`
