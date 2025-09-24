---
title: "Control Development Environments - Kool | Online Free DevTools by Hexmos"
name: kool
path: /freedevtools/tldr/common/kool
canonical: "https://hexmos.com/freedevtools/tldr/common/kool/"
description: "Control software development environments with Kool. Build, run, and manage your development stack with ease using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- development environment manager
- kool dev environments
- docker development workflow
- containerized development setup
- kool create command
- kool run script
- kool status check
- kool self-update
- yaml configuration tool
- command-line development tools
features:
- Build development environments using presets.
- Execute custom scripts defined in kool.yml.
- Start and stop services within a development environment.
- Display the status of running services.
- Update Kool to the latest version.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kool

> Build software development environments.
> More information: <https://kool.dev/docs/commands-reference/kool>.

- Create a project using a specific preset:

`kool create {{preset}} {{project_name}}`

- Run a specific script defined in the `kool.yml` file in the current directory:

`kool run {{script}}`

- Start/stop services in the current directory:

`kool {{start|stop}}`

- Display status of the services in the current directory:

`kool status`

- Update to the latest version:

`kool self-update`

- Print the completion script for the specified shell:

`kool completion {{bash|fish|powershell|zsh}}`
