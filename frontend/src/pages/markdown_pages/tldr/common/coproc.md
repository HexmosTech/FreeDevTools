---
title: "Coprocess - Create Subshells Asynchronously | Free DevTools"
name: coproc
path: /freedevtools/tldr/common/coproc
canonical: "https://hexmos.com/freedevtools/tldr/common/coproc/"
description: "Create asynchronous subshells with Coproc in Bash. Manage concurrent processes and streamline background tasks. Free online tool, no registration required."
category: common
keywords:
- bash coprocess creation
- asynchronous subshell command
- coproc shell scripting
- linux background process
- bash process management
- command coproc example
- interactive subshell bash
- concurrent process shell
- named coprocess bash
- coproc redirection
features:
- Execute commands in an asynchronous subshell
- Create coprocesses with specific names
- Write to the stdin of a specific coprocess
- Read from the stdout of a specific coprocess
- Manage input and output streams for coprocesses
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# coproc

> Bash builtin for creating interactive asynchronous subshells.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#Coprocesses>.

- Run a subshell asynchronously:

`coproc { {{command1; command2; ...}}; }`

- Create a coprocess with a specific name:

`coproc {{name}} { {{command1; command2; ...}}; }`

- Write to a specific coprocess `stdin`:

`echo "{{input}}" >&"${{{name[1]}}}"`

- Read from a specific coprocess `stdout`:

`read {{variable}} <&"${{{name[0]}}}"`

- Create a coprocess which repeatedly reads `stdin` and runs some commands on the input:

`coproc {{name}} { while read {{line}}; do {{command1; command2; ...}}; done }`

- Create a coprocess which repeatedly reads `stdin`, runs a pipeline on the input, and writes the output to `stdout`:

`coproc {{name}} { while read {{line}}; do {{echo "$line"}} | {{command1 | command2 | ...}} | cat /dev/fd/0; done }`

- Create and use a coprocess running `bc`:

`coproc BC { bc --mathlib; }; echo "1/3" >&"${BC[1]}"; read output <&"${BC[0]}"; echo "$output"`
