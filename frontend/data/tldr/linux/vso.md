---
title: "Control Vanilla OS - System Operator with VSO | Online Free DevTools by Hexmos"
name: vso
path: "/freedevtools/tldr/linux/vso/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/vso/"
description: "Control Vanilla OS system operations with VSO. Update packages, manage the Pico subsystem, and automate tasks. Free online tool, no registration required."
category: linux
keywords:
- vanilla os package manager
- linux system updater
- task automation linux
- vso command line tool
- pico subsystem management
- vanilla os update manager
- linux package installer
- vso system operator
- application deployment linux
- container management linux
features:
- Upgrade the Vanilla OS host system
- Manage packages within the Pico subsystem
- Enter and execute commands in the subsystem shell
- Display and manage VSO configuration settings
- Run applications installed in the subsystem
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vso

> Package manager, system updater and a task automator for Vanilla OS.
> More information: <https://github.com/Vanilla-OS/vanilla-system-operator>.

- Check for system updates to the host system:

`vso sys-upgrade check`

- Upgrade the host system now:

`vso sys-upgrade upgrade --now`

- Initialize the Pico subsystem (used for package management):

`vso pico-init`

- Install applications inside the subsystem:

`vso install {{package1 package2 ...}}`

- Remove applications from the subsystem:

`vso remove {{package1 package2 ...}}`

- Enter the subsystem's shell:

`vso shell`

- Run an application from the subsystem:

`vso run {{package}}`

- Display VSO configuration:

`vso config show`
