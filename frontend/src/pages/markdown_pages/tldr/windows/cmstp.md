---
title: "CMSTP - Manage Connection Profiles | Online Free DevTools by Hexmos"
name: cmstp
path: /freedevtools/tldr/windows/cmstp
canonical: "https://hexmos.com/freedevtools/tldr/windows/cmstp/"
description: "Manage connection profiles with CMSTP. Install, uninstall, and configure connection service profiles on Windows easily. Free online tool, no registration required."
category: windows
keywords:
- Connection Profile Management
- CMSTP Installer Windows
- Windows Connection Manager
- Connection Service Profiles
- Install Connection Profiles
- Uninstall Connection Profiles
- Windows CMSTP Command
- Connection Settings Windows
- CMSTP silent install
- Windows Profile Installer
features:
- Install connection service profiles from file
- Uninstall existing connection service profiles
- Perform silent installations without prompts
- Install profiles for the current user only
- Install profiles for all users with admin privileges
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cmstp

> Manage connection service profiles.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/cmstp>.

- Install a specific profile:

`cmstp "{{path\to\profile_file}}"`

- Install without creating a desktop shortcut:

`cmstp /ns "{{path\to\profile_file}}"`

- Install without checking for dependencies:

`cmstp /nf "{{path\to\profile_file}}"`

- Only install for the current user:

`cmstp /su "{{path\to\profile_file}}"`

- Install for all users (requires administrator privileges):

`cmstp /au "{{path\to\profile_file}}"`

- Install silently without any prompts:

`cmstp /s "{{path\to\profile_file}}"`

- Uninstall a specific profile:

`cmstp /u "{{path\to\profile_file}}"`

- Uninstall silently without a confirmation prompt:

`cmstp /u /s "{{path\to\profile_file}}"`
