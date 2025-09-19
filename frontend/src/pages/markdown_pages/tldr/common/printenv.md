---
title: "Print Environment - Display Variables | Online Free DevTools by Hexmos"
name: printenv
path: /freedevtools/tldr/common/printenv
canonical: "https://hexmos.com/freedevtools/tldr/common/printenv/"
description: "Display environment variables with Print Environment. View all or specific variables for shell environments. Free online tool, no registration required."
category: common
keywords:
- environment variables display
- shell variables list
- printenv command
- linux environment variables
- bash printenv
- macos printenv command
- environment variables viewer
- shell environment variables
- common printenv
- command line environment
features:
- Display all environment variables
- Print the value of a specific variable
- Output variable value with NUL terminator
- View environment in shell scripts
- List environment for debugging
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# printenv

> Print values of all or environment variables.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/printenv-invocation.html>.

- Display key-value pairs of all environment variables:

`printenv`

- Display the value of a specific variable:

`printenv {{HOME}}`

- Display the value of a variable and end with NUL instead of newline:

`printenv {{[-0|--null]}} {{HOME}}`
