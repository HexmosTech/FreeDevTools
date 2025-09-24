---
title: "Arduino Sketch Compiler - Compile Arduino Sketches | Online Free DevTools by Hexmos"
name: arduino-builder
path: /freedevtools/tldr/common/arduino-builder
canonical: "https://hexmos.com/freedevtools/tldr/common/arduino-builder/"
description: "Compile Arduino sketches efficiently with arduino-builder. Customize build options, debug, and streamline your Arduino development workflow using command-line interface. Free online tool, no registration required."
category: common
keywords:
  - Arduino sketch compilation
  - Arduino command-line compiler
  - Arduino build system
  - Arduino build options JSON
  - Arduino CLI compiler
  - Arduino sketch builder
  - command line Arduino build
  - Arduino IDE command line
  - Arduino build process
  - Arduino debugging CLI
features:
  - Compile Arduino sketches from the command line.
  - Customize build options via configuration files.
  - Adjust debug level for detailed error reporting.
  - Specify custom build directories for organization.
  - Enable verbose output for detailed build tracking.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arduino-builder

> Compile arduino sketches.
> DEPRECATION WARNING: this tool is being phased out in favor of `arduino`.
> More information: <https://github.com/arduino/arduino-builder>.

- Compile a sketch:

`arduino-builder -compile {{path/to/sketch.ino}}`

- Specify the debug level (default: 5):

`arduino-builder -debug-level {{1..10}}`

- Specify a custom build directory:

`arduino-builder -build-path {{path/to/build_directory}}`

- Use a build option file, instead of specifying `-hardware`, `-tools`, etc. manually every time:

`arduino-builder -build-options-file {{path/to/build.options.json}}`

- Enable verbose mode:

`arduino-builder -verbose {{true}}`
