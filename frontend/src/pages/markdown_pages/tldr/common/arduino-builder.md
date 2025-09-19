---
title: "Compile Arduino Sketches - Command Line Tool | Online Free DevTools by Hexmos"
name: arduino-builder
path: /freedevtools/tldr/common/arduino-builder
canonical: "https://hexmos.com/freedevtools/tldr/common/arduino-builder/"
description: "Compile Arduino sketches efficiently with arduino-builder. Customize build options, debug, and streamline your Arduino development process. Free online tool, no registration required."
category: common
keywords:
- Arduino sketch compiler
- Arduino build tool
- Command line Arduino compilation
- Arduino IDE alternative
- Arduino builder flags
- Arduino build configuration
- Arduino compilation Linux
- Arduino build options JSON
- Arduino command line interface
- Arduino sketch debugging
features:
- Compile Arduino sketches from the command line
- Customize build options using a configuration file
- Specify debug level for detailed error reporting
- Define a custom build directory
- Enable verbose mode for detailed build output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
