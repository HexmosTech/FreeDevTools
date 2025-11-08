---
title: "Generate Pacman Mirrors - Manjaro Linux Mirror List | Online Free DevTools by Hexmos"
name: shiny-mirrors
path: "/freedevtools/tldr/linux/shiny-mirrors/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/shiny-mirrors/"
description: "Generate Manjaro Linux pacman mirror lists with shiny-mirrors.  Easily manage and refresh your mirror sources for optimal download speeds. Free online tool, no registration required."
category: linux
keywords:
  - pacman mirror generator
  - manjaro mirror list
  - linux pacman mirrors
  - shiny-mirrors command
  - pacman mirror management
  - linux package manager mirrors
  - manjaro linux configuration
  - generate pacman config
  - system package updates
  - arch linux mirrors
features:
  - Generates customized pacman mirror lists for Manjaro Linux.
  - Refreshes mirror lists to ensure optimal download speeds.
  - Displays the current mirror configuration.
  - Allows switching between different mirror branches interactively.
  - Provides status information about the current mirrors.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# shiny-mirrors

> Generate a `pacman` mirror list for Manjaro Linux.
> Every run of shiny-mirrors requires you to synchronize your database and update your system using `sudo pacman -Syyu`.
> More information: <https://gitlab.com/Arisa_Snowbell/shiny-mirrors/-/blob/domina/shiny-mirrors/man/shiny-mirrors.md>.

- Get the status of the current mirrors:

`shiny-mirrors status`

- Generate a mirror list using the default behavior:

`sudo shiny-mirrors refresh`

- Display the current configuration file:

`shiny-mirrors config show`

- Switch to a different branch interactively:

`sudo shiny-mirrors config --branch`
