---
title: "Manage C/C++ Packages - Control Libraries with vcpkg | Online Free DevTools by Hexmos"
name: vcpkg
path: /freedevtools/tldr/common/vcpkg
canonical: "https://hexmos.com/freedevtools/tldr/common/vcpkg/"
description: "Manage C/C++ packages instantly with vcpkg. Install libraries, search for packages, and configure CMake projects. Free online tool, no registration required."
category: common
keywords:
- C++ package manager
- C++ library manager
- vcpkg package install
- vcpkg search package
- vcpkg CMake integration
- C++ dependency management
- cross platform C++ libraries
- C/C++ library build
- vcpkg emscripten
- vcpkg configuration
features:
- Install and manage C/C++ libraries
- Search for available packages
- Integrate with CMake build systems
- Support multiple target architectures (triplets)
- Build packages using specific toolchains
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vcpkg

> Package manager for C/C++ libraries.
> Note: Packages are not installed in the system. To use them, you need to tell your build system (e.g. CMake) to use `vckg`.
> More information: <https://learn.microsoft.com/en-us/vcpkg/>.

- Build and add package `libcurl` to the `vcpkg` environment:

`vcpkg install curl`

- Build and add `zlib` using the `emscripten` toolchain:

`vcpkg install --triplet=wasm32-emscripten zlib`

- Search for a package:

`vcpkg search {{pkg_name}}`

- Configure a CMake project to use `vcpkg` packages:

`cmake -B build -DCMAKE_TOOLCHAIN_FILE={{path/to/vcpkg_install_directory}}/scripts/buildsystems/vcpkg.cmake`
