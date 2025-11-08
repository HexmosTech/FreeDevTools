---
title: "Qmake - Generate Makefiles from Qt Projects | Online Free DevTools by Hexmos"
name: qmake
path: "/freedevtools/tldr/linux/qmake/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/qmake/"
description: "Generate Makefiles instantly with Qmake. Streamline Qt project builds and manage dependencies with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
- qt makefile generator
- qmake linux
- qt project manager
- makefile creation
- qt build system
- qt project compilation
- linux makefile
- qt cross-platform development
- qt deployment
- qmake command line
features:
- Generate Makefiles from Qt project files
- Specify Makefile and project file locations
- Create default project files
- Enable debug mode during compilation
- Compile projects with dependencies
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qmake

> Generate Makefiles from Qt project files.
> More information: <https://doc.qt.io/qt-6/qmake-manual.html>.

- Generate a `Makefile` from a project file in the current directory:

`qmake`

- Specify `Makefile` and project file locations:

`qmake -o {{path/to/Makefile}} {{path/to/project_file.pro}}`

- Generate a default project file:

`qmake -project`

- Compile a project:

`qmake && make`

- Enable debug mode:

`qmake -d`

- Display help:

`qmake -help`
