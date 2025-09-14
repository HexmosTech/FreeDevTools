---
title: "Push Directory - Manage Directory Stack | Free DevTools"
name: pushd
path: /freedevtools/tldr/common/pushd
canonical: "https://hexmos.com/freedevtools/tldr/common/pushd/"
description: "Manage directory stacks with pushd. Navigate directories efficiently and easily switch between locations in the command line. Free online tool, no registration required."
category: common
keywords:
- directory stack manager
- bash pushd command
- linux directory navigation
- command line directory stack
- pushd popd dirs commands
- shell directory stack
- terminal directory history
- directory stack manipulation
- pushd directory rotation
- command-line navigation tools
features:
- Store and recall directory locations using a stack
- Switch between directories and automatically save the previous one
- Rotate the directory stack to quickly access different locations
- Manipulate the order of directories within the stack
- Navigate the filesystem efficiently with command-line shortcuts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pushd

> Place a directory on a stack so it can be accessed later.
> See also: `popd` to switch back to original directory and `dirs` to display directory stack contents.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-pushd>.

- Switch to directory and push it on the stack:

`pushd {{path/to/directory}}`

- Switch first and second directories on the stack:

`pushd`

- Rotate stack by making the 5th element the top of the stack:

`pushd +4`

- Rotate the stack 4 times to the left (the current directory stays at the top by replacing the 5th element):

`pushd -n +4`
