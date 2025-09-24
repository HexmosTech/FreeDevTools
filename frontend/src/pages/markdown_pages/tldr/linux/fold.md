---
title: "Format Text - Fold Long Lines | Online Free DevTools by Hexmos"
name: fold
path: /freedevtools/tldr/linux/fold
canonical: "https://hexmos.com/freedevtools/tldr/linux/fold/"
description: "Format text with the fold command to wrap long lines for fixed-width output.  Control line breaks and adjust width easily. Free online tool, no registration required."
category: linux
keywords:
  - text formatter
  - line wrapper
  - text wrapping utility
  - command line text formatting
  - long line formatter
  - fixed-width formatter
  - text width control
  - line break control
  - text output formatting
  - bash text formatting
features:
  - Wraps long lines to a specified width.
  - Counts width in bytes or columns.
  - Allows breaking lines at the rightmost blank space.
  - Supports file input for batch processing.
  - Provides flexible control over line wrapping behavior.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fold

> Folds long lines for fixed-width output devices.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/fold-invocation.html>.

- Fold lines in a fixed width:

`fold {{[-w|--width]}} {{width}} {{path/to/file}}`

- Count width in bytes (the default is to count in columns):

`fold {{[-b|--bytes]}} {{[-w|--width]}} {{width_in_bytes}} {{path/to/file}}`

- Break the line after the rightmost blank within the width limit:

`fold {{[-s|--spaces]}} {{[-w|--width]}} {{width}} {{path/to/file}}`
