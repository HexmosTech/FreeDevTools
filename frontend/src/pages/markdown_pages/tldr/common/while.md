---
title: "While Loop - Control Command Execution | Online Free DevTools by Hexmos"
name: while
path: /freedevtools/tldr/common/while
canonical: "https://hexmos.com/freedevtools/tldr/common/while/"
description: "Control command execution with While Loop. Automate repetitive tasks and create conditional execution flows using shell scripting. Free online tool, no registration required."
category: common
keywords:
- while loop execution
- shell script while loop
- bash while loop control
- command line while loop
- repetitive task automation
- conditional execution script
- while loop bash script
- linux while loop
- macOS while loop
- shell scripting automation
features:
- Execute commands conditionally based on return values
- Repeat commands indefinitely until a condition is met
- Process standard input line by line
- Create infinite loops for continuous execution
- Automate tasks based on command success or failure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# while

> Simple shell loop that repeats while the return value remains zero.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-while>.

- Read `stdin` and perform an action on every line:

`while read line; do {{echo "$line"}}; done`

- Execute a command forever once every second:

`while :; do {{command}}; sleep 1; done`

- Execute a command until it fails:

`while {{command}}; do :; done`
