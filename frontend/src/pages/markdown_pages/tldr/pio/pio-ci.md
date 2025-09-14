---
title: "PlatformIO Build - Create Projects with pio-ci | Free DevTools"
name: pio-ci
path: /freedevtools/tldr/pio/pio-ci
canonical: "https://hexmos.com/freedevtools/tldr/pio/pio-ci/"
description: "Build PlatformIO projects quickly with pio-ci. Automate project creation and library integration for embedded development. Free online tool, no registration required."
category: common
keywords:
- PlatformIO build
- PlatformIO CI
- PlatformIO project creation
- PlatformIO library integration
- PlatformIO embedded development
- PlatformIO command-line interface
- PlatformIO configuration
- PlatformIO boards
- PlatformIO build automation
- pio-ci command
features:
- Build PlatformIO projects from any source code structure
- Integrate custom libraries into PlatformIO projects
- Build projects for specific boards using command-line options
- Specify custom build directories for PlatformIO projects
- Use custom configuration files with PlatformIO
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pio ci

> Build PlatformIO projects with an arbitrary source code structure.
> This will create a new temporary project which the source code will be copied into.
> More information: <https://docs.platformio.org/en/latest/core/userguide/cmd_ci.html>.

- Build a PlatformIO project in the default system temporary directory and delete it afterwards:

`pio ci {{path/to/project}}`

- Build a PlatformIO project and specify specific libraries:

`pio ci {{[-l|--lib]}} {{path/to/library_directory}} {{path/to/project}}`

- Build a PlatformIO project and specify a specific board (`pio boards` lists all of them):

`pio ci {{[-b|--board]}} {{board}} {{path/to/project}}`

- Build a PlatformIO project in a specific directory:

`pio ci --build-dir {{path/to/build_directory}} {{path/to/project}}`

- Build a PlatformIO project and don't delete the build directory:

`pio ci --keep-build-dir {{path/to/project}}`

- Build a PlatformIO project using a specific configuration file:

`pio ci {{[-c|--project-conf]}} {{path/to/platformio.ini}}`
