---
title: "WSL - Manage Linux Subsystems on Windows | Free DevTools"
name: wsl
path: /freedevtools/tldr/windows/wsl
canonical: "https://hexmos.com/freedevtools/tldr/windows/wsl/"
description: "Manage Linux subsystems on Windows with WSL. Control distributions, execute commands, and interact with Linux environments. Free online tool, no registration required."
category: windows
keywords:
- windows subsystem linux
- wsl command
- linux on windows
- wsl distributions
- wsl export
- wsl import
- windows linux shell
- wsl shutdown
- windows command line linux
- linux terminal windows
features:
- Start a Linux shell in a specified distribution.
- Execute Linux commands directly from the Windows command line.
- Export and import Linux distributions to/from `.tar` files.
- Change the WSL version used for a specific distribution.
- Shutdown the Windows Subsystem for Linux environment.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wsl

> Manage the Windows Subsystem for Linux.
> More information: <https://learn.microsoft.com/windows/wsl/reference>.

- Start a Linux shell (in the default distribution):

`wsl {{shell_command}}`

- Run a Linux command without using a shell:

`wsl {{[-e|--exec]}} {{command}} {{command_arguments}}`

- Specify a particular distribution:

`wsl {{[-d|--distribution]}} {{distribution}} {{shell_command}}`

- List available distributions:

`wsl {{[-l|--list]}}`

- Export a distribution to a `.tar` file:

`wsl --export {{distribution}} {{path\to\distro_file.tar}}`

- Import a distribution from a `.tar` file:

`wsl --import {{distribution}} {{path\to\install_location}} {{path/to/distro_file.tar}}`

- Change the version of wsl used for the specified distribution:

`wsl --set-version {{distribution}} {{version}}`

- Shut down Windows Subsystem for Linux:

`wsl --shutdown`
