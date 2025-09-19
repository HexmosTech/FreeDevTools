---
title: "Popd Command - Manage Directory Stack | Online Free DevTools by Hexmos"
name: popd
path: /freedevtools/tldr/common/popd
canonical: "https://hexmos.com/freedevtools/tldr/common/popd/"
description: "Manage directory stack with popd command. Navigate file system efficiently by removing and changing directories using shell built-in features. Free online tool, no registration required."
category: common
keywords:
- directory stack management
- shell directory navigation
- popd command usage
- bash directory stack
- linux directory management
- command-line navigation
- pushd popd dirs commands
- directory stack manipulation
- bash shell scripting
- file system navigation
features:
- Remove the top directory from the directory stack.
- Change the current directory to the removed directory.
- Remove a specific directory from the stack by index.
- Support positive and negative indexing for directory removal.
- Simplify complex directory navigation workflows.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# popd

> Remove a directory placed on the directory stack via the pushd shell built-in.
> See also: `pushd` to place a directory on the stack and `dirs` to display directory stack contents.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-popd>.

- Remove the top directory from the stack and cd to it:

`popd`

- Remove the Nth directory (starting from zero to the left from the list printed with `dirs`):

`popd +N`

- Remove the Nth directory (starting from zero to the right from the list printed with `dirs`):

`popd -N`

- Remove the 1st directory (starting from zero to the left from the list printed with `dirs`):

`popd -n`
