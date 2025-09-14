---
title: "Flatpak Info - View Remote Application Information | Free DevTools"
name: flatpak-remote-info
path: /freedevtools/tldr/linux/flatpak-remote-info
canonical: "https://hexmos.com/freedevtools/tldr/linux/flatpak-remote-info/"
description: "View Flatpak application information with Flatpak Remote Info. Inspect application details, check version history and examine commit details from remote repositories. Free online tool, no registration required."
category: linux
keywords:
- flatpak application information
- flatpak remote details
- linux package info
- flatpak version log
- flatpak commit details
- flatpak repository information
- application metadata viewer
- runtime information viewer
- linux application inspector
- flatpak package manager
features:
- Display detailed information about flatpak applications
- Show the log of previous versions in a remote
- View information for a specific commit hash
- Inspect runtime dependencies
- Retrieve metadata from remote repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flatpak remote-info

> Show information about an application or runtime in a remote.
> More information: <https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak-remote-info>.

- Show information about a flatpak:

`flatpak remote-info {{remote_name}} {{com.example.app}}`

- Show a log of previous versions in a remote:

`flatpak remote-info --log {{remote_name}} {{com.example.app}}`

- Show information about the specific commit, rather than the latest version:

`flatpak remote-info --commit={{COMMIT}} {{remote_name}} {{com.example.app}}`
