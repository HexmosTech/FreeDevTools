---
title: "Export Variables - Set Shell Variables | Free DevTools"
name: export
path: /freedevtools/tldr/common/export
canonical: "https://hexmos.com/freedevtools/tldr/common/export/"
description: "Set shell variables instantly with Export Variables. Easily manage environment variables for child processes on Linux, macOS, and Unix systems. Free online tool, no registration required."
category: common
keywords:
- shell variable export
- environment variable setter
- bash export command
- zsh export command
- linux environment variables
- macos environment variables
- unix environment variables
- variable assignment command
- path environment variable
- shell script variables
features:
- Set environment variables for child processes
- Append pathnames to the PATH variable
- Define variables directly in the shell
- Make variables available to subshells
- Persist variable assignments for the current session
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# export

> Export shell variables to child processes.
> More information: <https://manned.org/export.1posix>.

- Set an environment variable:

`export {{VARIABLE}}={{value}}`

- Append a pathname to the environment variable `PATH`:

`export PATH=$PATH:{{path/to/append}}`
