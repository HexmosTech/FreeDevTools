---
title: "Compilation Database Generator - Generate with Bear | Online Free DevTools by Hexmos"
name: bear
path: /freedevtools/tldr/common/bear
canonical: "https://hexmos.com/freedevtools/tldr/common/bear/"
description: "Generate compilation databases with Bear, simplifying C++ and C build automation workflows with clang tooling integration.  Free online tool, no registration required."
category: common
keywords:
  - compilation database generator
  - clang compilation database generator
  - C++ compilation database
  - C compilation database
  - compile_commands.json generator
  - bear clang tool
  - clang build automation
  - JSON compilation database
  - build system integration
  - command-line compilation database
features:
  - Generate compile_commands.json from build commands.
  - Append to existing compile_commands.json files.
  - Specify custom output filenames for the compilation database.
  - Utilize verbose mode for detailed build command output.
  - Force preload method for enhanced command interception.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
