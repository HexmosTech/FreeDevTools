---
title: "Make - Control Compilation with Makefile | Online Free DevTools by Hexmos"
name: make
path: "/freedevtools/tldr/common/make/"
canonical: "https://hexmos.com/freedevtools/tldr/common/make/"
description: "Control compilation processes effectively with Make. Define build targets, execute tasks, and manage dependencies with Makefiles. Free online tool, no registration required."
category: common
keywords:
- Makefile target runner
- GNU Make utility
- Build automation Linux
- Source code compilation
- Parallel job execution Make
- Makefile dependency management
- Make variable override
- Command-line build control
- Makefile parsing
- Target build force
features:
- Execute targets defined in Makefiles
- Control parallel job execution during compilation
- Specify alternative Makefiles for builds
- Override variables within Makefiles
- Force target rebuilding regardless of source changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# make

> Task runner for targets described in Makefile.
> Mostly used to control the compilation of an executable from source code.
> More information: <https://www.gnu.org/software/make/manual/make.html>.

- Call the first target specified in the Makefile (usually named "all"):

`make`

- Call a specific target:

`make {{target}}`

- Call a specific target, executing 4 jobs at a time in parallel:

`make {{[-j|--jobs]}} 4 {{target}}`

- Use a specific Makefile:

`make {{[-f|--file]}} {{path/to/file}}`

- Execute make from another directory:

`make {{[-C|--directory]}} {{path/to/directory}}`

- Force making of a target, even if source files are unchanged:

`make {{[-B|--always-make]}} {{target}}`

- Override a variable defined in the Makefile:

`make {{target}} {{variable}}={{new_value}}`

- Override variables defined in the Makefile by the environment:

`make {{[-e|--environment-overrides]}} {{target}}`
