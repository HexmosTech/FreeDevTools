---
title: "Gnatmake - Build Ada Programs | Online Free DevTools by Hexmos"
name: gnatmake
path: "/freedevtools/tldr/common/gnatmake/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gnatmake/"
description: "Build Ada programs with Gnatmake. Streamline Ada development, manage dependencies, and automate compilation. Free online tool, no registration required."
category: common
keywords:
- Ada build automation
- Gnatmake build tool
- Ada program compilation
- Ada dependency management
- GNAT toolchain Ada
- Ada executable creation
- Cross-platform Ada build
- Ada build process control
- Ada project management
- Command-line Ada builder
features:
- Compile Ada source files into executables
- Specify custom executable names
- Force recompilation of specific files
- Automate Ada build processes
- Manage dependencies for Ada projects
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gnatmake

> A low-level build tool for Ada programs (part of the GNAT toolchain).
> More information: <https://gcc.gnu.org/onlinedocs/gnat_ugn/Switches-for-gnatmake.html>.

- Compile an executable:

`gnatmake {{source_file1.adb source_file2.adb ...}}`

- Set a custom executable name:

`gnatmake -o {{executable_name}} {{source_file.adb}}`

- [f]orce recompilation:

`gnatmake -f {{source_file.adb}}`
