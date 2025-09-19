---
title: "Meson Build - Generate Projects | Online Free DevTools by Hexmos"
name: meson
path: /freedevtools/tldr/common/meson
canonical: "https://hexmos.com/freedevtools/tldr/common/meson/"
description: "Generate projects with Meson Build System. Automate software compilation and dependency management efficiently. Free online tool, no registration required."
category: common
keywords:
- meson build system
- ninja build backend
- python build tool
- c project generator
- build automation
- software compilation
- dependency management
- linux build system
- macos build system
- cross platform build
features:
- Generate C projects with specified names and versions
- Configure build directories with default settings
- Compile projects from specified build directories
- Execute all project tests
- Display help documentation and version information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# meson

> SCons-like build system that uses Python as a front-end language and Ninja as a building backend.
> More information: <https://mesonbuild.com/Commands.html>.

- Generate a C project with a given name and version:

`meson init {{[-l|--language]}} c {{[-n|--name]}} {{myproject}} --version {{0.1}}`

- Configure the `builddir` with default values:

`meson setup {{build_dir}}`

- Build the project:

`meson compile -C {{path/to/build_dir}}`

- Run all tests in the project:

`meson test`

- Display help:

`meson {{[-h|--help]}}`

- Display version:

`meson {{[-v|--version]}}`
