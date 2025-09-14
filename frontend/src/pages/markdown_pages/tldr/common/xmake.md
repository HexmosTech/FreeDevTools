---
title: "Xmake Build Tool - Create C/C++ Projects | Free DevTools"
name: xmake
path: /freedevtools/tldr/common/xmake
canonical: "https://hexmos.com/freedevtools/tldr/common/xmake/"
description: "Create C/C++ projects easily with Xmake Build Tool. Manage dependencies, configure build targets and compile across platforms. Free online tool, no registration required."
category: common
keywords:
- xmake build tool
- C/C++ build system
- cross-platform build
- xmake project generator
- lua build tool
- xmake configuration
- xmake install
- makefile alternative
- C++ project management
- C build automation
features:
- Generate C/C++ projects with xmake.lua configuration.
- Build and run projects with a single command.
- Configure build targets for different platforms and architectures.
- Install compiled targets to specific directories.
- Manage dependencies and automate build processes.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xmake

> A cross-platform C & C++ build utility based on Lua.
> More information: <https://xmake.io/#/getting_started>.

- Create an Xmake C project, consisting of a hello world and `xmake.lua`:

`xmake create {{[-l|--language]}} {{[c|clean]}} {{[-P|--project]}} {{project_name}}`

- Build and run an Xmake project:

`xmake {{[b|build]}} {{[r|run]}}`

- Run a compiled Xmake target directly:

`xmake {{[r|run]}} {{target_name}}`

- Configure a project's build targets:

`xmake {{[f|config]}} {{[-p |--plat=]}}{{macosx|linux|iphoneos|...}} {{[-a |--arch=]}}{{x86_64|i386|arm64|...}} {{[-m |--mode=]}}{{debug|release}}`

- Install the compiled target to a directory:

`xmake {{[i|install]}} {{[-o |--installdir=]}}{{path/to/directory}}`
