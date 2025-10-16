---
title: "Fakeroot - Run Commands as Root | Online Free DevTools by Hexmos"
name: fakeroot
path: "/freedevtools/tldr/linux/fakeroot/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fakeroot/"
description: "Run commands with fakeroot to simulate root privileges for file manipulation.  Easily manage file permissions and execute commands requiring elevated access. Free online tool, no registration required."
category: linux
keywords:
  - fakeroot command
  - linux fakeroot
  - simulate root privileges
  - file manipulation command
  - fakeroot tutorial
  - command line fakeroot
  - run commands as root
  - fakeroot example
  - root privileges simulation
  - system administration fakeroot
features:
  - Simulates root privileges without actual root access.
  - Executes commands with elevated permissions for file operations.
  - Saves and loads fakeroot environments for repeated use.
  - Offers options to maintain real file ownership.
  - Provides clear help documentation for usage.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fakeroot

> Run a command in an environment faking root privileges for file manipulation.
> More information: <https://manned.org/fakeroot.1>.

- Start the default shell as fakeroot:

`fakeroot`

- Run a command as fakeroot:

`fakeroot -- {{command}} {{command_arguments}}`

- Run a command as fakeroot and [s]ave the environment to a file on exit:

`fakeroot -s {{path/to/file}} -- {{command}} {{command_arguments}}`

- Load a fakeroot environment and run a command as fakeroot:

`fakeroot -i {{path/to/file}} -- {{command}} {{command_arguments}}`

- Run a command keeping the real ownership of files instead of pretending they are owned by root:

`fakeroot {{[-u|--unknown-is-real]}} -- {{command}} {{command_arguments}}`

- Display help:

`fakeroot {{[-h|--help]}}`
