---
title: "Unexpand - Convert Spaces to Tabs | Online Free DevTools by Hexmos"
name: unexpand
path: "/freedevtools/tldr/common/unexpand/"
canonical: "https://hexmos.com/freedevtools/tldr/common/unexpand/"
description: "Convert spaces to tabs with Unexpand, a command-line tool for text formatting. Effortlessly manage whitespace and create consistent file formatting. Free online tool, no registration required."
category: common
keywords:
- space to tab conversion
- text formatting tool
- whitespace management
- unexpand command linux
- unexpand command macos
- gnu coreutils unexpand
- command line text processing
- convert leading spaces to tabs
- control whitespace formatting
- text indentation utility
features:
- Convert spaces to tabs in files.
- Read from stdin for conversion.
- Convert all blanks, not just initial ones.
- Convert only leading sequences of blanks.
- Customize tab spacing.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# unexpand

> Convert spaces to tabs.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/unexpand-invocation.html>.

- Convert blanks in each file to tabs, writing to `stdout`:

`unexpand {{path/to/file}}`

- Convert blanks to tabs, reading from `stdout`:

`unexpand`

- Convert all blanks, instead of just initial blanks:

`unexpand {{[-a|--all]}} {{path/to/file}}`

- Convert only leading sequences of blanks (overrides -a):

`unexpand --first-only {{path/to/file}}`

- Have tabs a certain number of characters apart, not 8 (enables -a):

`unexpand {{[-t|--tabs]}} {{number}} {{path/to/file}}`
