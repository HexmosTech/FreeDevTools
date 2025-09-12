---
title: "KDE Inhibit - Control Desktop Functions | Free DevTools"
name: kde-inhibit
path: /freedevtools/tldr/linux/kde-inhibit
canonical: "https://hexmos.com/freedevtools/tldr/linux/kde-inhibit/"
description: "Control desktop functions with KDE Inhibit. Inhibit power management and screen saver functions easily using the command line. Free online tool, no registration required."
category: linux
keywords:
  - desktop function control
  - KDE power management inhibit
  - KDE screen saver inhibit
  - KDE color correction inhibit
  - command line desktop control
  - linux desktop management
  - inhibit system functions
  - kde-inhibit command
  - plasma desktop utilities
  - linux system control
features:
  - Inhibit power management during command execution
  - Prevent screen saver activation during a process
  - Disable color correction while an application runs
  - Control desktop environment functionality via command line
  - Execute commands with temporary function restrictions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kde-inhibit

> Inhibit various desktop functions while a command runs.
> More information: <https://invent.kde.org/plasma/kde-cli-tools/-/blob/master/kdeinhibit/main.cpp>.

- Inhibit power management:

`kde-inhibit --power {{command}} {{command_arguments}}`

- Inhibit screen saver:

`kde-inhibit --screenSaver {{command}} {{command_arguments}}`

- Launch VLC, and inhibit color correction (night mode) while it's running:

`kde-inhibit --colorCorrect {{vlc}}`
