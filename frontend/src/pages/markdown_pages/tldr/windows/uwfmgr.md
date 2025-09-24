---
title: "UWF Manager - Control Windows Write Filter | Online Free DevTools by Hexmos"
name: uwfmgr
path: /freedevtools/tldr/windows/uwfmgr
canonical: "https://hexmos.com/freedevtools/tldr/windows/uwfmgr/"
description: "Control Windows Unified Write Filter (UWF) with UWF Manager. Protect drives by redirecting writes to a virtual overlay. Free online tool, no registration required."
category: windows
keywords:
- Windows UWF Manager
- Unified Write Filter
- Windows drive protection
- Virtual overlay protection
- Windows UWF configuration
- UWF file commit
- UWF volume management
- UWF enable disable
- Windows system hardening
- Windows write redirection
features:
- Enable or disable UWF protection on Windows
- Protect specific drives with the Unified Write Filter
- Commit file changes on protected drives to persist across reboots
- Remove drives from the UWF protection list
- Manage the UWF configuration settings on Windows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# uwfmgr

> Unified Write Filter (UWF).
> Protect drives by redirecting any writes to the drive to a virtual overlay. Writes are discarded upon reboot unless committed by default.
> More information: <https://learn.microsoft.com/windows/iot/iot-enterprise/customize/unified-write-filter>.

- Get the current status:

`uwfmgr get-config`

- Set a drive as protected:

`uwfmgr volume protect {{drive_letter}}:`

- Remove a drive from protection list:

`uwfmgr volume unprotect {{drive_letter}}:`

- Enable or disable protection (Applies after reboot):

`uwfmgr filter {{enable|disable}}`

- Commit changes of a file on protected drive:

`uwfmgr file commit {{drive_letter:\path\to\file}}`

- Commit deletion of a file on protected drive:

`uwfmgr file commit-delete {{drive_letter:\path\to\file}}`
