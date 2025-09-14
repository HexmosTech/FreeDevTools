---
title: "Locate VS Installations - Find Visual Studio with vswhere | Free DevTools"
name: vswhere
path: /freedevtools/tldr/windows/vswhere
canonical: "https://hexmos.com/freedevtools/tldr/windows/vswhere/"
description: "Find Visual Studio installations with vswhere, a powerful command-line tool. Locate MSVC compilers, Clang tools, and MSBuild executables quickly. Free online tool, no registration required."
category: windows
keywords:
- Visual Studio finder
- VS installation locator
- MSVC compiler path
- Clang tools directory
- MSBuild executable location
- Windows development environment
- vswhere command-line
- Visual Studio version discovery
- vcvarsall.bat path
- C++ compiler location windows
features:
- Locate Visual Studio 2017 and newer installations
- Find the path to vcvarsall.bat
- Discover the directory of the x64 MSVC compiler
- Identify the Clang directory bundled with Visual Studio
- Determine the path of MSBuild.exe
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vswhere

> Locate Visual Studio 2017 and newer installations.
> More information: <https://github.com/microsoft/vswhere>.

- Find the path of vcvarsall.bat to set environment variables:

`vswhere -products * -latest -prerelease -find **\VC\Auxiliary\Build\vcvarsall.bat`

- Find the directory of the x64 MSVC compiler (cl.exe, etc):

`vswhere -products * -latest -prerelease -find **\Hostx64\x64\*`

- Find the directory of Clang bundled with Visual Studio bundled (clang-cl, clang-tidy, etc):

`vswhere -products * -latest -prerelease -find **\Llvm\bin\*`

- Find the path of `MSBuild.exe`:

`vswhere -products * -latest -prerelease -find MSBuild\**\Bin\MSBuild.exe`
