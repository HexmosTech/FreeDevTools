---
title: "For Loop - Execute Commands Repeatedly | Online Free DevTools by Hexmos"
name: for
path: /freedevtools/tldr/common/for
canonical: "https://hexmos.com/freedevtools/tldr/common/for/"
description: "Execute shell commands repeatedly with For Loop. Automate tasks, iterate through files/directories, and streamline workflows. Free online tool, no registration required."
category: common
keywords:
- bash for loop
- shell scripting for loop
- linux for loop
- command line for loop
- iterate files bash
- iterate directories bash
- loop through arguments bash
- bash scripting automation
- script repetitive tasks
- loop command execution
features:
- Iterate through command line arguments.
- Execute commands for specified items.
- Loop over a range of numbers.
- Iterate over lists of files.
- Perform commands in every directory.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# for

> Perform a command several times.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Looping-Constructs>.

- Iterate through command line arguments:

`for {{variable}}; do {{echo $variable}}; done`

- Execute the given commands for each of the specified items:

`for {{variable}} in {{item1 item2 ...}}; do {{echo "Loop is executed"}}; done`

- Iterate over a given range of numbers:

`for {{variable}} in {{{from..to..step}}}; do {{echo "Loop is executed"}}; done`

- Iterate over a given list of files:

`for {{variable}} in {{path/to/file1 path/to/file2 ...}}; do {{echo "Loop is executed"}}; done`

- Iterate over a given list of directories:

`for {{variable}} in {{path/to/directory1/ path/to/directory2/ ...}}; do {{echo "Loop is executed"}}; done`

- Perform a given command in every directory:

`for {{variable}} in */; do (cd "${{variable}}" || continue; {{echo "Loop is executed"}}) done`
