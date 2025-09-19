---
title: "KDE Builder - Build KDE Components from Source | Online Free DevTools by Hexmos"
name: kde-builder
path: /freedevtools/tldr/linux/kde-builder
canonical: "https://hexmos.com/freedevtools/tldr/linux/kde-builder/"
description: "Build KDE components from source with KDE Builder. Compile Plasma desktop, manage dependencies, and refresh build directories using command line. Free online tool, no registration required."
category: linux
keywords:
  - kde build
  - kde component build
  - kde plasma build
  - qt build manager
  - linux kde builder
  - kde source compiler
  - kde development tool
  - kde dependency manager
  - kde module builder
  - command line kde build
features:
  - Compile KDE components and their dependencies
  - Refresh build directories before compilation
  - Resume compilation from a specific dependency
  - Run components with specified executables
  - Install login sessions with ease
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kde-builder

> Easily build KDE components from its source repositories.
> Drop-in replacement for `kdesrc-build`.
> More information: <https://kde-builder.kde.org/en/cmdline/supported-cmdline-params.html>.

- Initialize `kde-builder`:

`kde-builder --initial-setup`

- Compile a KDE component and its dependencies from the source (use `workspace` to compile Plasma desktop):

`kde-builder {{component_name1 component_name2 ...}}`

- Compile a component without updating its local code and without compiling its dependencies:

`kde-builder {{[-S|--no-src]}} {{[-D|--no-include-dependencies]}} {{component_name}}`

- Refresh the build directories before compiling:

`kde-builder {{[-r|--refresh-build]}} {{component_name}}`

- Resume compilation from a specific dependency:

`kde-builder {{[-f|--resume-from]}} {{dependency_component}} {{component_name}}`

- Run a component with a specified executable name:

`kde-builder --run {{executable_name}}`

- Install login session:

`kde-builder --install-login-session-only`

- Use system libraries in place of a component if it fails to build:

`kde-builder --no-stop-on-failure {{component_name}}`
