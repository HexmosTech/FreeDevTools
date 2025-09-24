---
title: "Control SteamOS Dev Mode - Enable Developer Features | Online Free DevTools by Hexmos"
name: steamos-devmode
path: /freedevtools/tldr/linux/steamos-devmode
canonical: "https://hexmos.com/freedevtools/tldr/linux/steamos-devmode/"
description: "Control SteamOS developer mode with steamos-devmode. Enable or disable developer features and manage package installations. Free online tool, no registration required."
category: linux
keywords:
- steamos developer mode
- linux developer mode
- steamos devmode
- steamos package manager
- linux development tools
- steamos development environment
- linux command line tools
- steamos read-only disable
- linux system configuration
- steamos debugging tools
features:
- Enable SteamOS developer mode
- Disable SteamOS developer mode
- Bypass confirmation prompts for enabling dev mode
- Check the status of SteamOS developer mode
- Initialize the SteamOS package manager
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# steamos-devmode

> Enable SteamOS developer mode.
> Note: Developer mode disables read-only protections and initializes the package manager.
> More information: <https://gitlab.com/users/evlaV/projects>.

- Enable developer mode:

`sudo steamos-devmode enable`

- Enable developer mode without confirmation prompt:

`sudo steamos-devmode enable --no-prompt`

- Check if developer mode is currently enabled:

`sudo steamos-devmode status`
