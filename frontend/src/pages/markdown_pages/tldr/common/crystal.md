---
title: "Crystal Compiler - Manage Crystal Source Code | Online Free DevTools by Hexmos"
name: crystal
path: /freedevtools/tldr/common/crystal
canonical: "https://hexmos.com/freedevtools/tldr/common/crystal/"
description: "Compile Crystal code easily with Crystal Compiler. Build executables, generate documentation, and run specs using command line. Free online tool, no registration required."
category: common
keywords:
- crystal compiler
- crystal build
- crystal documentation
- crystal spec
- crystal eval
- crystal init
- crystal lang
- crystal programming
- crystal executable
- crystal source code
features:
- Compile Crystal files into standalone executables
- Generate API documentation from Crystal source code
- Run Crystal specification suites for testing
- Execute Crystal code from the command line
- Initialize new Crystal application projects
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# crystal

> Manage Crystal source code.
> More information: <https://crystal-lang.org/reference/using_the_compiler>.

- Run a Crystal file:

`crystal {{path/to/file.cr}}`

- Compile a file and all dependencies to a single executable:

`crystal build {{path/to/file.cr}}`

- Read Crystal source code from the command-line or `stdin`, and execute it:

`crystal eval '{{code}}'`

- Generate API documentation from inline docstrings in Crystal files:

`crystal docs`

- Compile and run a Crystal specification suite:

`crystal spec`

- Start a local interactive server for testing the language:

`crystal play`

- Create a project directory for a Crystal application:

`crystal init app {{application_name}}`

- Display help:

`crystal help`
