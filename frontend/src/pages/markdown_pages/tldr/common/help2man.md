---
title: "Generate Man Pages - help2man Generator | Online Free DevTools by Hexmos"
name: help2man
path: /freedevtools/tldr/common/help2man
canonical: "https://hexmos.com/freedevtools/tldr/common/help2man/"
description: "Generate man pages easily with help2man. Convert --help output into detailed manual pages.  Free online tool, no registration required."
category: common
keywords:
  - man page generator
  - help2man generator
  - linux man page generator
  - generate man pages from help
  - command line man page creator
  - create man pages from help output
  - help2man command line tool
  - generate documentation from help
  - convert help to man
  - linux documentation generator
features:
  - Generates man pages from executable's --help output.
  - Creates man pages from executable's --version output.
  - Allows customizing the man page's name section.
  - Enables specifying a custom man page section number.
  - Outputs man pages to a file or standard output.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# help2man

> Produce simple man pages from an executable's `--help` and `--version` output.
> More information: <https://www.gnu.org/software/help2man/#Invoking-help2man>.

- Generate a man page for an executable:

`help2man {{executable}}`

- Specify the "name" paragraph in the man page:

`help2man {{executable}} {{[-n|--name]}} {{name}}`

- Specify the section for the man page (defaults to 1):

`help2man {{executable}} {{[-s|--section]}} {{section}}`

- Output to a file instead of `stdout`:

`help2man {{executable}} {{[-o|--output]}} {{path/to/file}}`

- Display help:

`help2man --help`
