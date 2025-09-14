---
title: "Flatpak Run - Execute Applications and Runtimes | Free DevTools"
name: flatpak-run
path: /freedevtools/tldr/linux/flatpak-run
canonical: "https://hexmos.com/freedevtools/tldr/linux/flatpak-run/"
description: "Execute Flatpak applications with Flatpak Run. Manage application instances, specify runtimes, and debug applications in isolated environments. Free online tool, no registration required."
category: linux
keywords:
- Flatpak application execution
- Linux application runtime
- Flatpak command line tool
- Run Flatpak apps
- Flatpak sandbox manager
- Flatpak runtime version control
- Linux package manager
- Flatpak application launcher
- Linux application isolation
- Execute commands in Flatpak
features:
- Execute Flatpak applications from the command line
- Specify runtime versions for Flatpak applications
- Run interactive shells within Flatpak containers
- Execute applications with custom runtimes
- Launch applications from specific Flatpak branches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flatpak run

> Run flatpak applications and runtimes.
> More information: <https://docs.flatpak.org/en/latest/flatpak-command-reference.html#flatpak-run>.

- Run an installed application:

`flatpak run {{com.example.app}}`

- Run an installed application from a specific branch e.g. stable, beta, master:

`flatpak run --branch={{stable|beta|master|...}} {{com.example.app}}`

- Run an interactive shell inside a flatpak:

`flatpak run --command={{sh}} {{com.example.app}}`

- Run an installed application with a specific runtime version:

`flatpak run --runtime-version={{24.08|master|stable|...}} {{com.example.app}}`

- Run an installed application with a different runtime (but same version number):

`flatpak run --runtime={{org.freedesktop.Sdk}} {{com.example.app}}`
