---
title: "VCVARSALL - Setup Visual Studio Environment | Online Free DevTools by Hexmos"
name: vcvarsall
path: /freedevtools/tldr/windows/vcvarsall
canonical: "https://hexmos.com/freedevtools/tldr/windows/vcvarsall/"
description: "Setup environment variables with VCVARSALL for Visual Studio development. Configure compilers, linkers, and SDK paths. Free online tool, no registration required."
category: windows
keywords:
- visual studio environment
- vcvarsall command
- compiler environment setup
- windows development environment
- x64 native environment
- x64_x86 cross compilation
- x64_arm64 cross compilation
- uwp x64 environment
- visual studio command line
- command prompt development
features:
- Configure environment for native x64 compilation
- Setup environment for cross-compilation from x64 host
- Enable UWP application development with x64 architecture
- Set compiler paths for Visual Studio
- Define necessary environment variables for Visual Studio tools
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vcvarsall

> Setup the environment variables required for using the Microsoft Visual Studio tools.
> The path of `vcvarsall` for a certain Visual Studio installation can be found using `vswhere`.
> More information: <https://learn.microsoft.com/cpp/build/building-on-the-command-line>.

- Setup the environment for native x64:

`vcvarsall x64`

- Setup the environment for cross-compiled native x86 from the x64 host:

`vcvarsall x64_x86`

- Setup the environment for cross-compiled native Arm x64 from the x64 host:

`vcvarsall x64_arm64`

- Setup the environment for native UWP x64:

`vcvarsall x64 uwp`
