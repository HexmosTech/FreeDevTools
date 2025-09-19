---
title: "pkg-config - Control Library Details | Online Free DevTools by Hexmos"
name: pkg-config
path: /freedevtools/tldr/common/pkg-config
canonical: "https://hexmos.com/freedevtools/tldr/common/pkg-config/"
description: "Control library details with pkg-config. Retrieve library dependencies and compiler flags for building software. Free online tool, no registration required."
category: common
keywords:
- library configuration
- compiler flags
- dependency management
- pkg-config flags
- pkg-config libraries
- linux library details
- macos library details
- software compilation
- build environment
- gtk+ configuration
features:
- Retrieve library dependencies
- Generate compiler flags for gcc
- List all required libraries
- Integrate with build systems
- Simplify software compilation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkg-config

> Provide the details of installed libraries for compiling applications.
> More information: <https://www.freedesktop.org/wiki/Software/pkg-config/>.

- Get the list of libraries and their dependencies:

`pkg-config --libs {{library1 library2 ...}}`

- Get the list of libraries, their dependencies, and proper cflags for gcc:

`pkg-config --cflags --libs {{library1 library2 ...}}`

- Compile your code with libgtk-3, libwebkit2gtk-4.0 and all their dependencies:

`c++ example.cpp $(pkg-config --cflags --libs gtk+-3.0 webkit2gtk-4.0) -o example`
