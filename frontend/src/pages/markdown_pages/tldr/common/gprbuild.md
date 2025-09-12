---
title: "GPRbuild - Build Ada Projects | Free DevTools"
name: gprbuild
path: /freedevtools/tldr/common/gprbuild
canonical: "https://hexmos.com/freedevtools/tldr/common/gprbuild/"
description: "Build Ada projects effortlessly with GPRbuild. Manage compilation, linking, and dependencies for your Ada, C/C++, and Fortran code. Free online tool, no registration required."
category: common
keywords:
- Ada build tool
- GPR project builder
- Ada project compiler
- Ada dependency manager
- C/C++ build system
- Fortran build system
- Cross-platform build
- Command-line build tool
- Project configuration management
- Build automation
features:
- Compile Ada, C/C++, and Fortran projects
- Manage project dependencies
- Clean the build workspace
- Install compiled binaries to a specified directory
- Build specific project files defined by a GPR file
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gprbuild

> A high-level build tool for projects written in Ada and other languages (C/C++/Fortran).
> More information: <https://docs.adacore.com/gprbuild-docs/html/gprbuild_ug.html>.

- Build a project (assuming only one `*.gpr` file exists in the current directory):

`gprbuild`

- Build a specific [P]roject file:

`gprbuild -P {{project_name}}`

- Clean up the build workspace:

`gprclean`

- Install compiled binaries:

`gprinstall --prefix {{path/to/installation/dir}}`
