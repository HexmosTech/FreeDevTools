---
title: "Genie - Manage systemd under WSL | Online Free DevTools by Hexmos"
name: genie
path: /freedevtools/tldr/linux/genie
canonical: "https://hexmos.com/freedevtools/tldr/linux/genie/"
description: "Manage systemd processes with Genie under WSL. Easily initialize, run shells, and execute commands within a bottle namespace. Free online tool, no registration required."
category: linux
keywords:
- systemd WSL manager
- linux namespace tool
- windows subsystem for linux genie
- genie systemd bottle
- wsl systemd control
- linux systemd utility
- command execution wsl
- linux namespace initialization
- wsl login shell
- genie command runner
features:
- Initialize a bottle namespace for systemd.
- Run a login shell within a bottle.
- Execute specific commands inside the bottle environment.
- Manage systemd processes under WSL.
- Provide a controlled environment for Linux applications.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# genie

> Set up and use a "bottle" namespace to run systemd under WSL (Windows Subsystem for Linux).
> To run these from Windows rather than an already-running distribution, precede them with `wsl`.
> More information: <https://github.com/arkane-systems/genie>.

- Initialize the bottle (run once, at start):

`genie {{[-i|--initialize]}}`

- Run a login shell inside the bottle:

`genie {{[-s|--shell]}}`

- Run a specified command inside the bottle:

`genie {{[-c|--command]}} {{command}}`
