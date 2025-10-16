---
title: "Rename Files - Control File Names with Zmv | Online Free DevTools by Hexmos"
name: zmv
path: "/freedevtools/tldr/common/zmv/"
canonical: "https://hexmos.com/freedevtools/tldr/common/zmv/"
description: "Control file names efficiently with Zmv, a powerful file renaming tool. Rename files using extended glob patterns, preview changes, and automate file management. Free online tool, no registration required."
category: common
keywords:
- file rename tool
- zsh file rename
- extended glob rename
- bulk file rename
- regex file rename
- command line file rename
- linux file rename
- macos file rename
- unix file rename
- batch file rename
features:
- Rename files using extended glob patterns.
- Preview file rename changes before execution.
- Interactively rename files with prompts.
- Verbose output for rename actions.
- Support for complex file renaming scenarios.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zmv

> Move or rename files matching a specified extended glob pattern.
> See also: `zcp`, `zln`.
> More information: <https://zsh.sourceforge.net/Doc/Release/User-Contributions.html>.

- Move files using a `regex`-like pattern:

`zmv '{{(*).log}}' '{{$1.txt}}'`

- Preview the result of a move, without making any actual changes:

`zmv -n '{{(*).log}}' '{{$1.txt}}'`

- Interactively move files, with a prompt before every change:

`zmv -i '{{(*).log}}' '{{$1.txt}}'`

- Verbosely print each action as it's being executed:

`zmv -v '{{(*).log}}' '{{$1.txt}}'`
