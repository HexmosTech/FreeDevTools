---
title: "Bazel Build Tool - Control Build Processes | Free DevTools"
name: bazel
path: /freedevtools/tldr/common/bazel
canonical: "https://hexmos.com/freedevtools/tldr/common/bazel/"
description: "Control build processes easily with Bazel build tool. Compile, test, and package software projects efficiently with dependency management. Free online tool, no registration required."
category: common
keywords:
- Bazel build tool
- Open source build tool
- Software build automation
- Bazel build system
- Build process control
- Dependency management Bazel
- Command line build tool
- Software testing Bazel
- Cross platform build
- Bazel clean build
features:
- Build specified targets within a workspace.
- Clean output files and halt the Bazel server.
- Shut down the running Bazel server instance.
- Display runtime information about the Bazel server.
- Show available commands and options with help.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bazel

> Open-source build and test tool similar to Make, Maven, and Gradle.
> More information: <https://bazel.build/reference/command-line-reference>.

- Build the specified target in the workspace:

`bazel build {{target}}`

- Remove output files and stop the server if running:

`bazel clean`

- Stop the bazel server:

`bazel shutdown`

- Display runtime info about the bazel server:

`bazel info`

- Display help:

`bazel help`

- Display version:

`bazel version`
