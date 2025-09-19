---
title: "Run Architecture - Execute Commands on Specific CPU Arch | Online Free DevTools by Hexmos"
name: arch
path: /freedevtools/tldr/osx/arch
canonical: "https://hexmos.com/freedevtools/tldr/osx/arch/"
description: "Execute commands with Architecture tool, allowing you to run processes under specific CPU architectures. Test and debug applications on different systems. Free online tool, no registration required."
category: osx
keywords:
  - architecture command
  - cpu architecture execution
  - command line architecture
  - cross architecture tool
  - architecture binary execution
  - x86_64 command runner
  - arm64 command runner
  - linux architecture
  - macos architecture
  - system architecture display
features:
  - Execute commands under a specified architecture (x86_64, arm64).
  - Display the system's native architecture.
  - Run commands using a different CPU architecture.
  - Facilitate cross-platform testing and debugging.
  - Isolate command execution to a specific architecture.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# arch

> Display the name of the system architecture, or run a command under a different architecture.
> See also: `uname`.
> More information: <https://keith.github.io/xcode-man-pages/arch.1.html>.

- Display the system's architecture:

`arch`

- Run a command using x86_64:

`arch -x86_64 "{{command}}"`

- Run a command using arm:

`arch -arm64 "{{command}}"`
