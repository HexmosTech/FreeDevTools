---
title: "SFDK CMake - Execute Build Steps | Online Free DevTools by Hexmos"
name: sfdk-cmake
path: /freedevtools/tldr/sfdk/sfdk-cmake
canonical: "https://hexmos.com/freedevtools/tldr/sfdk/sfdk-cmake/"
description: "Execute build steps with SFDK CMake. Build Sailfish OS applications and manage CMake projects efficiently using the command line. Free online tool, no registration required."
category: common
keywords:
- sailfishos cmake
- sfdk cmake build
- cmake build tool
- linux cmake
- sailfishos build environment
- cmake project manager
- command line build
- sfdk project build
- cross compilation cmake
- cmake development
features:
- Execute CMake build processes.
- Build projects in specified directories.
- Pass extra arguments to CMake.
- Perform CMake builds in the current directory.
- Pass additional build tool arguments.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sfdk cmake

> Executes cmake build step.
> More information: <https://github.com/sailfishos/sailfish-qtcreator/blob/master/share/qtcreator/sfdk/modules/20-building-mb2/doc/command.cmake.adoc>.

- Run cmake:

`sfdk cmake`

- Run cmake in specified project directory:

`sfdk cmake {{project}}`

- Run cmake with extra arguments:

`sfdk cmake -- {{arguments}}`

- Run cmake build in current directory:

`sfdk cmake --build .`

- Run cmake build in current directory with extra cmake arguments:

`sfdk cmake --build . {{cmake-arguments}}`

- Run cmake build in current directory with extra build tool arguments:

`sfdk cmake --build . -- {{build-tool-arguments}}`
