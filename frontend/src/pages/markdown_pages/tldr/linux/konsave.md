---
title: "Konsave - Manage Linux Configurations | Online Free DevTools by Hexmos"
name: konsave
path: /freedevtools/tldr/linux/konsave
canonical: "https://hexmos.com/freedevtools/tldr/linux/konsave/"
description: "Manage Linux customizations easily with Konsave. Save, apply, and manage profiles for your system configurations. Free online tool, no registration required."
category: linux
keywords:
  - linux configuration manager
  - linux profile manager
  - konsave linux tool
  - linux system customization
  - save linux settings
  - apply linux profiles
  - linux configuration profiles
  - export linux config
  - import linux config
  - manage linux profiles
features:
  - Save current Linux configuration as a profile.
  - Apply saved profiles to restore configurations.
  - Manage multiple configuration profiles simultaneously.
  - Export and import profiles for sharing and backup.
  - Force overwrite existing profiles during saving.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# konsave

> Save and apply your Linux customizations with just one command.
> More information: <https://github.com/Prayag2/konsave>.

- Save the current configuration as a profile:

`konsave {{[-s|--save]}} {{profile_name}}`

- Apply a profile:

`konsave {{[-a|--apply]}} {{profile_name}}`

- Save the current configuration as a profile, overwriting existing profiles if they exist with the same name:

`konsave {{[-s|--save]}} {{profile_name}} {{[-f|--force]}}`

- List all profiles:

`konsave {{[-l|--list]}}`

- Remove a profile:

`konsave {{[-r|--remove]}} {{profile_name}}`

- Export a profile as a `.knsv` to the home directory:

`konsave {{[-e|--export-profile]}} {{profile_name}}`

- Import a `.knsv` profile:

`konsave {{[-i|--import-profile]}} {{path/to/profile_name.knsv}}`
