---
title: "Readonly - Control Shell Variables | Online Free DevTools by Hexmos"
name: readonly
path: "/freedevtools/tldr/common/readonly/"
canonical: "https://hexmos.com/freedevtools/tldr/common/readonly/"
description: "Control shell variables with Readonly. Set and manage read-only shell variables to protect critical configurations. Free online tool, no registration required."
category: common
keywords:
- readonly variable bash
- bash readonly command
- shell variable protection
- linux readonly variable
- macos readonly variable
- unix readonly command
- bash variable definition
- command line readonly
- shell script variable
- readonly environment variable
features:
- Set new read-only shell variables
- Mark existing variables as read-only
- Prevent modification of shell variables
- Print all read-only variables to stdout
- Protect shell configurations from accidental changes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# readonly

> Set read-only shell variables.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-readonly>.

- Set a read-only variable:

`readonly {{variable_name}}={{value}}`

- Mark a variable as read-only:

`readonly {{existing_variable}}`

- [p]rint the names and values of all read-only variables to `stdout`:

`readonly -p`
