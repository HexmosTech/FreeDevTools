---
title: "Control Directory Stack - Manage Dirs with Bash | Online Free DevTools by Hexmos"
name: dirs
path: /freedevtools/tldr/common/dirs
canonical: "https://hexmos.com/freedevtools/tldr/common/dirs/"
description: "Control your directory stack with Dirs. Navigate file systems efficiently using pushd and popd. Free online tool, no registration required."
category: common
keywords:
- directory stack manager
- bash directory navigation
- linux directory stack
- command line directory manipulation
- terminal directory history
- pushd popd control
- file system navigation bash
- directory stack clear
- bash dirs command
- terminal directory listing
features:
- Display the directory stack with customizable formatting
- Navigate through recently visited directories using flags
- Clear the directory stack for a fresh start
- Access specific entries in the directory stack by index
- List directory stack without tilde-prefix
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dirs

> Display or manipulate the directory stack.
> The directory stack is a list of recently visited directories that can be manipulated with the `pushd` and `popd` commands.
> See also: `pushd`, `popd`.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Directory-Stack-Builtins>.

- Display the directory stack with a space between each entry:

`dirs`

- Display the directory stack with one entry per line:

`dirs -p`

- Display a numbered list of entries in the directory stack:

`dirs -v`

- Display the directory stack without the tilde-prefix (`~`):

`dirs -l`

- Display only the `n`th entry in the directory stack, starting at 0 (Bash only):

`dirs +{{n}}`

- Display only the `n`th entry in the directory stack from the last, starting at 0 (Bash only):

`dirs -{{n}}`

- Clear the directory stack:

`dirs -c`
