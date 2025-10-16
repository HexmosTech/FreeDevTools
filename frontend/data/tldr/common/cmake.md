---
title: "CMake - Generate Build Recipes | Online Free DevTools by Hexmos"
name: cmake
path: "/freedevtools/tldr/common/cmake/"
canonical: "https://hexmos.com/freedevtools/tldr/common/cmake/"
description: "Generate build recipes with CMake, a cross-platform build automation system. Simplify software development, manage dependencies, and ensure consistent builds. Free online tool, no registration required."
category: common
keywords:
- CMake build automation
- cross platform build system
- CMakeLists.txt generator
- CMake build recipe
- C++ build automation
- Linux build tool
- macOS build tool
- Windows build tool
- software dependency manager
- build artifact installation
features:
- Generate build recipes from CMakeLists.txt
- Build software artifacts from generated recipes
- Install build artifacts to a specified directory
- Set build type using CMake variables
- Run custom build targets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cmake

> Cross-platform build automation system, that generates recipes for native build systems.
> More information: <https://cmake.org/cmake/help/latest/manual/cmake.1.html>.

- Generate a build recipe in the current directory with `CMakeLists.txt` from a project directory:

`cmake {{path/to/project_directory}}`

- Use a generated recipe in a given directory to build artifacts:

`cmake --build {{path/to/build_directory}}`

- Install the build artifacts into `/usr/local/` and strip debugging symbols:

`cmake --install {{path/to/build_directory}} --strip`

- Generate a build recipe, with build type set to `Release` with CMake variable:

`cmake {{path/to/project_directory}} -D CMAKE_BUILD_TYPE=Release`

- Generate a build recipe using `generator_name` as the underlying build system:

`cmake -G {{generator_name}} {{path/to/project_directory}}`

- Install the build artifacts using a custom prefix for paths:

`cmake --install {{path/to/build_directory}} --strip --prefix {{path/to/directory}}`

- Run a custom build target:

`cmake --build {{path/to/build_directory}} {{[-t|--target]}} {{target_name}}`

- Display help:

`cmake {{[-h|--help]}}`
