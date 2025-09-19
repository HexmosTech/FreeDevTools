---
title: "Flatpak Update - Manage App Updates on Linux | Online Free DevTools by Hexmos"
name: flatpak-update
path: /freedevtools/tldr/linux/flatpak-update
canonical: "https://hexmos.com/freedevtools/tldr/linux/flatpak-update/"
description: "Manage Flatpak updates with Flatpak Update on Linux. Effortlessly update applications, runtimes, and even downgrade to specific commits. Free online tool, no registration required."
category: linux
keywords:
- flatpak update
- linux flatpak update
- application update linux
- runtime update linux
- flatpak package manager
- flatpak command line
- linux app management
- flatpak version control
- flatpak downgrade
- flatpak commit update
features:
- Update all installed Flatpak applications.
- Update Flatpak runtimes.
- Update a specific Flatpak application.
- Downgrade Flatpak applications to a specific commit.
- Automatically confirm update prompts.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flatpak update

> Update flatpak applications and runtimes.
> More information: <https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak-update>.

- Update all installed applications and runtimes (use `-y` to confirm all prompts automatically):

`flatpak update`

- Update only a specific app:

`flatpak update {{com.example.app}}`

- Update/Downgrade to a specific commit (also see flatpak remote-info and flatpak mask):

`flatpak update --commit={{COMMIT}} {{com.example.app}}`
