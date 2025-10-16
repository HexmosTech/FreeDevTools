---
title: "Generate Compilation Database - Bear Tool | Online Free DevTools by Hexmos"
name: bear
path: "/freedevtools/tldr/common/bear/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bear/"
description: "Generate compilation database files with Bear, a tool for clang tooling integration. Simplify development workflows with comprehensive build information. Free online tool, no registration required."
category: common
keywords:
  - compilation database generator
  - clang compilation database
  - C++ build automation
  - C build automation
  - bear compilation tool
  - clang tooling
  - code analysis tools
  - static analysis tool
  - software build process
  - compile commands JSON
features:
  - Generate compilation databases from build commands
  - Append to existing compilation database files
  - Control output file naming
  - Execute in verbose mode for detailed output
  - Force preload method for command interception
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bear

> A tool to generate compilation databases for `clang` tooling.
> More information: <https://github.com/rizsotto/Bear>.

- Generate `compile_commands.json` by running a build command:

`bear -- {{make}}`

- Generate compilation database with a custom output file name:

`bear --output {{path/to/compile_commands.json}} -- {{make}}`

- Append results to an existing `compile_commands.json` file:

`bear --append -- {{make}}`

- Run in verbose mode to get detailed output:

`bear --verbose -- {{make}}`

- Force `bear` to use the preload method for command interception:

`bear --force-preload -- {{make}}`
