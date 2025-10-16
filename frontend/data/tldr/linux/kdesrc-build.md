---
title: "Build KDE Components - Source Compilation | Online Free DevTools by Hexmos"
name: kdesrc-build
path: "/freedevtools/tldr/linux/kdesrc-build/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/kdesrc-build/"
description: "Build KDE components with kdesrc-build. Easily compile KDE applications and dependencies from source code repositories using command-line options. Free online tool, no registration required."
category: linux
keywords:
  - KDE source build
  - KDE component compilation
  - KDE application build
  - kdesrc-build command
  - KDE development
  - KDE application compilation
  - Qt source build
  - Linux KDE build
  - KDE dependency build
  - KDE development tools
features:
  - Compile KDE components from source code
  - Manage KDE dependencies during build
  - Refresh build directories before compilation
  - Resume compilation from a specific dependency
  - Run KDE components with specified executable name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kdesrc-build

> Easily build KDE components from its source repositories.
> More information: <https://docs.kde.org/trunk5/en/kdesrc-build/kdesrc-build/index.html>.

- Initialize `kdesrc-build`:

`kdesrc-build --initial-setup`

- Compile a KDE component and its dependencies from source:

`kdesrc-build {{component_name}}`

- Compile a component without updating its local code and without compiling its dependencies:

`kdesrc-build --no-src --no-include-dependencies {{component_name}}`

- Refresh the build directories before compiling:

`kdesrc-build --refresh-build {{component_name}}`

- Resume compilation from a specific dependency:

`kdesrc-build --resume-from {{dependency_component}} {{component_name}}`

- Run a component with a specified executable name:

`kdesrc-build --run --exec {{executable_name}} {{component_name}}`

- Build all configured components:

`kdesrc-build`

- Use system libraries in place of a component if it fails to build:

`kdesrc-build --no-stop-on-failure {{component_name}}`
