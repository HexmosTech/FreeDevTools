---
title: "Dconf Write - Control Key Values | Free DevTools"
name: dconf-write
path: /freedevtools/tldr/linux/dconf-write
canonical: "https://hexmos.com/freedevtools/tldr/linux/dconf-write/"
description: "Control and modify key values in Dconf databases with dconf write.  Manage various data types including strings, integers, booleans, and arrays. Free online tool, no registration required."
category: linux
keywords:
  - dconf key write
  - dconf value modification
  - linux configuration command
  - gsettings data manipulation
  - dconf database editor
  - gnome configuration tool
  - system settings modification
  - linux command line utility
  - dconf write command tutorial
  - advanced dconf usage
features:
  - Write specific key-value pairs to the Dconf database.
  - Modify existing key values or create new ones.
  - Supports writing empty array key values.
  - Provides a command-line interface for precise configuration changes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dconf write

> Write key values in dconf databases.
> See also: `dconf`.
> More information: <https://manned.org/dconf>.

- Write a specific key value:

`dconf write /{{path/to/key}} "{{value}}"`

- Write a specific string key value:

`dconf write /{{path/to/key}} "'{{string}}'"`

- Write a specific integer key value:

`dconf write /{{path/to/key}} "{{5}}"`

- Write a specific boolean key value:

`dconf write /{{path/to/key}} "{{true|false}}"`

- Write a specific array key value:

`dconf write /{{path/to/key}} "[{{'first', 'second', ...}}]"`

- Write a specific empty array key value:

`dconf write /{{path/to/key}} "@as []"`
