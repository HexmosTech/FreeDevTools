---
title: "Install TeX Live - Cross-Platform Installation | Online Free DevTools by Hexmos"
name: install-tl
path: "/freedevtools/tldr/install/install-tl/"
canonical: "https://hexmos.com/freedevtools/tldr/install/install-tl/"
description: "Install TeX Live seamlessly with install-tl. Perform cross-platform installation and customize your TeX distribution effortlessly. Free online tool, no registration required."
category: common
keywords:
- TeX Live installer
- cross-platform installer
- TeX distribution install
- LaTeX install
- install-tl command
- tex install macos
- tex install linux
- tex install windows
- tex live profile
- portable tex live
features:
- Perform text-based installations
- Launch GUI-based installations (requires Tcl/Tk)
- Install from a specific profile file
- Initialize settings from a profile file
- Install for portable device usage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# install-tl

> TeX Live cross-platform installer.
> More information: <https://tug.org/texlive/>.

- Start the text-based installer (default on Unix systems):

`install-tl -no-gui`

- Start the GUI installer (default on macOS and Windows, requires Tcl/Tk):

`install-tl -gui`

- Install TeX Live as defined in a specific profile file:

`install-tl -profile {{path/to/texlive.profile}}`

- Start the installer with the settings from a specific profile file:

`install-tl -init-from-file {{path/to/texlive.profile}}`

- Start the installer for installation on a portable device, like a USB stick:

`install-tl -portable`

- Display help:

`install-tl -help`
