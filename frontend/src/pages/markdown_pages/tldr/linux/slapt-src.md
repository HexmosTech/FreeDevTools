---
title: "Build Slackbuilds - Automate Builds with slapt-src | Free DevTools"
name: slapt-src
path: /freedevtools/tldr/linux/slapt-src
canonical: "https://hexmos.com/freedevtools/tldr/linux/slapt-src/"
description: "Automate Slackbuild builds with slapt-src. Simplify package management and software installation on Slackware Linux. Free online tool, no registration required."
category: linux
keywords:
- slackbuild builder
- linux package manager
- slackware package build
- slapt-src automated build
- build slackbuilds linux
- slackbuild installer
- slapt-src dependency resolver
- linux application builder
- command line package manager
- build from source linux
features:
- Automate building of Slackware packages.
- Update available slackbuild list.
- List available slackbuilds for installation.
- Search for specific slackbuilds by name or description.
- Display detailed information about a slackbuild.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# slapt-src

> A utility to automate building of slackbuilds.
> SlackBuild sources need to be configured in the slapt-srcrc file.
> More information: <https://github.com/jaos/slapt-src>.

- Update the list of available slackbuilds and versions:

`slapt-src {{[-u|--update]}}`

- List all available slackbuilds:

`slapt-src {{[-l|--list]}}`

- Fetch, build and install the specified slackbuild(s):

`slapt-src {{[-i|--install]}} {{slackbuild_name}}`

- Locate slackbuilds by their name or description:

`slapt-src {{[-s|--search]}} {{search_term}}`

- Display information about a slackbuild:

`slapt-src {{[-w|--show]}} {{slackbuild_name}}`
