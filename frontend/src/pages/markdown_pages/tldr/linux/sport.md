---
title: "Search SlackBuilds - Install Packages with Sport | Free DevTools"
name: sport
path: /freedevtools/tldr/linux/sport
canonical: "https://hexmos.com/freedevtools/tldr/linux/sport/"
description: "Search and install SlackBuilds with Sport. Quickly find, check, and install packages on your Slackware system. Free online tool, no registration required."
category: linux
keywords:
  - slackbuild package manager
  - slackware package installer
  - sport slackbuild search
  - linux package manager
  - command line package install
  - slackbuild repository
  - package dependency resolution
  - slackware package updates
  - rsync package management
  - software installation linux
features:
  - Search for packages by name
  - Check if a package is installed
  - Display README and .info files
  - Install packages with dependency resolution
  - Update package lists from remote repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sport

> Search and install SlackBuilds.
> More information: <http://slackermedia.info/handbook/doku.php?id=slackbuilds>.

- Pull the list of SlackBuilds to run `sport` for the first time:

`sudo mkdir {{[-p|--parents]}} /usr/ports && sudo rsync {{[-av|--archive --verbose]}} rsync://slackbuilds.org /slackbuilds/$(awk '{print $2}' /etc/slackware-version)/ /usr/ports/`

- Pull in any updates to the system's tree via `rsync`:

`sudo sport rsync`

- Search for a package by name:

`sport search "{{keyword}}"`

- Check if a package is installed:

`sport check {{package}}`

- Display README and `.info` files of a package:

`sport cat {{package}}`

- Install a package once the dependencies are resolved:

`sudo sport install {{package}}`

- Install a list of packages from a file (format: packages separated by spaces):

`sudo sport install $(< {{path/to/list}})`
