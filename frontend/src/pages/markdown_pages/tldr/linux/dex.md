---
title: "Generate DesktopEntry Files - dex Command | Free DevTools"
name: dex
path: /freedevtools/tldr/linux/dex
canonical: "https://hexmos.com/freedevtools/tldr/linux/dex/"
description: "Generate and execute DesktopEntry files with the dex command.  Manage application autostart, preview executions, and create desktop entries easily. Free online tool, no registration required."
category: linux
keywords:
  - desktop entry generator
  - desktop file creator
  - linux desktop entry
  - autostart manager
  - application launcher
  - desktop entry execution
  - dex command
  - gnome autostart
  - program execution
  - file management
features:
  - Generate DesktopEntry files for applications.
  - Execute applications from autostart folders.
  - Preview program execution without actually running them.
  - Manage application autostart entries in GNOME and other environments.
  - Create and execute single programs with terminal configurations.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dex

> DesktopEntry Execution is a program to generate and execute DesktopEntry files of the Application type.
> More information: <https://github.com/jceb/dex>.

- Execute all programs in the autostart folders:

`dex {{[-a|--autostart]}}`

- Execute all programs in the specified folders:

`dex {{[-a|--autostart]}} {{[-s|--search-paths]}} {{path/to/directory1}}:{{path/to/directory2}}:{{path/to/directory3}}:`

- Preview the programs would be executed in a GNOME specific autostart:

`dex {{[-a|--autostart]}} {{[-e|--environment]}} {{GNOME}}`

- Preview the programs would be executed in a regular autostart:

`dex {{[-a|--autostart]}} {{[-d|--dry-run]}}`

- Preview the value of the DesktopEntry property `Name`:

`dex {{[-p|--property]}} {{Name}} {{path/to/file.desktop}}`

- Create a DesktopEntry for a program in the current directory:

`dex {{[-c|--create]}} {{path/to/file.desktop}}`

- Execute a single program (with `Terminal=true` in the desktop file) in the given terminal:

`dex --term {{terminal}} {{path/to/file.desktop}}`
