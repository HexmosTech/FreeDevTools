---
title: "SteamCMD - Control Steam Applications | Online Free DevTools by Hexmos"
name: steamcmd
path: /freedevtools/tldr/st/steamcmd
canonical: "https://hexmos.com/freedevtools/tldr/st/steamcmd/"
description: "Control Steam applications with SteamCMD. Install, update, and manage games using command line interface. Free online tool, no registration required."
category: common
keywords:
- SteamCMD application management
- Steam command line tool
- Steam app installer
- Steam game updater
- Steam download manager
- Steam anonymous login
- Steam update validate
- Steam platform force
- Steam user logout
- Steam game deployment
features:
- Install Steam applications anonymously
- Update Steam applications with credentials
- Force install platform type for apps
- Clear cached Steam login credentials
- Validate application integrity after update
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# steamcmd

> A command-line version of the Steam client.
> More information: <https://manned.org/steamcmd>.

- Install or update an application anonymously:

`steamcmd +login {{anonymous}} +app_update {{appid}} +quit`

- Install or update an application using the specified credentials:

`steamcmd +login {{username}} +app_update {{appid}} +quit`

- Install an application for a specific platform:

`steamcmd +@sSteamCmdForcePlatformType {{windows}} +login {{anonymous}} +app_update {{appid}} validate +quit`

- Clear cached login credentials for a user:

`steamcmd +login {{username}} +logout +quit`
