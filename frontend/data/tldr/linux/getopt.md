---
title: "Parse Arguments - getopt Command Line Parser | Online Free DevTools by Hexmos"
name: getopt
path: "/freedevtools/tldr/linux/getopt/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/getopt/"
description: "Parse command-line arguments with getopt.  Handle optional and required arguments, short and long options efficiently. Free online tool, no registration required."
category: linux
keywords:
  - command line argument parser
  - getopt command line
  - linux command line parsing
  - shell script argument parsing
  - argument parsing getopt
  - command-line options parser
  - bash getopt example
  - sh getopt tutorial
  - unix command line tools
  - terminal argument handling
features:
  - Parses optional and required arguments.
  - Supports short and long options with shorthands.
  - Handles arguments with optional values.
  - Allows for easy management of complex command-line interfaces.
  - Provides a robust and efficient way to parse arguments.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# getopt

> Parse command-line arguments.
> More information: <https://manned.org/getopt>.

- Parse optional `verbose`/`version` flags with shorthands:

`getopt {{[-o|--options]}} vV {{[-l|--longoptions]}} verbose,version -- --version --verbose`

- Add a `--file` option with a required argument with shorthand `-f`:

`getopt {{[-o|--options]}} f: {{[-l|--longoptions]}} file: -- --file=somefile`

- Add a `--verbose` option with an optional argument with shorthand `-v`, and pass a non-option parameter `arg`:

`getopt {{[-o|--options]}} v:: {{[-l|--longoptions]}} verbose:: -- --verbose arg`

- Accept a `-r` and `--verbose` flag, a `--accept` option with an optional argument and add a `--target` with a required argument option with shorthands:

`getopt {{[-o|--options]}} rv::s::t: {{[-l|--longoptions]}} verbose,source::,target: -- -v --target target`
